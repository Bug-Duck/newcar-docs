---
title: 父子组件
---

# 父子对象

在 `newcar` 中，对象可以通过 `children` 属性进行嵌套。以下是添加它们的方法：

```javascript
const child = new Circle(200, {
  x: 200,
  y: 300
});

const father = new Circle(300, {
  x: 100,
  y: 200
});

// 添加子Widget
father.add(child);
```

在这种情况下，`child` 的坐标 `(200, 300)` 不是相对于画布左上角的，而是相对于其父组件的位置。

:::tip
此外，父子组件遵循 **“子随父动，父不随子动”** 的原则。这意味着当父组件移动时，子组件会随之移动。当子组件移动时，父组件保持静止。

通过这个功能，您可以设置一个背景，并让场景中的对象成为背景的“子对象”，这样在操作角色移动时背景就会向后移动。
:::

:::info
除了坐标之外，**旋转角度**和**缩放比例**也遵循父子组件原则。

> 这里的旋转角度指的是相对于父组件整个坐标系统的旋转角度，而不是每个组件的旋转角度数值。

:::

但是将对象保存到变量中既麻烦又低效，因此在 0.7.0 版本之后，我们建议使用链式语法：

```javascript
const root = new Widget().add(new Circle(200).setUpdate((elapsed, widget) => {}));
```