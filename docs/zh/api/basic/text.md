## `InputItem`

`InputItem` 定义了Text类接受的输入项的格式。

#### 属性:

- `text` (`string`): 文本内容。
- `style` (`TextItemStyle`): 文本的样式。

## `TextItemStyle`

`TextItemStyle` 定义了文本项的样式属性。

#### 属性:

- `backgroundColor` (`Color` | `undefined`): 文本背景颜色。
- `color` (`Color` | `undefined`): 文本颜色。
- `decoration` (`number` | `undefined`): 文本装饰线类型。
- `decorationColor` (`Color` | `undefined`): 装饰线颜色。
- `decorationThickness` (`number` | `undefined`): 装饰线厚度。
- `decorationStyle` (`DecorationStyle` | `undefined`): 装饰线样式。
- `fontFamilies` (`string[]` | `undefined`): 字体族名称。
- `fontFeatures` (`TextFontFeatures[]` | `undefined`): 字体特征。
- `fontSize` (`number` | `undefined`): 字体大小。
- `fontStyle` (`FontStyle` | `undefined`): 字体样式。
- `fontVariations` (`TextFontVariations[]` | `undefined`): 字体变体。
- `foregroundColor` (`Color` | `undefined`): 前景色。
- `heightMultiplier` (`number` | `undefined`): 高度倍数。
- `halfLeading` (`boolean` | `undefined`): 是否使用半行间距。
- `letterSpacing` (`number` | `undefined`): 字母间距。
- `locale` (`string` | `undefined`): 语言环境。
- `shadows` (`TextShadow[]` | `undefined`): 文本阴影。
- `textBaseline` (`TextBaseline` | `undefined`): 文本基线。
- `wordSpacing` (`number` | `undefined`): 单词间距。

## `TextOptions`

`TextOptions` 提供了配置文本的可选属性。

#### 属性:

- `style` (`TextStyle` | `undefined`): 定义文本的样式。

## `TextStyle`

`TextStyle` 定义了文本的样式属性。

#### 属性:

- `offset` (`number` | `undefined`): 文本偏移量。
- `interval` (`[number, number]` | `undefined`): 文本间隔。
- `fill` (`boolean` | `undefined`): 是否填充文本，默认为 `false`。
- `border` (`boolean` | `undefined`): 是否有边框，默认为 `false`。
- `fillColor` (`Color` | `undefined`): 填充颜色。
- `borderWidth` (`number` | `undefined`): 边框宽度。
- `borderColor` (`Color` | `undefined`): 边框颜色。
- `disableHinting` (`boolean` | `undefined`): 是否禁用字体微调。
- `ellipsis` (`string` | `undefined`): 文本溢出时的省略符号。
- `heightMultiplier` (`number` | `undefined`): 高度乘数。
- `maxLines` (`number` | `undefined`): 最大行数。
- `replaceTabCharacters` (`boolean` | `undefined`): 是否替换制表符。
- `strutStyle` (`StrutStyle` | `undefined`): 文本的支柱样式。
- `textAlign` (`TextAlign` | `undefined`): 文本对齐方式，可选值为 `'left'`, `'right'`, `'center'`, `'justify'`, `'start'`, `'end'`。
- `textDirection` (`TextDirection` | `undefined`): 文本方向，可选值为 `'ltr'`, `'rtl'`。
- `textHeightBehavior` (`TextHeightBehavior` | `undefined`): 文本高度行为，可选值为 `'all'`, `'disableFirstAscent'`, `'disableLastDescent'`, `'disableAll'`。
- `applyRoundingHack` (`boolean` | `undefined`): 应用舍入修正。
- `width` (`number` | `undefined`): 文本宽度。

## `Text(text: (string | InputItem)[], inputOptions?: TextOptions)`

`Text` 类用于在画布上绘制文本。

#### 属性:

- `text` (`(string | InputItem)[]`): 要绘制的文本数组，可以是简单的字符串或具有特定样式的对象。
- `inputOptions` (`TextOptions` | `undefined`): 可选配置，包括样式和其他属性。

#### 方法：

- `constructor(text: (string | InputItem)[], inputOptions?: TextOptions)`: 构造一个新的文本实例。
- `init(ck: CanvasKit)`: 初始化文本，设置字体管理器、段落构建器等。
- `predraw(ck: CanvasKit, propertyChanged: string)`: 在属性改变前调用，用于更新绘制参数。
- `draw(canvas: Canvas)`: 在指定的画布上绘制文本。
