## `WidgetStyle`

`WidgetStyle` 定义了组件的样式属性，这些样式决定了组件的视觉表现。

#### 属性:

- `scaleX` (`number` | `undefined`): 组件在x轴的缩放比例。
- `scaleY` (`number` | `undefined`): 组件在y轴的缩放比例。
- `rotation` (`number` | `undefined`): 组件的旋转角度，以度为单位。
- `transparency` (`number` | `undefined`): 组件的透明度，范围从0（完全透明）到1（完全不透明）。

## `WidgetOptions`

`WidgetOptions` 提供了初始化 `Widget` 时可以设置的配置选项。

#### 属性:

- `style` (`WidgetStyle` | `undefined`): 用于设置组件的样式。
- `x` (`number` | `undefined`): 组件的初始x坐标。
- `y` (`number` | `undefined`): 组件的初始y坐标。
- `centerX` (`number` | `undefined`): 组件中心的x坐标，用于定位和旋转。
- `centerY` (`number` | `undefined`): 组件中心的y坐标，用于定位和旋转。
- `progress` (`number` | `undefined`): 组件的初始动画进度，通常用于动画的控制。
- `children` (`Widget[]` | `undefined`): 一组作为此组件子项的其他组件。

这些类和接口为开发者提供了强大的工具，以编程方式创建和管理复杂的用户界面元素，允许灵活的样式和行为自定义。

## `Widget`

`Widget` 是一个基础类，用于创建和管理画布上的可视组件。它提供了一系列方法和属性来处理绘图和动画。

#### 属性:

- `x` (`number`): 组件的x坐标。
- `y` (`number`): 组件的y坐标。
- `centerX` (`number`): 组件中心的x坐标。
- `centerY` (`number`): 组件中心的y坐标。
- `progress` (`number`): 组件当前的进度，通常用于动画。
- `style` (`WidgetStyle`): 包含组件样式的对象，如缩放、旋转和透明度。
- `display` (`boolean`): 控制组件的显示状态。
- `isImplemented` (`boolean`): 指示是否已实现特定的方法或功能。
- `animationInstances` (`AnimationInstance[]`): 存储与此组件关联的动画实例。
- `updates` (`((elapsed: number, widget: Widget) => void)[]`): 存储每个动画帧调用的更新函数。
- `key` (`string`): 组件的唯一标识符。
- `children` (`Widget[]`): 存储子组件的数组。
- `last` (`Widget`): 指向最后一个添加的子组件。

#### 方法:

- `constructor(options?: WidgetOptions)`: 构造函数，接受一个可选的 `WidgetOptions` 对象来初始化组件属性。
- `init(ck: CanvasKit)`: 初始化方法，用于设置组件。在注册组件时调用。
- `predraw(ck: CanvasKit, propertyChanged: string)`: 在属性更改时调用，用于预加载必要的项，如画笔、矩形、路径等。
- `draw(canvas: Canvas)`: 根据组件的参数绘制对象。在参数更改时调用。
- `preupdate(ck: CanvasKit, propertyChanged?: string)`: 在参数更改时调用，用于设置更新前的状态。
- `update(canvas: Canvas)`: 更新对象根据组件的样式。在样式更改时调用。
- `add(...children: Widget[])`: 添加一个或多个子组件。
- `animate(animation: Animation<Widget>, startAt: number, during: number, params?: Record<string, any>)`: 应用动画到组件。
- `runAnimation(elapsed: number)`: 处理所有注册的动画实例。
- `setUpdate(updateFunc: (elapsed: number, widget: Widget) => void)`: 设置一个更新函数，当组件更改时调用。
- `_isAsyncWidget()`: 检查组件是否为异步组件。
- `show()`: 显示组件。
- `hide()`: 隐藏组件。
- `copy()`: 复制当前组件。

#### 示例代码：

```typescript
const widget = new Widget({
  x: 100,
  y: 100,
  style: {
    scaleX: 1.0,
    scaleY: 1.0,
    rotation: 0,
    transparency: 1.0
  }
});
```
