<h1 align="center">Simple mind map</h1>

[![npm-version](https://img.shields.io/npm/v/simple-mind-map)](https://www.npmjs.com/package/simple-mind-map)
![npm download](https://img.shields.io/npm/dm/simple-mind-map)
[![GitHub issues](https://img.shields.io/github/issues/MinhCreator/mind-map)](https://github.com/MinhCreator/mind-map/issues)
![license](https://img.shields.io/npm/l/express.svg)
[![GitHub stars](https://img.shields.io/github/stars/MinhCreator/mind-map)](https://github.com/MinhCreator/mind-map/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/MinhCreator/mind-map)](https://github.com/MinhCreator/mind-map/network/members)

> Mind Map. A simple and powerful web mind map library and mind mapping software.

# Clients and plugins

- Thought Mind Map Client

Window, Mac, Linux System. Download address：[Github](https://github.com/MinhCreator/mind-map/releases)

- Only using `js` The mind mapping library does not rely on any framework and can be used to quickly complete the development of Web mind mapping products.

>  Development documentation：[https://MinhCreator.github.io/mind-map-docs/](https://MinhCreator.github.io/mind-map-docs/)

- The Web Mind mapping, based on the mind map library、`Vue2.x`、`ElementUI` Development, supports operating local computer files, can be used as an online mind mapping application, and can also be self-deployed and secondary developed.

>  Demo：[https://MinhCreator.github.io/mind-map/](https://MinhCreator.github.io/mind-map/)

- Cloud storage version. If you need a cloud storage version with a backend, you can try another project we developed.[ideal document](https://github.com/MinhCreator/lx-doc)。

# Features

- [x] Plug-in architecture, in addition to the core functions, other functions are provided as plug-ins, which can be used on demand to reduce the package size.
- [x] Supports logical structure diagram (left, right logical structure diagram), mind map, organizational structure chart, directory organization chart, timeline (horizontal, vertical), fishbone diagram and other structures.
- [x] Built-in multiple themes, allowing highly customized styles and support for registering new themes.
- [x] Node content supports text (normal text, rich text), pictures, icons, hyperlinks, notes, labels, summaries, and mathematical formulas.
- [x] Nodes support dragging (drag to move, free adjustment), multiple node shapes; support for extending node content, support for fully customizing node content using DDM.
- [x] Support canvas dragging and zooming.
- [x] Support two methods of selecting multiple nodes: drag selection with mouse button and Ctrl+left.
- [x] Support export as`json`、`png`、`svg`、`pdf`、`markdown`、`xmind`、`txt`，Support from`json`、`xmind`、`markdown`import
- [x] Support shortcut keys, forward and backward, association lines, search and replace, minimap, watermark, scroll bar, hand-drawn style, rainbow lines, marks, and frames.
- [x] Provides rich configurations to meet various scenarios and usage habits.
- [x] Support collaborative editing
- [x] Support demo mode
- [x] More features waiting for you to discover

The official provides the following plug-ins, which can be introduced on demand (a certain function may not take effect because you have not introduced the corresponding plug-in). For specific usage, please refer to the documentation:

| RichText (Node Rich Text Plugin)           | Select (Mouse multi-select node plug-in)                | Drag (Node drag plug-in)                 | AssociativeLine (Association Line Plug-in)        |
| ------------------------------------ | ----------------------------------------- | ------------------------------------ | ------------------------------------ |
| Export (Export plugin)                   | KeyboardNavigation (Keyboard Navigation Plugin)        | MiniMap (Minimap plugin)                | Watermark (watermark plug-in)               |
| Export (Export plugin)                   | KeyboardNavigation (Keyboard Navigation Plugin)        | MiniMap (Minimap plugin)                | Watermark(watermark plug-in）                |
| TouchEvent  | NodeImgAdjust (Drag and drop to adjust node image size plug-in) | Search (Search plugin)                   | Painter(Node format brush plug-in)            |
| Scrollbar (scroll bar plug-in)              | Formula(Mathematical formula plug-in)                   | Cooperate(Collaborative editing plug-in)            | RainbowLines(rainbow line plug-in)         |
| Demonstrate(Demo mode plugin)          | OuterFrame (Frame plugin)                    | MindMapLayoutPro (Mind Map Layout Plugin) |                                      |


Features that this project will not implement:

> 1.Free nodes, i.e. multiple root nodes;
>
> 2.Continue adding nodes after the summary node;
>
> If you need the above features, then this library may not meet your needs.

# Install

```bash
npm i simple-mind-map
```

# Use

Provide a container element with a non-zero width and height:

```html
<div id="mindMapContainer"></div>
```

Also set the `css` style:

```css
#mindMapContainer * {
  margin: 0;
  padding: 0;
}
```

Then create an instance:

```js
import MindMap from "simple-mind-map";

const mindMap = new MindMap({
  el: document.getElementById("mindMapContainer"),
  data: {
    data: {
      text: "根节点",
    },
    children: [],
  },
});
```

You can get a mind map. Want to achieve more functions? You can check[Development documentation](https://MinhCreator.github.io/mind-map-docs/)。

# License

[MIT](./LICENSE) You may freely use the content for commercial purposes as long as you retain the `simple-mind-map` copyright notice and indicate the source. If you have any questions or do not want to retain the content, you can contact the author to remove it for a fee.

> Example: You can add the following content to any page in your app, such as the About page, Help page, Documentation page, Open Source statement, etc.:
>
> This product's mind map is developed based on the SimpleMindMap project, and the copyright belongs to the source project.[Open source license](https://github.com/MinhCreator/mind-map/blob/main/LICENSE)。

# Development help/technical support/consulting, etc.

Due to limited energy and shift in focus, we are not providing any development support (including paid) for the time being. Please forgive us!

# star

If you like this project, please give it a star, it is very important to us. It the motivate for development

[![Star History Chart](https://api.star-history.com/svg?repos=MinhCreator/mind-map&type=Date)](https://star-history.com/#MinhCreator/mind-map&Date)

# About customization

If you have personalized commercial customization needs, you can contact us. We provide paid development services. Whether it is front-end, back-end, or deployment, we can help you get it done in one stop.


# Thanks to those who appreciated this project

# Original source
## - Author [wanglin2](https://github.com/wanglin2/mind-map)