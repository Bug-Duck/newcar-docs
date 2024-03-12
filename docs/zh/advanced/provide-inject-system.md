---
title: 注入
---

# 注入

类似于Vuejs， newcar提供了provide-inject接口，这使得不同层级组件之间可以自由地传输数据。

## `provide`

`provid`允许你向子组件传递一个数据，使得子组件可以接收它。

用法：

```typescript
import { createCar, CarObject, Scene, config } from "newcar";
config.canvaskitWasmFile = ""; // 此处省略

const car = createCar("#canvas"); // 初始化newcar
const scene = new Scene().add(new CarObject().provide("key", "value"));

car.on("ready-to-play", () => {
  car.play();
});
```

## `inject`

`inject`允许你从父组件接收数据。

用法（修改以上程序）：

```typescript
import { createCar, CarObject, Scene, config } from "newcar";
config.canvaskitWasmFile = "" // 此处省略

const car = createCar("#canvas"); // 初始化newcar
const scene = new Scene()
  .add(new CarObject()
    .provide("key", "value")
    .add(new CarObject()
      .setup(async (obj) => {
        console.log(
          obj.inject("key");
        )
      })
    )
  )

car.on("ready-to-play", () => {
  car.play();
});
```

如果一切都好的话，你将会在控制台看到 `value` 的输出
