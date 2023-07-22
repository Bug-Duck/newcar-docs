---
title: 组件总览
---

在NewCar动画引擎中，所有的组件，都是继承于 `Carobj` 的，也就是说，`Carobj` 拥有的参数其他的组件也拥有，比如：

```javascript
const x = new Carobj({
  scaleX: 2
});

const y = new Text("Hello world!", {
  scaleX: 2
});
```

其中y因为继承了 `Carobj` 的所有属性，所以可以使用 `scaleX` 属性。

在以下文档中，我们会省略继承自 `Carobj` 的参数

设置组件的参数有两种方法：

```javascript
// 第一种方法
const object = new Carobj({
  x: 100,
  y: 100
});

// 第二种方法
const object = new Carobj({});
object.x = 100;
object.y = 100;
```

在以下文档中，默认使用第一种方式去设置，与第二种方式的参数名相同。
