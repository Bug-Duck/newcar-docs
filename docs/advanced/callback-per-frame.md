---
title: Frame Callback
---

# Frame Callback

The `Car` object has a method called `onUpdate`, which supports passing a callback function. This callback function will be executed for each frame of the animation. The callback function takes one parameter, `currentFrame`, which represents the current frame number.

```javascript
import { Car, object } from "newcar";

const car = new Car(document.getElementById("animation"), 60);

const textObject = new object.Text("Hello!", {});
car.addAnimationItem(textObject);

car.onUpdate((currentFrame) => {
  if (currentFrame === 30) {
    textObject.text = "Hi!";
  }
});
```

The above code sets the text of `textObject` to "Hello!" and changes it to "Hi!" after the 30th frame.
