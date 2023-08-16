---
title: Circle
---

`Circle` 可以创建一个圆，这个圆可以是完整的也可以是不完整的

# 参数

```javascript
new Circle({
  startAngle?: number,
  endAngle?: number,
  borderColor?: string,
  borderWidth?: number,
  fillColor?: string,
})
```

- `startAngle` 圆开始的角度
- `endAngle` 圆结束的角度
  example: 当 `startAngle` 为 `0` , `endAngle` 为 `Math.PI` 的时候，此圆是一个半圆，有了这个特性后，我们可以用它做扇形统计图
- `borderColor` 设置边框的颜色
- `borderWidth` 设置边框的宽度
- `fillColor` 设置填充的颜色
