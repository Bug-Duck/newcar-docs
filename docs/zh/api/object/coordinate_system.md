---
title： CoordinateSystem
---

`CoordinateSystem` 可以创建一个平面直角坐标系

# 参数

```javascript
CoordinateSystem(
  axisPositiveXLength: number,
  axisPositiveYLength: number,
  axisNegativeXLength: number,
  axisNegativeYLength: number,
  {
    axisXDirection?: "left" | "right",
    axisYDirection?: "top" | "bottom",
    color?: string;
  }
)
```

- `axisPositiveXLength` x轴的正半轴长度
- `axisPositiveYLength` y轴的正半轴长度
- `axisNegativeXLength` x轴的负半轴长度
- `axisNegativeYLength` y轴的负半轴长度
- `axisXDirection` x轴指向的方向
- `axisYDirection` y轴指向的方向
- `color`: 坐标系的颜色

:::warning

> 这里的前4个参数是必选参数，且他是在{}外面的

:::
