## `ImageWidgetOptions`

`ImageWidgetOptions` 提供了配置图像小部件的可选属性。

#### 属性

- 无额外属性，继承自 `WidgetOptions`。

## `ImageWidget(imageArray: ArrayBuffer, options?: ImageWidgetOptions)`

`ImageWidget` 类用于在画布上绘制图像。

#### 属性

- `imageArray` (`ArrayBuffer`): 包含图像数据的数组。
- `options` (`ImageWidgetOptions` | `undefined`): 可选配置，包括样式和其他属性。

#### 方法

- `constructor(imageArray: ArrayBuffer, options?: ImageWidgetOptions)`: 构造一个新的图像小部件实例。
- `init(ck: CanvasKit)`: 初始化图像资源。
- `predraw(ck: CanvasKit, propertyChanged: string)`: 在属性改变前调用，用于更新绘制参数。
- `draw(canvas: Canvas)`: 在指定的画布上绘制图像。
