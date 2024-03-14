---
title: Custom CarObject
---

# Custom CarObject

By now, you must have mastered how to make CarObject work through previous learning. Next, you will delve into something more fundamental—customizing animation components.

## Base Class

All components in Newcar have a complex hierarchy of inheritance but are inseparable from its base class—`CarObject`.

Next, we'll learn how to customize components through a demo. The following example is for creating a triangle.

First step, install newcar:

```shell
pnpm add newcar;
```

Second step, inherit from CarObject:

```javascript
import { CarObject } from "newcar";

export class Triangle extends CarObject {
  constructor(first, second, last, option) {
    super(option ?? {}); // Pass in common properties
    this.first = first;
    this.second = second;
    this.last = last;
  }

  // ...
}
```

Third step, draw it. This will require some knowledge of CanvasKit-WASM. Currently, the official documentation is not completely comprehensive, only Skia's documentation is available. However, it's quite easy to deduce its usage based on TypeScript types.

```javascript
import { CarObject } from "newcar";

export class Triangle extends CarObject {
  constructor(first, second, last, option) {
    super(option ?? {}); // Pass in common properties
    this.first = first;
    this.second = second;
    this.last = last;
  }

  draw(paint, canvas, canvaskit, element, ...arg) {
    // Switch to stroke mode
    paint.setStyle(canvaskit.PaintStyle.Stroke);
    canvas.drawLine(...this.first, ...this.second, paint);
    canvas.drawLine(...this.second, ...this.last, paint);
    canvas.drawLine(...this.last, ...this.first, paint);
  }
}
```

It's that simple. More development tips and tricks will be shared in the future, so stay tuned~
