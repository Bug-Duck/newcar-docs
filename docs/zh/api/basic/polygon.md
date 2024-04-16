## `PolygonOptions`

`PolygonOptions` 提供了配置多边形的可选属性。

#### 属性:

- `style` (`PolygonStyle` | `undefined`): 定义多边形的样式，继承自 `FigureStyle`。

## `PolygonStyle`

`PolygonStyle` 定义了多边形的样式属性，继承自 `FigureStyle`。

## `Polygon(points: Vector2[], options?: PolygonOptions)`

`Polygon` 类用于在画布上绘制多边形。

#### 属性:

- `points` (`Vector2[]`): 多边形的顶点坐标数组。
- `options` (`PolygonOptions` | `undefined`): 可选配置，包括样式和其他属性。

#### 方法：

- `constructor(points: Vector2[], options?: PolygonOptions)`: 构造一个新的多边形实例。
- `init(ck: CanvasKit)`: 初始化多边形，设置画笔等。
- `predraw(ck: CanvasKit, propertyChanged: string)`: 在属性改变前调用，用于更新绘制参数。
- `draw(canvas: Canvas)`: 在指定的画布上绘制多边形。

## `PathOptions`

`PathOptions` 提供了配置路径的可选属性。

#### 属性:

- `style` (`PathStyle` | `undefined`): 定义路径的样式，继承自 `FigureStyle`。
