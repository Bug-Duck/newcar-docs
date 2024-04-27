---
标题： 入门指南
---

# 入门指南

欢迎来到 Newcar 动画引擎初学者指南！通过本指南，您可以了解 Newcar 的一些基本概念和知识，包括：

- `CarEngine`
- `App`
- `Scene`
- `Widget`
- `Animation`

这些概念将在以后的文档中详细解释。本指南将帮助您学习 Newcar 动画引擎的基本使用方法。

## 创建新车项目

“工欲善其事，必先利其器。”

首先，确保您已安装以下工具：

- Node.js
- 包管理器，例如 NPM、Yarn 或 PNPM
- 代码编辑器，例如 VSCode、Webstorm
- 支持 WebAssembly 编译的浏览器，建议使用最新版本的 Firefox、Chrome、Edge

### Newcar CLI

我们提供了一个 [CLI 工具](https://www.npmjs.com/package/@newcar/cli)来帮助你快速创建 Newcar 项目。

如果你是第一次使用，需要先通过以下命令安装：

:::code-group

```shell [npm]
$ npm install -g @newcar/cli
```

```shell [yarn]
$ yarn add -g @newcar/cli
```

```shell [pnpm]
$ pnpm add -g @newcar/cli
```

:::

然后，您可以通过运行以下命令创建 Newcar 项目：

```shell
$ ncli create my-newcar-project
$ cd my-newcar-project
$ npm install
```

### Vite CLI

我们建议使用 [PNPM + Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) 来创建我们的项目。

```shell
$ pnpm create vite my-newcar-project
$ cd my-newcar-project
$ pnpm install
```

接下来，安装 Newcar 和 CanvasKit-WASM 软件包。

```shell
$ pnpm add newcar
$ pnpm add canvaskit-wasm
```

## 初始化项目

首先，将 `<canvas>` 元素添加到 HTML 文件中以进行渲染。

```html
<canvas width="1600" height="900" id="canvas"></canvas>
```

然后，导入 Newcar 并初始化 `CarEngine` 对象。

```typescript
import * as nc from "newcar";

const engine = await new nc.CarEngine().init("../node_modules/canvaskit-wasm/bin/canvaskit.wasm");
```

在上面的代码中，我们导入了“newcar”并将其命名为“nc”。然后我们创建了一个 CarEngine 对象并传入我们刚刚安装的 CanvasKit-WASM 文件。

## 创建动画应用程序

```typescript
import * as nc from "newcar";

const engine = await new nc.CarEngine().init("../node_modules/canvaskit-wasm/bin/canvaskit.wasm");

const app = engine.createApp(document.querySelector("#canvas"));
```

我们调用了 CarEngine.createApp 来创建动画实例，并传入 `<canvas>` 的 DOM 对象。

## 创建场景并添加对象

```typescript
import * as nc from "newcar";

const engine = await new nc.CarEngine().init("../node_modules/canvaskit-wasm/bin/canvaskit.wasm");
const app = engine.createApp(document.querySelector("#canvas"));
const root = new nc.Circle(100);
const scene = new nc.Scene(root);
app.checkout(scene);
app.play();
```

首先，我们使用 `nc.Circle` 创建了一个圆形的 Widget，它是[基础 Widget 的官方扩展](/dev/basic-widget)。`Circle` 的构造函数的第一个参数是圆的半径，我们将其设置为“100”。

然后，我们创建了一个“Scene”对象，并将圆形小部件设置为该场景的根 Widght。一个场景只能有一个根 Widget，但一个根 Widget 可以有多个子 Widget，并且这些子 Widget 也可以有自己的子 Widget，从而形成场景的树结构。

最后，我们使用 App.checkout 方法切换到该场景，并使用 App.play 方法播放动画。

如果正确设置项目，您将在屏幕上看到一个白色圆圈。

## 添加动画

```typescript
root.animate(nc.create, 0, 30);
```

此方法将向此根小部件添加一个名为“create”的动画，并设置动画在第一个时间单位开始。

恭喜！您已经了解了 Newcar 动画引擎的基本使用方法。稍后我们会更深入地解释。如果您喜欢我们的项目，欢迎在我们的[仓库](https://github.com/dromara/newcar)上做出贡献或给我们一个免费的 Star。
