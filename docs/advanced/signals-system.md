---
title: Signals System
---

# Signals System

Signals system is a powerful tools to build animations as better as possible. A object emit signals and another objects gain signals and act.

```javascript
const scene = new $.Scene()
  .add(
    new $.Text("Hello world", {
      x: 100,
      y: 100,
      size: 50
    }).setup(async (obj) => {
      obj.emit("test");
    })
  )
  .add(
    new $.Arc(100).respond("test", async (obj) => {
      obj.radius = 200;
    })
  );
```

First and foremost, create two objects.

Secondly, the text emit a signal "test" to global surroundings.

Finally, the arc get the signal and make a response.
