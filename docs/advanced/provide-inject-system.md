---
title: Provide-Inject System
---

# Provide-Inject System

Similar to Vue.js, newcar offers a provide-inject interface, allowing data to be freely transferred between components of different hierarchies.

## `provide`

`provide` allows you to pass data to child components, enabling them to receive it.

Usage:

```typescript
import { createCar, CarObject, Scene, config } from "newcar";
config.canvaskitWasmFile = ""; // omitted here

const car = createCar("#canvas"); // Initialize newcar
const scene = new Scene().add(new CarObject().provide("key", "value"));

car.on("ready-to-play", () => {
  car.play();
});
```

## `inject`

`inject` allows you to receive data from parent components.

Usage (modifying the program above):

```typescript
import { createCar, CarObject, Scene, config } from "newcar";
config.canvaskitWasmFile = "" // omitted here

const car = createCar("#canvas"); // Initialize newcar
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

If everything goes well, you should see `value` outputted in the console.
