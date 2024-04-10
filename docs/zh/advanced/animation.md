---
title: 动画
---

newcar动画的底层原理就是在每一帧不断地改变一个对象的某个属性，在快速开始中，相信你已经掌握了newcar动画的基本使用方法，现在我们来详细介绍。

如何定义一个动画？我们之前已经学习过了一个内置动画 `create`, 除此之外，newcar还内置了许多种的动画，以下是常用的动画列表：

- create
- destroyrotate
- move
- scale
- zoomIn
- zoomOut
- transparency
- fadeIn
- fadeOut
- ...
  但是这些动画总不可能涵盖全部 `Widget` 的属性和样式，在newcar的远古版本中，我们将每一个属性都写了一个对应的动画，这就导致了打包后的体积奇大无比，这是得不偿失的。新版本的newcar采用 `changeProperty` API和 `changeStyle` API来改变对象的属性或值。`changeProperty` 与 `changeStyle` 的用法一致，区别是一个改变属性一个改变对象的样式。

```javascript
widget.animate(changeProperty("x", 0, 100));
// 或
widget.animate(changeProperty("x"), {
  from: 0,
  to: 120
});
```

`changeProperty` 和 `changeStyle` 也可以同时改变多个值

```javascript
widget.animate(changeProperty(["x", "y"], [0, 0], [100, 200]));
// 或
widget.animate(changeProperty("x"), {
  from: [0, 0],
  to: [100, 200]
});
```

`animate` 的第四个参数中可以填入 `by` 字段，用于设置这个动画的变速曲线

Newcar标准库提供了多种变速曲线，且都以 `ease` 开头，可以通过代码提示或查看他的函数图像来选择。

变速曲线图像地址：[https://www.desmos.com/calculator/yasltaa9um](https://www.desmos.com/calculator/yasltaa9um)
