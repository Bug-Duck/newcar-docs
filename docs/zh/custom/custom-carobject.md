---
title: 自定义 carObject
---

# 自定义 CarObject

相信在前面的学习，你已经熟练掌握了如何使CarObject工作，接下来，你将接触一些更底层的东西——自定义动画组件。

## 基类

Newcar的所有组件都是有着复杂的层层继承的关系，但是都离不开他的基类—— `CarObject`.

接下来，我们将通过demo来学习如何自定义组件。以下例子用于创建一个三角形。

第一步，安装newcar：

```shell
pnpm add newcar;
```

第二步，继承自CarObject:

```javascript
import { CarObject } from "newcar";

export class Triangle extends CarObject {
  constructor(first, second, last，option) {
    super(option ?? {}); // 传入共有的属性
    this.first = first;
    this.second = second;
    this.last = last;
  }

  // ...
}
```

第三步，绘制他，接下来就要一些CanvasKit-WASM的知识了，目前官方文档还不够完全，只有skia的文档，不过用TypeScript很容易根据类型判断推导出他的用法。

```javacsript
import { CarObject } from "newcar";

export class Triangle extends CarObject {
  constructor(first, second, last，option) {
    super(option ?? {}); // 传入共有的属性
    this.first = first;
    this.second = second;
    this.last = last;
  }

  draw(
    paint,
    canvas,
    canvaskit,
    element,
    ..arg,
  ) {
    // 调整为stroke模式
    paint.setStyle(canvaskit.PaintStyle.Stroke);
    canvas.drawLine(...this.first, ...this.second, paint);
    canvas.drawLine(...this.second, ...this.last, paint);
    canvas.drawLine(...this.last, ...this.first, paint);
  }
}
```

如此的简单，以后还会有更多的开发小技巧，敬请期待~
