---
title： CoordinateSystem
---

`CoordinateSystem` 可以创建一个平面直角坐标系

# 参数

```javascript
new CoordinateSystem(
  x_max: number,
  y_max: number,
  x_min: number,
  y_min: number,
  {
    x_direction: "left" | "right",
    y_direction: "top" | "bottom",
    color: string;
  }
)
```

- `x_max` x轴的正半轴长度
- `y_max` y轴的正半轴长度
- `x_min` x轴的负半轴长度
- `y_min` y轴的负半轴长度
- `x_direction` x轴指向的方向
- `y_direction` y轴指向的方向
- `color`: 坐标系的颜色

:::warning

> 这里的前4个参数是必选参数，且他是在{}外面的

:::
