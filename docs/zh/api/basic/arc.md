## `Arc`

`Arc` 类用于在画布上绘制圆弧形状。它是 `Figure` 类的扩展，专门用于创建圆弧。

### 属性:

- `radius` (`number`): 圆弧的半径。
- `from` (`number`): 圆弧的起始角度，以度为单位。
- `to` (`number`): 圆弧的结束角度，以度为单位。

### 方法:

- `constructor(radius: number, from: number, to: number, options?: FigureOptions)`: 构造函数，初始化圆弧的基本属性。
- `init(ck: CanvasKit)`: 初始化圆弧相关的画笔和路径。
- `predraw(ck: CanvasKit, propertyChanged: string)`: 在属性更改前准备绘制所需的资源。
- `draw(canvas: Canvas)`: 在指定的画布上绘制圆弧。

### 示例代码:

```typescript
const arc = new Arc(100, 0, 180, {
  style: {
    borderColor: new Color(255, 0, 0),
    borderWidth: 5,
    fill: true,
    fillColor: new Color(0, 255, 0)
  }
});
```

这两个类提供了绘制圆形和圆弧的功能，允许开发者以编程方式在CanvasKit环境中创建复杂的图形。通过继承和扩展 `Figure` 类，`Arc` 和 `Circle` 在保持接口一致性的同时，提供了专门的功能来满足不同的绘图需求。
