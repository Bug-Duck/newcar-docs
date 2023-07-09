# 配置
首先，需要安装newcar的用户接口
```shell
$ npm install newcar
```

参考目录如下
```
Project
| node_modules
| src
  | index.js
| index.html
| public
```

# 初始化
第一，我们先来创建一个newcar的动画对象 `Car`
```javascript
// src/index.js
import { newcar } from "./node_modules/newcar/dist/newcar.js";
const { Car } = newcar;

const animation = new Car(document.getElementById("animation"), 60);
```

其中，第一个参数为canvas元素的dom对象，第二个参数为动画的帧数

然后，在 `index.html` 引入他
```html
<!--index.html-->
<script src="./src/index.js"></script>
<body>
  <canvas id="animation" width="800" height="450"></canvas>
</body>
```

但是现在的动画尚未能动起来，所以我们要开始播放它

```javascript
animation.startPlay();
```

?> 现在的动画在理论上已经跑起来了，但是画布上没有任何东西，所以我们要来添加点东西在画布

# 定义动画对象

下一步就是要在屏幕上显示一些东西了，我们需要在屏幕上显示"Hello world!"

首先让我们了解一下newcar的组件库 `newcar.object` , 其中包含各种组件， 我们要用到的是其中的 `Text`

```javascript
import { newcar } from "./node_modules/newcar/dist/newcar.js";
const { Car } = newcar;
const { Text } = newcar.object;

const text = new Text({
    x: 200,
    y: 100,
    text: "Hello world!"
  })

const animation = new Car(document.getElementById("animation"), 60);
animation
  .addObject(text)
animation.startPlay();
```

这时你会看到屏幕上有一个字符出现

?> Text的更多参数以及更多组件，请参见[组件列表](/api/objects/object-all.md)

# 添加关键帧动画

接下来我们把这个文字移动，这需要用到 `addAnimationItem` 方法，我们来添加一个 `Translation` 动画

```javascript
import { newcar } from "./node_modules/newcar/dist/newcar.js";
const { Car } = newcar;
const { Text } = newcar.object;
const { EaseInSineInterpolator } = newcar.interpolator

const text = new Text({
  x: 200,
  y: 100,
  text: "Hello world!"
})

animation
  .addObject(text)
  .addAnimationItem(
    new Translation({
      startAt: 0,
      lastsFor: 200,
      to: [200, 200],
      bindTo(text),
      by: EaseInSineInterpolator
    })
  )
```

以上代码将会把 `text` 从(200, 100) 移动到(200, 200)，从第0帧开始，持续200帧

如果你想加入动画曲线，那么可以使用`by`参数，newcar也内置了许多动画曲线，参考如下，感谢[https://easings.net/](https://easings.net/)提供的动画曲线!

<iframe height="500px" src="https://easings.net/"></iframe>

?> 更多关键帧动画，请参阅[动画列表](api/animations/animation-all.md)


