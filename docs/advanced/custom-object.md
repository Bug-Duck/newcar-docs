---
title: Custom Components Object
---

# Custom Components Object

To create a custom component object, you need to inherit the `Carobj` class:

```javascript
import { object } from "newcar";

class MyObject extends object.Carobj {
  constructor(data) {
    super(data);
    this.value = data.value;
  }
}
```

Here, `datas` is the parameter of `Carobj` and can also have custom parameters, such as the `value` in the example.

## `onDraw`

Next is the **draw function**. We need to override the `onDraw` method in the parent class. This function is executed once per frame to draw the latest data on the canvas.

This function accepts **two parameters** of the following **types**:

- `CanvasRenderingContext2d`: The context for drawing the component in the canvas.
- `HTMLCanvasElement` (optional): This is the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) of the `<canvas>` element to which this animation is bound.

```javascript
import { object } from "newcar";

class MyObject extends object.Carobj {
  constructor(data) {
    super(data);
    this.value = data.value;
  }

  onDraw(ctx, ele) {
    ctx.lineTo(100, 100); // Let your imagination run wild here!
    ctx.stroke();
    return ctx;
  }
}
```

## `onSet`

The `onSet` function is executed before the animation starts and is used to preload images and other resources.

```javascript
class MyObject extends object.Carobj {
  // ...
  onSet() {
    // Preload resources or perform setup here
  }
}
```

## `onModify`

The `onModify` function is called in each frame and is used to modify the value of the object itself.

## Important Note

When you want to draw at the user-defined coordinates (x, y), you don't need to pass x and y as arguments. Instead, you should choose to draw at (0, 0). Let's take a look at a segment of the source code for `Carobj`:

```javascript
export class Carobj {
  // ...
  onUpdate(ctx: CanvasRenderingContext2D) {
    if (this.display === true) {
      this.onModify();
      ctx.save();
      ctx.translate(this.x, this.y); // Pay special attention here
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

From the above code, it can be seen that `Carobj` automatically moves the coordinate system to the user-defined coordinates. So, you just need to draw your desired shape at (0, 0).
