# 自定义组件

我们知道，newcar的所有对象都继承自 `Carobj`，我们需要先要继承自 `Carobj` 这个类

```javascript
import * as newcar from "./node_modules/newcar/dist/newcar.js"

class MyObject extends newcar.object.Carobj {
  constructor(datas) {
    super(datas);
    this.value = datas.value
  }
}
```

其中datas是Carobj参数，也可以有你的自定义参数，如示例中的 `value`.

接下来就是绘制函数，我们需要重写父类型中的方法 `onDraw`，此函数在每一帧就会执行一遍，把最新的数据绘制到图像上

此函数接受两个参数，类型分别是 `CanvasRenderingContext2d` 和 `HTMLCanvasElement`，第一个参数代表canvas中绘制组件的上下文，第二个参数是可选参数，是此动画绑定的 `<canvas>` 标签的dom

```javascript
import * as newcar from "./node_modules/newcar/dist/newcar.js"

class MyObject extends newcar.object.Carobj {
  constructor(datas) {
    super(datas);
    this.value = datas.value
  }

  onDraw(ctx, ele) {
    ctx.lineTo(100, 100); // 这里就尽情的发挥你的想象吧！
    ctx.stroke();
    return ctx;
  }
}
```
