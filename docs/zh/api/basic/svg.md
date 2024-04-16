## `SvgOptions`

`SvgOptions` 提供了配置SVG图形的可选属性。

#### 属性:

- `style` (`SvgStyle` | `undefined`): 定义SVG图形的样式。

## `SvgStyle`

`SvgStyle` 定义了SVG图形的样式属性。

#### 属性:

- `width` (`number` | `undefined`): SVG图形的宽度。
- `height` (`number` | `undefined`): SVG图形的高度。

## `Svg(svg: string, options?: SvgOptions)`

`Svg` 类用于在画布上绘制SVG图形。

#### 属性:

- `svg` (`string`): SVG内容的字符串表示。
- `options` (`SvgOptions` | `undefined`): 可选配置，包括样式和其他属性。

#### 方法：

- `constructor(svg: string, options?: SvgOptions)`: 构造一个新的SVG实例。
- `init(ck: CanvasKit)`: 初始化SVG，将SVG内容渲染到画布上。
- `predraw(ck: CanvasKit, propertyChanged: string)`: 在属性改变前调用，用于更新绘制参数。
- `draw(canvas: Canvas)`: 在指定的画布上绘制SVG图形。
