---
title: 自定义组件对象
---

# 自定义组件对象

要自定义一个组件对象，需要继承 `Carobj` 类：

```javascript
import { object } from "newcar";

class MyObject extends object.Carobj {
  constructor(data) {
    super(data);
    this.value = data.value;
  }
}
```

其中 `datas` 是 `Carobj` 参数，也可以有自定义参数，如示例中的 `value`。

## `onDraw`

接下来是**绘制函数**，我们需要重写父类中的 `onDraw` 方法，**此函数在每一帧就会执行一遍**，把最新的数据绘制到画布上。

此函数接受**两个参数**，**类型**分别是：

- `CanvasRenderingContext2d`：`canvas` 中绘制组件的上下文
- `HTMLCanvasElement`：可选，是此动画绑定的 `<canvas>` 标签的 [DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)。

```javascript
import { object } from "newcar";

class MyObject extends object.Carobj {
  constructor(data) {
    super(data);
    this.value = data.value;
  }

  onDraw(ctx, ele) {
    ctx.lineTo(100, 100); // 这里就尽情的发挥你的想象吧！
    ctx.stroke();
    return ctx;
  }
}
```

## `onSet`
`onSet`函数会在动画开始前执行，用于提前加载图片等资源
```javascript
class MyObject extends object.Carobj {
  // ...
  onSet() {
    // 在这里提前加载一些资源或设置
  }
}
```

## onModify
`onModify`函数会在每一帧调用，用于改变自身的值。

## 特别提醒
当你想要在用户给定的x,y坐标处绘画，不需要将x, y传入，而是应该选择在(0, 0)处绘制，我们看看 `Carobj`的一段源代码

```javascript
export class Carobj {
  // ...
  onUpdate(ctx: CanvasRenderingContext2D) {
    if (this.display === true) {
      this.onModify();
      ctx.save();
      ctx.translate(this.x, this.y); // 特别注意这里
      ctx.rotate(this.#rotation);
      ctx.scale(this.#scaleX, this.#scaleY);
      ctx.globalAlpha = this.#transparency;
      ctx.globalCompositeOperation = this.#operation;
      this.onDraw(ctx);
      for (const child of this.#children) {
        child.onUpdate(ctx);
      }
      ctx.restore();
    }
  }
  // ...
}
```

由以上代码可以得知，`Carobj`已经自动帮你把坐标系移动到用户给定的坐标那里，所以你只需要在(0, 0)处绘制你想要的图形就可以了。
