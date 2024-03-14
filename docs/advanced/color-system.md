---
title: Color System
---

# Color System

newcar offers a wide range of colors. Let's delve into the use of the Color class.

## Parsing Color Names

```javascript
import { Color /* ... */ } from "newcar";
// ...
const color1 = Color.parse("red"); // Parses the color named “red” and converts it into a Color object.
```

## RGBA

```javascript
const color2 = Color.rgba(255, 0, 0, 1); // Corrected alpha value to 1 for opacity
```

:::tip
In the newcar standard library and subsequent mods, colors need to utilize the Color:

```js
import { createCar, Arc, Scene, config } from "newcar";
config.canvaskitWasmFile = ""; // omitted here

const car = createCar("#canvas"); // Initialize newcar
const scene = new Scene().add(
  new Arc(100, {
    borderColor: color2
  })
);

car.on("ready-to-play", () => {
  car.play();
});
```

:::

It's worth mentioning that the color class defined in CanvasKit-WASM is of the `Float32Buffer` type, which becomes very useful if you want to customize components:

```typescript
color2.toFloat4();
```
