---
title: Custom Animation
---

# Custom Animation

In `newcar`, all animation classes inherit from the `AnimationBuilderItem` class, which has two required parameters:

- `startFrame` (the time when the animation starts, in frames)
- `length` (the duration of the animation, in frames)

## Basic Framework

```javascript
import { animation } from "./node_modules/newcar/dist/newcar.js";

class MyAnimationItem extends animation.AnimationBuilderItem {
  constructor(datas) {
    super();
    this.startAt = datas.startAt;
    this.lastsFor = datas.lastsFor;
    this.obj = datas.bindTo;
    // ......
  }

  get startFrame() {
    return this.startAt;
  }

  get length() {
    return this.lastsFor;
  }
}
```

You can choose to use `startAt` and `lastsFor` as the start and duration of the animation, and use `by` as the easing curve.

:::info
Of course, you can use other names if you prefer. However, for standardization and ease of sharing and distribution, it is recommended to use standard naming conventions.
:::

## Changing Parameters

Next is the `onDrawFrame` function for the animation. This method takes two parameters:

- The cumulative number of frames from the start of the animation until now. For example, if an animation starts at frame 60 and it is currently at frame 70, the cumulative frame count would be 70-60=10 frames.
- An underlying interface, which we won't go into detail here.

```javascript
import { animation } from "newcar";

class MyAnimationItem extends animation.AnimationBuilderItem {
  constructor(datas) {
    super();
    this.startAt = datas.startAt;
    this.lastsFor = datas.lastsFor;
    this.obj = datas.bindTo;
    // ......
  }

  get startFrame() {
    return this.startAt;
  }

  get length() {
    return this.lastsFor;
  }

  onDrawFrame(frameCount, _parent) {
    obj.xxx += 1;
  }
}
```
