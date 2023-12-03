---
title: Recorder
---

If you want to export the animation as video, Recorder will be you proper choice. It can recorded the animation and give out a video link, which can be exported.

To use Recorder, you firstly need create it.

```javascript
import * as $ from "newcar";

const animation = $.newcar("#canvas");
const scene = $.scene([], []);
animation.scene = scene;

const recorder = new $.Recorder(animation);
```

And then we need to set up a time to stop recording, and start it. (unit: second)

```javascript
recorder.start(100, (url) => {
  console.log(url);
});
```

the second parameter is a callback function, which accepts a parameter that includes the url of video.

Now visit the url and you can download it!
