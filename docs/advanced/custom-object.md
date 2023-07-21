---
title: Custom Components Object
---

# Custom Components Object

To create a custom component object, you need to inherit the `Carobj` class:

```javascript
import * as newcar from "./node_modules/newcar/dist/newcar.js";

class MyObject extends newcar.object.Carobj {
  constructor(datas) {
    super(datas);
    this.value = datas.value;
  }
}
```

Here, `datas` is the parameter of `Carobj` and can also have custom parameters, such as the `value` in the example.

Next is the **drawing function**, where we need to override the `onDraw` method in the parent class. **This function is executed on each frame** to draw the latest data on the canvas.

This function accepts **two parameters** of the following **types**:

- `CanvasRenderingContext2d`: the context for drawing the component in the canvas
- `HTMLCanvasElement` (optional): the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) element of the `<canvas>` tag that this animation is bound to.

```javascript
import * as newcar from "./node_modules/newcar/dist/newcar.js";

class MyObject extends newcar.object.Carobj {
  constructor(datas) {
    super(datas);
    this.value = datas.value;
  }

  onDraw(ctx, ele) {
    ctx.lineTo(100, 100); // Let your imagination run wild here!
    ctx.stroke();
    return ctx;
  }
}
```
