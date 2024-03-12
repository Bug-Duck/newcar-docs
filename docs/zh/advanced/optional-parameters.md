---
title: 可选参数
---

# 可选参数

正如通常所理解的那样，`CarObject` 作为 Newcar 中所有组件的基础类。以下参数在所有组件中共享公共特性，表明它们的普遍适用性。

设置这些参数有两种方法：

```typescript
// 第一种方法：
const obj = new CarObject({
  x: 100,
  y: 100
});

// 第二种方法：
obj.x = 200;
obj.y = 200;
```

两种方法都同样有效。

## `CarObject.display`

此属性决定组件的可见性，可以是 `true` 或 `false`。

## `CarObject.x`

此属性设置 x 坐标值。

## `CarObject.y`

此属性设置 y 坐标值。

## `CarObject.scaleX`

此属性调整沿 x 轴的缩放比例。

:::tip
将 `scaleX` 或 `scaleY` 设置为 -1 会翻转对象。
:::

## `CarObject.scaleY`

此属性调整沿 y 轴的缩放比例。

## `CarObject.centerX`

此属性指定沿 x 轴的中心。

:::info

`centerX` 和 `centerY` 是相对的；这意味着如果您将对象的位置视为 (0, 0)，中心点将偏移到 (0 + centerX, 0 + centerY)。

:::

## `CarObject.centerY`

此属性指定沿 y 轴的中心。

## `CarObject.rotation`

此属性决定对象的旋转。

:::info

在 0.8.0 版本之前，旋转范围严格为 [0, 2 * Math.PI]。然而，0.8.0 版本之后（由于 CanvasKit-WASM），范围已调整为 [0, 360]。

:::

## `CarObject.transparency`

此属性管理对象的透明度，有效范围为 [0, 1]。
