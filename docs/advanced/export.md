---
title: Export Video
---

# Export Video

If you want to export the animation as a video, you can use the `exports` method of the `Car` object. It takes three parameters:

```javascript
car.exports(start, end, onfinish);
```

- `start`: The frame from which to start saving the video.
- `end`: The frame at which to end saving the video.
- `onfinish`: A callback function to be executed after the export is finished. It takes one parameter, which is the URL of the generated video.

Upon receiving the command, the exporter will jump to the starting frame and start playing the animation. When the animation reaches the ending frame, the callback function will be executed.

```javascript
car.export(1, 300, (url) => {
  document.getElementById("link").href = url;
});
```

The above code will capture the frames between the 1st and 300th frame and, after the capture is complete, click the link to jump to the video.
