## `ArrowOptions`

`ArrowOptions` 提供了配置箭头的可选属性。

#### 属性:

- `style` (`ArrowStyle` | `undefined`): 定义箭头的样式，继承自 `FigureStyle`。

## `ArrowStyle`

`ArrowStyle` 定义了箭头的样式属性，继承自 `FigureStyle`。

## `Arrow(from: Vector2, to: Vector2, options?: ArrowOptions)`

`Arrow` 类用于在画布上绘制带箭头的线段。

#### 属性:

- `from` (`Vector2`): 箭头的起点坐标。
- `to` (`Vector2`): 箭头的终点坐标。
- `options` (`ArrowOptions` | `undefined`): 可选配置，包括样式和其他属性。

#### 方法：

- `constructor(from: Vector2, to: Vector2, options?: ArrowOptions)`: 构造一个新的箭头实例。
- `init(ck: CanvasKit)`: 初始化箭头，设置画笔等。
- `predraw(ck: CanvasKit, propertyChanged: string)`: 在属性改变前调用，用于更新绘制参数。
- `draw(canvas: Canvas)`: 在指定的画布上绘制箭头。
