---
title: Carobj
---

`Carobj` 是所有组件的基类， `Carobj` 有的参数其他组件也会有，所以在接下来的文档中，会省略 `Carobj` 的参数

# 参数

```javascript
Carobj({
  x: number,
  y: number,
  scaleX?: number,
  scaleY?: number,
  children?: Carobj[],
  operation?: GlobalCompositeOperation,
  display?: boolean,
  rotation?: number,
  transparency?: number,
});
```

- `x` 对象的x轴坐标
- `y` 对象的y轴坐标
- `scaleX` 在水平方向的拉长量
- `scaleY` 在竖直方向的拉长量
- `children` 此组件的子组件
- `operation` 绘制时的方法，可接受值为GlobalCompositeOperation类型，详细见此: [Click here](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
- `display` 设置对象是否隐藏
- `rotation` 设置对象旋转的角度
- `transparency` 设置对象的透明度

# 方法

- `hide()` 隐藏组件
- `appear()` 显示组件
- `addChildren(...children: Carobj[])` 添加子组件
