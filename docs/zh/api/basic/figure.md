## `FigureOptions`

`FigureOptions` 提供了配置图形的可选属性。

#### 属性:

- `style` (`FigureStyle` | `undefined`): 定义图形的样式，包括边框、填充等。

---

## `FigureStyle`

`FigureStyle` 定义了图形的样式属性。

#### 属性:

- `border` (`boolean` | `undefined`): 是否绘制边框，默认为 `false`。
- `borderColor` (`Color` | `undefined`): 边框颜色。
- `borderWidth` (`number` | `undefined`): 边框宽度。
- `fill` (`boolean` | `undefined`): 是否进行填充，默认为 `false`。
- `fillColor` (`Color` | `undefined`): 填充颜色。
- `join` (`StrokeJoin` | `undefined`): 边角的样式，可选值为 `'bevel'`, `'miter'`, `'round'`。
- `cap` (`StrokeCap` | `undefined`): 边缘的样式，可选值为 `'butt'`, `'round'`, `'square'`。
- `offset` (`number` | `undefined`): 用于创建虚线的偏移。
- `interval` (`[number, number]` | `undefined`): 虚线的间隔样式。

## `Figure(options?: FigureOptions)`

`Figure` 是基础图形类，提供了绘制图形的基本框架。

#### 属性:

- `style` (`FigureStyle`): 包含边框、填充等样式的对象。
- `strokePaint` (`Paint`): 描边用的画笔。
- `fillPaint` (`Paint`): 填充用的画笔。

#### 方法：

- `constructor(options?: FigureOptions)`: 构造一个新的图形实例。
- `init(ck: CanvasKit)`: 初始化图形，设置画笔等。
