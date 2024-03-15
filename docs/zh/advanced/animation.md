---
title: 动画
---

# 动画

newcar动画的底层原理就是在每一帧不断地改变一个对象的某个属性，在快速开始中，相信你已经掌握了newcar动画的基本使用方法，现在我们来详细介绍。

如何定义一个动画？我们之前已经学习过了一个内置动画 `move`, 除此之外，newcar还内置了许多种的动画，以下是常用的动画列表：

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

但是这些动画不可能涵盖所有值的动画，这时我们需要一个函数来变化属性的名字。在远古版本的newcar中，动画需要继承自一个动画类，并重写里面的方法才能实现。后来，newcar的动画变成了一个函数，再后来就有了 `changeProperty` 函数.

用法：

```javascript
circle.animate(changeProperty("radius", 0, 1)， 100);
// 或
circle.animate(changeProperty("radius")，100, {
  from: 0,
  to: 1,
});
```

`cahngeProperty` 还可以同时改变一个对象的多个值：

```javascript
circle.animate(changeProperty(["scaleX", "scaleY"], 0, 3), 100);
// 或
circle.animate(changeProperty(["scaleX", "scaleY"]), 100, {
  from: 0,
  to: 3
});
```
