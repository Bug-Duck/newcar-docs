---
title: Animation
---

# Animation

The underlying principle of newcar animations is continuously changing a property of an object in every frame. In the quick start, you've already mastered the basic usage of newcar animations. Now, let's delve deeper into it.

How do you define an animation? We've already learned about a built-in animation `move`, but besides that, newcar also has many types of built-in animations. Below is a list of commonly used animations:

- create
- destroy
- rotate
- move
- scale
- zoomIn
- zoomOut
- transparency
- fadeIn
- fadeOut
- ...

However, these animations might not cover all the possible changes in values, and this is where we need a function to change the property name. In ancient versions of newcar, an animation had to inherit from an animation class and override its methods to implement an animation. Later, newcar's animation became a function, and then came the `changeProperty` function.

Usage:

```javascript
circle.animate(changeProperty("radius", 0, 1), 100);
// Or
circle.animate(changeProperty("radius"), 100, {
  from: 0,
  to: 1
});
```

`changeProperty` can also change multiple values of an object at the same time:

```javascript
circle.animate(changeProperty(["scaleX", "scaleY"], 0, 3), 100);
// Or
circle.animate(changeProperty(["scaleX", "scaleY"]), 100, {
  from: 0,
  to: 3
});
```
