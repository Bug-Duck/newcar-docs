# 自定义动画

在newcar当中，所有的动画类都继承自 `AnimationBuilderItem，动画类一定要有两个必定的参数，他们分别是 `startFrame` (动画开始时的时间，单位:帧) 和 `length` (动画的持续时间，单位:帧)；

## 基础框架
```javascript
import * as newcar from "./node_modules/newcar/dist/newcar.js"

class MyAnimationItem extends newcar.animation.AnimationBuilderItem {
  constructor(datas) {
    this.startAt = datas.startAt;
    this.lastsFor = datas.lastsFor;
    this.obj = datas.bindTo;
    // ......
  }

  get startFrame() {
    return this.startAt;
  }

  get length() {
    return this.lastsFor;
  }
}
```
你可以选择将 `startAt`, `lastsFor` 作为动画的起始和持续时间，将`by`作为变速曲线，当然你也可以使用其他命名，不过为了标准，建议还是使用标准命名

## 改变参数

接下来就是关于动画的函数 `onDrawFrame` ，此方法接受两个参数，第一个为从此动画开始到现在的累计帧数，比如一个动画在第60帧开始，现在是第70帧，那么累计帧数就是70-60=10帧；第二个参数是一个底层接口，我们暂不赘述。

```javascript
import * as newcar from "./node_modules/newcar/dist/newcar.js"

class MyAnimationItem extends newcar.animation.AnimationBuilderItem {
  constructor(datas) {
    this.startAt = datas.startAt;
    this.lastsFor = datas.lastsFor;
    this.obj = datas.bindTo;
    // ......
  }

  get startFrame() {
    return this.startAt;
  }

  get length() {
    return this.lastsFor;
  }

  onDrawFrame(frameCount, _parent) {
    obj.xxx += 1
  }
}
```
