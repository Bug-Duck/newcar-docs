---
title: 导出视频
---
如果想要导出动画为视频，那么就要用到 `Car` 对象中的 `exports` 方法，他接受三个参数

```javascript
car.exports(start, end, onfinish)
```
- `start` 要保存的视频从哪一帧开始
- `end` 要保存的视频在哪一帧结束
- `onfinish` 结束后运行的回调函数，接受一个参数，是生成的视频的url地址

接受命令后，导出器会将跳转到开始的那一帧，并开始播放动画，当动画播放到结束的那一帧时，运行回调函数

```javascript
car.export(1, 300, (url) => {
  window.href = url;
})
```

以上代码会记录在第1帧到第300帧之间的画面，并在记录完成后跳转到视频页面