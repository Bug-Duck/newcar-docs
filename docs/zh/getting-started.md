---
title: 入门指南
---

# 入门指南

欢迎来到Newcar动画引擎的入门指南！在这里，你将学到Newcar的一些基础概念和知识，包括：

- `CarEngine`
- `App`
- `Scene`
- `Widget`
- `Animation`

这些概念和知识将会在以后的文档中详细讲解，此篇将粗略介绍Newcar动画引擎的基础用法，让你快速掌握Newcar的开发思想，话不多说，我们开始吧！

## 创建一个Newcar项目

“工欲善其事，必先利其器。”

首先你需要准备的东西有：

- Nodejs
- NPM/PNPM/YARN
- 一个现代化的代码编辑器，如VSCode, Webstorm等
- 一个支持编译WebAssembly的浏览器，这里推荐最新版本的Firefox, Chrome, Edge

这里我们推荐使用PNPM和Vite去创建我们的项目，为了方便演示，我们使用Vanilla环境，你也可以选择你喜欢的框架

```shell
$ pnpm create vite my-newcar-project
$ cd my-newcar-project
$ pnpm install
```

然后我们需要安装两个东西，Newcar本体和CanvasKit-WASM

```shell
$ pnpm add newcar
$ pnpm add canvaskit-wasm
```

我们可以看到，Vite自动在 `index.html` 里引入了 `main.ts`, 我们把 `main.ts` 里的东西全部删掉，在 `index.html` 的 `<body>` 语段里加入一个 `<canvas>` 标签

```html
<canvas width="1600" height="900" id="canvas"></canvas>
```

然后在 `main.ts` 里加入如下代码

```typescript
import * as nc from "newcar";

const engine = await new nc.CarEngine().init("../node_modules/canvaskit-wasm/bin/canvaskit.wasm");
```

在上述的代码中，我们引入了 `newcar` 并将它命名为 `nc`, 然后我们创建了一个 `CarEngine` 对象并传入了刚才安装的CanvasKit-WASM文件。

## 创建一个动画App

```typescript
import * as nc from "newcar";

const engine = await new nc.CarEngine().init("../node_modules/canvaskit-wasm/bin/canvaskit.wasm");
const app = engine.createApp(document.querySelector("#canvas"));
```

我们使用 `CarEngine.createApp` 去创建了一个动画实例，并传入了 `<canvas>` 的dom对象

## 创建场景并加入对象

```typescript
import * as nc from "newcar";

const engine = await new nc.CarEngine().init("../node_modules/canvaskit-wasm/bin/canvaskit.wasm");
const app = engine.createApp(document.querySelector("#canvas"));
const root = new nc.Circle(100);
const scene = new nc.Scene(root);
app.checkout(scene);
app.play();
```

首先我们创建了一个root, 是一个 `Widget` 的继承类 `Circle`, 这个继承类构造函数的第一个参数是这个圆的半径，去哦们这里设为 `100`

紧接着我们创建了一个 `Scene` 对象，并将root设置为这个场景的根widget, 一个场景只能有一个根widget， 但一个根widget可以有多个子widget, 子widget又可以有子widget, 就这样形成了一个场景的树状结构。
最后我们使用 `App.checkout` 方法切换到了这个场景，并使用`App.play` 方法播放动画

如果一切都没有问题的话，你会在画布上看见一个半径为 `100` 的白色的圆

## 添加动画

```typescript
root.animate(nc.create, 0, 30);
```

此方法会给这个根widget添加一个名字叫 `create` 的动画，并设置动画的开始为第0个时间单位

恭喜你！你已经了解了Newcar动画引擎的基本使用，接下来我们会详细讲解每个概念。如果喜欢我们的项目，欢迎加入我们给我们做贡献或在GitHub上给我们一个免费的Star.
