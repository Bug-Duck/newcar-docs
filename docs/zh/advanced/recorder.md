---
title: 录制器
---

# 录制器

如果您想要将动画导出为视频，录制器将是您的理想选择。它能够录制动画并提供一个视频链接，该链接可以用于导出视频。

要使用录制器，您首先需要创建它。

```javascript
import * as $ from "newcar";
$.config.canvaskitWasmFile = "...";

const animation = $.newcar("#canvas");
const scene = new $.Scene();
animation.scene = scene;

const recorder = new $.Recorder(animation);
```

然后我们需要设置一个停止录制的时间，并启动它。

```javascript
recorder.record(100, (url) => {
  console.log(url);
});
animation.play();
```

第二个参数是一个回调函数，它接受一个包含视频 url 的参数。

现在访问这个 url，您就可以下载它了！
