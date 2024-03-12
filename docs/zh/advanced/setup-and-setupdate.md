---
title: setup与setUpdate
---

# setup与setUpdate

## setup

相信在前面的学习中你已经熟练掌握了setup的使用方法，这里不再赘述。

## setUpdate

在newcar version 0.6.0 以后我们推荐使用setup, 但是在许多场景下，setUpdate仍是不可替代的一个重要的方法

setUpdate用于设置一个函数用于在每一帧调用，其第一个参数是当前的帧数，第二个是当前的`CarObject`。

用法：

```typescript
import { createCar, CarObject, Scene, config } from "newcar";
config.canvaskitWasmFile = ""; // 此处省略

const car = createCar("#canvas"); // 初始化newcar
const scene = new Scene().add(new CarObject()
  .setUpdate((elapsed: number, object) => {
    if (elapsed >= 100 && elapsed <= 200) {
      object.x += 10;
      object.y += 10;
    }
  });
);

car.on("ready-to-play", () => {
  car.play();
});
```

同时`Scene`对象也可以使用setUpdate,但是传入的函数只有一个参数，即当前帧数

```typescript
scene.setUpdate((elapsed: number) => {
  // ...
});
```
