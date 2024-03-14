---
title: Color System
---

# Color System

newcar offers a wide range of colors. Let's introduce the use of the Color class next.

## Parsing Color Names

```javascript
import { Color /* ... */ } from "newcar";
// ...
const color1 = Color.parse("red"); // Parses the color named “red” and converts it into a Color object.
```

## RGBA

```javascript
const color2 = Color.rgba(255, 0, 0, 0);
```

:::tip
In the newcar standard library and mods thereafter, colors need to use the Color:

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

值得一提的是，CanvasKit-WASM中定义的颜色类是 `Float32Buffer` 类型，如果你想自定义组件，这个会变得非常有用:

```typescript
color2.toFloat4();
```
