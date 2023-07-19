# 暂停与继续

### `pause(frame?: number)`

这里的 `frame` 为暂停到某一帧，默认暂停到当前帧

```javascript
animation.pause(10)
```

上述实例为在第10帧暂停

### `continue(frame?: number)`

在第 `frame` 帧继续播放动画

# 其他接口

### `onUpdate(command: (arg0: number) => void)`

对 `onUpdate` 里传入的函数会在每帧时执行，第一个参数为当前的帧数，比如你想在第100帧的时候暂停动画，可以这样写

```javascript
animation.onUpdate((curFrame) => {
  if (curFrame === 100) {
    animation.suspend();
  }
})
```
