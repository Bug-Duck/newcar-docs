---
title: 自定义动画
---

# 自定义动画

在 `newcar` 中，所有动画类都继承自 `AnimationBuilderItem` 类，它有两个必选的参数：

- `startFrame`（动画开始时的时间，单位：帧）
- `length`（动画的持续时间，单位：帧）

## 基础框架

```javascript
import { animation } from "newcar";

class MyAnimationItem extends animation.AnimationBuilderItem {
  constructor(obj, datas) {
    super();
    this.startAt = datas.startAt;
    this.lastsFor = datas.lastsFor;
    this.obj = obj;
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

你可以选择将 `startAt`, `lastsFor` 作为动画的起始和持续时间，将 `by` 作为变速曲线

:::info
当然你也可以使用其他命名，不过为了标准化，便于共享分发，建议还是使用标准命名。
:::

## 改变参数

接下来就是关于动画的函数 `onDrawFrame` ，此方法接受两个参数：

- 从此动画开始到现在的累计帧数，比如一个动画在第 60 帧开始，现在是第 70 帧，那么累计帧数就是 70-60=10 帧。
- 一个底层接口，我们暂不赘述。

```javascript
import { animation } from "newcar";

class MyAnimationItem extends animation.AnimationBuilderItem {
  constructor(obj, datas) {
    super();
    this.startAt = datas.startAt;
    this.lastsFor = datas.lastsFor;
    this.obj = obj;
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
