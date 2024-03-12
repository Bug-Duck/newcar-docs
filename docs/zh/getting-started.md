---
title: 入门指南
---

# 入门指南 <Badge type="tip" text="^0.8.0" />

## 安装

使用您偏好的包管理器安装 `newcar`：

### npm

```shell
npm install newcar
```

### yarn

```shell
yarn add newcar
```

### pnpm

```shell
pnpm add newcar
```

## 初始化

我们建议使用 Vite 来构建我们的动画，在这里我们将 pnpm 作为一个实例。

```shell
pnpm create vite
```

然后，您可以选择您喜欢的框架来构建您的程序。作为一个演示，我们使用原生环境。

### 创建

要通过 Newcar 创建一个动画，我们首先需要一个动画对象---`Car`。

通过 `newcar` 或 `createCar` 来创建一个动画。

```javascript
import { createCar, Scene } from "newcar";

const animation = createCar("#canvas");
```

定义一个 `<canvas>` 标签并将 id 设置为 `canvas`：

```html
<canvas id="canvas" width="1600" height="900"></canvas>
```

然后，我们需要选择 CanvasKit-WASM 的文件，安装 CanvasKit-WASM 并导入 `config` 来更改设置：

```shell
pnpm add canvaskit-wasm@0.39.1
```

```typescript
import { config } from "newcar";

config.canvaskitWasmFile = "../node_modules/canvaskit-wasm/bin/canvaskit.wasm";
```

接下来，我们将为动画创建一个场景并切换到它。

```javascript
const scene = new Scene();
animation.scene = scene;
```

最后一步是当 canvaskit 加载完毕时播放它：

```javascript
animation.on("ready-to-play", () => {
  animation.play();
});
```

现在，动画已经运行了，但画布上没有任何东西，让它做一些吸引人的事情。

### 添加一个对象

Newcar 提供了许多对象，因此您有更多选择（我们有基础库和一些官方模块，请参考 API 文档。）在这个示例中，我们使用 `Text` 作为一个例子。

```javascript
import { createCar, Scene, Text } from "newcar";

// 省略之前的代码。

scene.add(
  new Text("Hello world!", {
    x: 100,
    y: 100,
    size: 50
  })
);
```

如果一切正常，您将在画布上看到一个显示 "Hello world" 的文本对象。

### 设置

我们使用异步函数来控制对象，第一个参数是它本身，您可以控制它的行为。

下面的代码可以等待 100 帧并将文本更改为 "Hi world"。

```javascript
import { createCar, Scene, Text, sleep } from "newcar";

// 省略之前的代码。

const scene = new $.Scene().add(
  new Text("Hello world", {
    x: 100,
    y: 100,
    size: 50
  }).setup(async (obj) => {
    await sleep(100);
    obj.text = "Hi world";
  })
);
```

### 动画化

我们需要使用 `animate()` 来对对象进行动画化。第一个参数是动画函数，第二个是动画持续的帧数，最后是更多参数。

```javascript
import { createCar, Scene, Text, sleep, move } from "newcar";

const scene = new $.Scene().add(
  new Text("Hello world", {
    x: 100,
    y: 100,
    size: 50
  }).setup(async (obj) => {
    await sleep(100);
    obj.animate(move, 100, {
      toX: 300,
      toY: 300
    });
  })
);
```

这些代码将使文本在 100 帧期间移动到 (300, 300)。

您还可以使用时间函数来控制动画的速度，只需使用参数 `by` 即可。Newcar 也内置了一些时间函数，请参考 [https://www.desmos.com/calculator/yasltaa9um](https://www.desmos.com/calculator/yasltaa9um) 获取更多信息。

这就是入门级文档的所有内容。如果您喜欢这个项目，请在 GitHub 上给我们一个星标。
