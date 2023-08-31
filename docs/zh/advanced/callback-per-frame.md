---
title: 每帧回调
---

# 每帧回调

`Car` 对象有一个方法- `onUpdate` 方法，此方法支持传入一个回调函数，动画的每一帧都会执行此回调函数。此回调函数有一个参数currentFrame, 即当前的帧数

```javascript
import { Car, object } from "newcar";

const car = new Car(document.getElementById("animation"), 60);

const textObject = new object.Text("Hello!", {});
car.addAnimationItem(textObject);

car.onUpdate((currentFrame) => {
  if (currentFrame === 30) {
    textObject.text = "Hi!";
  }
});
```

以上代码设置 `textObject` 的文字是"Hello!", 并在第30帧后变为"Hi!"
