import Vue from 'vue'
import Vuex from 'vuex'
import { storeLocalConfig } from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isHandleLocalFile: false, // Whether the operation is a local file
    localConfig: {
      // local configuration
      isZenMode: false, // Whether it is Zen mode
      // Whether to enable node rich text
      openNodeRichText: true,
      // Mouse behavior
      useLeftKeySelectionRightKeyDrag: false,
      //Whether to display scroll bars
      isShowScrollbar: false,
      // Is it dark mode?
      isDark: false,
      // Whether to enable AI function
      enableAi: true
    },
    activeSidebar: '', // Currently displayed sidebar
    isOutlineEdit: false, // Whether it is outline editing mode
    isReadonly: false, // Is it read-only?
    isSourceCodeEdit: false, //Whether it is source code editing mode
    extraTextOnExport: '', // Text added at the bottom when exporting
    isDragOutlineTreeNode: false, // Whether the node of the outline tree is currently being dragged
    aiConfig: {
      api: 'http://ark.cn-beijing.volces.com/api/v3/chat/completions',
      key: '',
      model: '',
      port: 3456,
      method: 'POST'
    },
    // Extended topic list
    extendThemeGroupList: [],
    // Built-in background image
    bgList: []
  },
  mutations: {
    // Set the local file operation flag
    setIsHandleLocalFile(state, data) {
      state.isHandleLocalFile = data
    },

    // Set local configuration
    setLocalConfig(state, data) {
      const aiConfigKeys = Object.keys(state.aiConfig)
      Object.keys(data).forEach(key => {
        if (aiConfigKeys.includes(key)) {
          state.aiConfig[key] = data[key]
        } else {
          state.localConfig[key] = data[key]
        }
      })
      storeLocalConfig({
        ...state.localConfig,
        ...state.aiConfig
      })
    },

    // Set the currently displayed sidebar
    setActiveSidebar(state, data) {
      state.activeSidebar = data
    },

    // Set outline editing mode
    setIsOutlineEdit(state, data) {
      state.isOutlineEdit = data
    },

    //Set whether read-only
    setIsReadonly(state, data) {
      state.isReadonly = data
    },

    // Set source code editing mode
    setIsSourceCodeEdit(state, data) {
      state.isSourceCodeEdit = data
    },

    // Set the text added at the bottom when exporting
    setExtraTextOnExport(state, data) {
      state.extraTextOnExport = data
    },

    // Set up tree node dragging
    setIsDragOutlineTreeNode(state, data) {
      state.isDragOutlineTreeNode = data
    },

    // Extended topic list
    setExtendThemeGroupList(state, data) {
      state.extendThemeGroupList = data
    },

    // Set background image list
    setBgList(state, data) {
      state.bgList = data
    }
  },
  actions: {}
})

export default store
