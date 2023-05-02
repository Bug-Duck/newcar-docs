# 音频

首先，我们需要先创建一个音频对象，并设定他的播放时间

```javascript
const { AudioItem } = newcar;

const BGM = new AudioItem(
  "xxx.mp3", // The file path of audio.
  0 //The start frame of this audio item.
);
```

然后在动画对象里添加他

```javascript
animation.addAudioItem(BGM); // The `animation` is a `Car` object.
```

此时他还不能进行播放，因为浏览器限制自动播放音频的原因，所以需要手动允许播放，请放心，若中途允许播放音频，newcar会自动跳转到该播放的那个时间上

```javascript
document.getElementById("id").onclick = () => {
  animation.allowAudio();
}
```

如果想要禁用，则可以使用`animation.banAudio()`来进行禁止播放
