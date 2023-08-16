---
title: 自定义组件对象
---

# 自定义组件对象

要自定义一个组件对象，需要继承 `Carobj` 类：

```javascript
import { object } from "newcar";

class MyObject extends object.Carobj {
  constructor(datas) {
    super(datas);
    this.value = datas.value;
  }
}
```

其中 `datas` 是 `Carobj` 参数，也可以有自定义参数，如示例中的 `value`。

接下来是**绘制函数**，我们需要重写父类中的 `onDraw` 方法，**此函数在每一帧就会执行一遍**，把最新的数据绘制到画布上。

此函数接受**两个参数**，**类型**分别是：

- `CanvasRenderingContext2d`：`canvas` 中绘制组件的上下文
- `HTMLCanvasElement`：可选，是此动画绑定的 `<canvas>` 标签的 [DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)。

```javascript
import { object } from "newcar";

class MyObject extends object.Carobj {
  constructor(datas) {
    super(datas);
    this.value = datas.value;
  }

  onDraw(ctx, ele) {
    ctx.lineTo(100, 100); // 这里就尽情的发挥你的想象吧！
    ctx.stroke();
    return ctx;
  }
}
```
