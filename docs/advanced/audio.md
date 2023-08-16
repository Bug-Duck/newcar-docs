---
title: Audio
---

# Audio

First, create an audio object and set its playback time:

```javascript
import { AudioItem } from "newcar"

const BGM = new AudioItem(
  "xxx.mp3", // Path to the audio file
  0 // Starting frame for playback
);
```

Then add it to the animation object:

```javascript
animation.addAudioItem(BGM); // `animation` is a `Car` object
```

At this point, it cannot play automatically due to browser restrictions on autoplaying audio. You need to allow playback manually.

:::info
If audio playback is allowed during the animation, `newcar` will automatically jump to the corresponding playback position.
:::

```javascript
document.getElementById("id").onclick = () => {
  animation.allowAudio();
};
```

To disable the player, you can use `animation.banAudio()` to prohibit playback.
