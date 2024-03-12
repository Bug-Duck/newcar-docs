---
title: setup and setUpdate
---

# setup and setUpdate

## setup

We believe that you have already mastered the use of setup in your previous learning, so we will not elaborate on it here.

## setUpdate

After newcar version 0.6.0, we recommend using setup, but in many scenarios, setUpdate remains an irreplaceable and important method.

setUpdate is used to set a function to be called in every frame, where the first parameter is the current frame number, and the second is the current `CarObject`.

Usage:

```typescript
import { createCar, CarObject, Scene, config } from "newcar";
config.canvaskitWasmFile = ""; // omitted here

const car = createCar("#canvas"); // Initialize newcar
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

The `Scene` object can also use setUpdate, but the function passed has only one parameter, which is the current frame number.

```typescript
scene.setUpdate((elapsed: number) => {
  // ...
});
```
