## `Circle`

`Circle` 类用于在画布上绘制完整的圆形。它是 `Arc` 类的特例，其中圆弧覆盖360度。

#### 属性:

继承自 `Arc`，并固定 `from` 为 0 度和 `to` 为 360 度。

#### 方法:

- `constructor(radius: number, options?: FigureOptions)`: 构造函数，初始化圆形的基本属性。
- 使用 `Arc` 的方法 `init`, `predraw`, 和 `draw`。

#### 示例代码:

```typescript
const circle = new Circle(50, {
  style: {
    borderColor: new Color(0, 0, 255),
    borderWidth: 2,
    fill: true,
    fillColor: new Color(255, 255, 0)
  }
});
```
