## `RectOptions`

`RectOptions` 提供了配置矩形的可选属性。

#### 属性:

- `style` (`RectStyle` | `undefined`): 定义矩形的样式，继承自 `FigureStyle`。

## `RectStyle`

`RectStyle` 定义了矩形的样式属性，继承自 `FigureStyle`。

## `Rect(from: Vector2, to: Vector2, options?: RectOptions)`

`Rect` 类用于在画布上绘制矩形。

#### 属性:

- `from` (`Vector2`): 矩形的一个角的坐标。
- `to` (`Vector2`): 矩形对角角的坐标。
- `options` (`RectOptions` | `undefined`): 可选配置，包括样式和其他属性。

#### 方法：

- `constructor(from: Vector2, to: Vector2, options?: RectOptions)`: 构造一个新的矩形实例。
- `init(ck: CanvasKit)`: 初始化矩形，设置画笔等。
- `predraw(ck: CanvasKit, propertyChanged: string)`: 在属性改变前调用，用于更新绘制参数。
- `draw(canvas: Canvas)`: 在指定的画布上绘制矩形。
