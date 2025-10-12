class Ai {
  constructor(options = {}) {
    this.options = options

    this.baseData = {}
    this.controller = null
    this.currentChunk = ''
    this.content = ''
  }

  init(type = 'huoshan', options = {}) {
    // Volcano engine interface
    if (type === 'huoshan') {
      this.baseData = {
        api: options.api,
        method: options.method,
        headers: {
          Authorization: 'Bearer ' + options.key
        },
        data: {
          model: options.model,
          stream: true
        }
      }
    }
  }

  async request(data, progress = () => {}, end = () => {}, err = () => {}) {
    try {
      const res = await this.postMsg(data)
      const decoder = new TextDecoder()
      while (1) {
        const { done, value } = await res.read()
        if (done) {
          return
        }
        // Get the data of the current slice
        const text = decoder.decode(value)
        // 处理切片数据
        let chunk = this.handleChunkData(text)
        // Determine whether there are incomplete slices. If so, merge them for next processing. If not, obtain the data.
        if (this.currentChunk) continue
        let isEnd = false
        const list = chunk
          .split('\n')
          .filter(item => {
            isEnd = item.includes('[DONE]')
            return !!item && !isEnd
          })
          .map(item => {
            return JSON.parse(item.replace(/^data:/, ''))
          })
        list.forEach(item => {
          this.content += item.choices
            .map(item2 => {
              return item2.delta.content
            })
            .join('')
        })
        progress(this.content)
        if (isEnd) {
          end(this.content)
        }
      }
    } catch (error) {
      console.log(error)
      // Manually stopping the request does not require triggering an error callback
      if (!(error && error.name === 'AbortError')) {
        err(error)
      }
    }
  }

  async postMsg(data) {
    this.controller = new AbortController()
    const res = await fetch(`http://localhost:${this.options.port}/ai/chat`, {
      signal: this.controller.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...this.baseData,
        data: {
          ...this.baseData.data,
          ...data
        }
      })
    })
    if (res.status && res.status !== 200) {
      throw new Error('请求失败')
    }
    return res.body.getReader()
  }

  handleChunkData(chunk) {
    chunk = chunk.trim()
    // If there is a previous slice
    if (this.currentChunk) {
      chunk = this.currentChunk + chunk
      this.currentChunk = ''
    }
    // If done exists, it is considered a complete slice and the last slice.
    if (chunk.includes('[DONE]')) {
      return chunk
    }
    // If the last string is not }, the slice will be incomplete by default and will be saved and used for next splicing (this method is not rigorous, but it can already solve the problems in most scenarios)
    if (chunk[chunk.length - 1] !== '}') {
      this.currentChunk = chunk
    }
    return chunk
  }

  stop() {
    this.controller.abort()
    this.controller = new AbortController()
  }
}

export default Ai
