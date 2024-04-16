## `LineOptions`

`LineOptions` 提供了配置线段的可选属性。

#### 属性:

- `style` (`LineStyle` | `undefined`): 定义线段的样式。

## `LineStyle`

`LineStyle` 定义了线段的样式属性。

#### 属性:

- `color` (`Color` | `undefined`): 线条颜色。
- `width` (`number` | `undefined`): 线条宽度。

## `Line(from: Vector2, to: Vector2, options?: LineOptions)`

`Line` 类用于在画布上绘制线段。

#### 属性:

- `from` (`Vector2`): 线段的起点坐标。
- `to` (`Vector2`): 线段的终点坐标。
- `options` (`LineOptions` | `undefined`): 可选配置，包括样式和其他属性。

#### 方法：

- `constructor(from: Vector2, to: Vector2, options?: LineOptions)`: 构造一个新的线段实例。
- `init(ck: CanvasKit)`: 初始化线段，设置画笔等。
- `predraw(ck: CanvasKit, propertyChanged: string)`: 在属性改变前调用，用于更新绘制参数。
- `draw(canvas: Canvas)`: 在指定的画布上绘制线段。
