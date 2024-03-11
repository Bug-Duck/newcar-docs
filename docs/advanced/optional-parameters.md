---
title: Optional Paramters
---

# Optional Parameters

As it is commonly understood, `CarObject` serves as the foundational class for all components within Newcar. The following parameters share common characteristics across all components, indicating their universal applicability.

There are two methods to set these parameters:

```typescript
// First method:
const obj = new CarObject({
  x: 100,
  y: 100
});

// Second method:
obj.x = 200;
obj.y = 200;
```

Both methods are equally effective.

## `CarObject.display`

This property determines the visibility of components, which can be either `true` or `false`.

## `CarObject.x`

This property sets the x-coordinate value.

## `CarObject.y`

This property sets the y-coordinate value.

## `CarObject.scaleX`

This property adjusts the scale along the x-axis.

:::tip
Setting `scaleX` or `scaleY` to -1 flips the object.
:::

## `CarObject.scaleY`

This property adjusts the scale along the y-axis.

## `CarObject.centerX`

This property specifies the center along the x-axis.

:::info

`centerX` and `centerY` are relative; this means if you consider the object's position as (0, 0), the center point will be offset to (0 + centerX, 0 + centerY).

:::

## `CarObject.centerY`

This property specifies the center along the y-axis.

## `CarObject.rotation`

This property determines the rotation of the object.

:::info

Prior to version 0.8.0, the rotation range was strictly [0, 2 * Math.PI]. However, post version 0.8.0 (due to CanvasKit-WASM), the range has been adjusted to [0, 360].

:::

## `CarObject.transparency`

This property manages the object's transparency, with a valid range of [0, 1].
