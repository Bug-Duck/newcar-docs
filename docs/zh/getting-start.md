---
title: 快速入门
---

# 快速入门 <Badge type="tip" text="^0.3.0" />

## 安装

用你喜欢的包管理器安装 `newcar` 的使用接口：

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

## 项目目录

以下目录结构仅供参考，实际使用**以使用环境为准**：

```txt
Project
├─ src
│  └─ index.js
├─ public
├─ index.html
└─ package.json
```

## 初始化

首先，在 `index.js` 中创建一个 `newcar` 的动画对象 `Car`：

```javascript
// src/index.js
import * as newcar from "./node_modules/newcar/dist/newcar.js";
const { Car } = newcar;

const animation = new Car(
  document.getElementById("animation"), // 获取 Canvas 的 DOM 对象
  60
);
```

其中，第一个参数为 `canvas` 元素的 [DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction) 对象，第二个参数为该动画的帧数。

接着，在 `index.html` 引入此文件：

```html
<!--index.html-->
<script src="./src/index.js" type="module"></script>
<body>
  <canvas id="animation" width="800" height="450"></canvas>
</body>
```

现在，动画还没动起来，所以我们需要**播放**它：

```javascript
animation.play();
```

:::info
现在，动画理论上已经运行，但画布上没有任何东西，所以我们需要在画布上添加一些东西
:::

## 定义动画对象

下一步就是在屏幕上显示一些东西，例如，在屏幕上显示 `"Hello world!"`。

`newcar` 的组件库 `newcar.object` 中包含各种组件，在这我们要用到的是其中的 `Text` 组件：

```javascript
import * as newcar from "./node_modules/newcar/dist/newcar.js";
const { Car } = newcar;
const { Text } = newcar.object;

const text = new Text("Hello world!", {
  x: 200, // 定义 X 坐标
  y: 100, // 定义 Y 轴坐标
  size: 30 // 定义字符大小
});

const animation = new Car(document.getElementById("animation"), 60);
animation.addObject(text); // 在动画中加入这个 Text 对象
animation.play();
```

这时你会看到屏幕上出现 `"Hello world!"` 字符。

<!-- ?> Text的更多参数以及更多组件，请参见[组件列表](/api/objects/object-all.md) -->

## 添加关键帧动画

接下来我们尝试**移动这个文字**，这需要用到 `addAnimationItem` 方法，这里，我们将添加一个 `Translation` 动画：

```javascript
import * as newcar from "./node_modules/newcar/dist/newcar.js";
const { Car } = newcar;
const { Text } = newcar.object;
const { EaseInSine } = newcar.interpolator;
const { Translation } = newcar.animation;

const animation = new Car(document.getElementById("animation"), 60);

const text = new Text("Hello world!", {
  x: 200,
  y: 100,
  size: 30
});

animation.addObject(text).addAnimationItem(
  new Translation({
    startAt: 0, // 动画在第 0 帧开始
    lastsFor: 30, // 持续 30 帧
    to: [200, 200], // 从原有的位置到坐标 (200, 200)
    bindTo: text, // 将动画绑定在 Text 对象上
    by: EaseInSineInterpolator // 设定变速曲线
  })
);

animation.play();
```

以上代码将会把 `text` 从 `(200, 100)` 移动到 `(200, 200)`，从第 0 帧开始，持续 30 帧。

<!-- 运行效果: <iframe height="500" width="800" src="../../demos/begin"></iframe> -->

:::tip
如果你想加入**动画曲线**，那么可以使用 `by` 参数，`newcar` 也内置了许多动画曲线，参考 [Easings](https://easings.net/) 提供的动画曲线!
:::

<!-- <iframe height="500px" src="https://easings.net/"></iframe> -->

<!-- ?> 更多关键帧动画，请参阅[动画列表](api/animations/animation-all.md) -->
