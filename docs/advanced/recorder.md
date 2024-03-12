---
title: Recorder
---

# Recorder

If you want to export the animation as video, Recorder will be you proper choice. It can recorded the animation and give out a video link, which can be exported.

To use Recorder, you firstly need create it.

```javascript
import * as $ from "newcar";
$.config.canvaskitWasmFile = "...";

const animation = $.newcar("#canvas");
const scene = new $.Scene();
animation.scene = scene;

const recorder = new $.Recorder(animation);
```

And then we need to set up a time to stop recording, and start it.

```javascript
recorder.record(100, (url) => {
  console.log(url);
});
animation.play();
```

the second parameter is a callback function, which accepts a parameter that includes the url of video.

Now visit the url and you can download it!
