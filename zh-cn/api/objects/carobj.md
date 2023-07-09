# `Carobj`

`Carobj` 是所有组件的父类，本身并没有任何绘制上的功能

如果你想自定义组件，可以继承这个类，这个类的所有属性其他的组件也会具有， 所以以下参数在其他组件里也适用

### * `Carobj.display`
取值: `true` | `false`

设置是否显示此对象，默认为只读

相关属性:[`Carobj.hide()`](#carobjhide),[`Carobj.appear()`](#carobjappear)

### * `Carobj.x`
取值: `number`

设置对象的x轴坐标(横坐标)

### * `Carobj.y`
取值: `number`

设置对象的y坐标(竖坐标)

### * `Carobj.scaleX`
取值: `number`

默认值: `1`

设置对象横向缩放

### * `Carobj.scaleY`
取值: `number`

默认值: `1`

设置对象竖向缩放

### * `Carobj.contextX`
取值: `number`

默认值: 对象的x坐标

设置绘画时画笔(canvas上下文)的横坐标，只有一部分对象适用，默认为只读属性

### * `Carobj.contextY`
取值: `numberY`

默认值: 对象的y坐标

设置绘画时画笔(canvas上下文)的横坐标，只有一部分对象适用，默认为只读属性

### * `Carobj.rotation`
取值: `number`

默认值: `0`

设置对象旋转的角度

### * `Carobj.operation`
取值: `GlobalCompositeOperation`（与canvas上下文.globalCompositeOperation相同）

默认值: `"source-over"`

设置绘画重叠方式

### `Carobj.onDraw(ctx: CanvasRenderingContext2D)`

设置绘制的方式，**非用户接口**，不建议修改

### `Carobj.hide()`

隐藏组件

### `Carobj.appear()`

显示组件

### `Carobj.addChildren(...children: Carobj[])`

添加子组件
