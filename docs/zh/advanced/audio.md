---
title: 音频
---

# 音频

首先，创建一个音频对象，并设定他的播放时间：

```javascript
import { AudioItem } from "newcar";

const BGM = new AudioItem(
  "xxx.mp3", // 音频文件的路径
  0 // 开始播放的帧数
);
```

然后在动画对象里添加它：

```javascript
car.addAudioItem(BGM); // `animation` 是一个 `Car` 对象
```

此时他还不能播放，因为浏览器限制自动播放音频，所以需要手动允许播放。

:::info
若中途允许播放音频，`newcar` 会自动跳转到该播放的那个时间位置上：
:::

```javascript
document.getElementById("id").onclick = () => {
  car.allowAudio();
};
```

如果想要禁用播放器，可以使用 `animation.banAudio()` 来进行禁止播放。
