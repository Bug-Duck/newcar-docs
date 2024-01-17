---
title: Parent and Child Objects
---

# Parent and Child Objects

Objects in `newcar` can be nested using `children`. Here's how you can add them:

```javascript
const child = new $.Text("Hello world!", {
  x: 200,
  y: 300
});

const father = new $.Carobj({
  x: 100,
  y: 200,
  children: [child]
});

// Alternatively, you can use
father.addChildren(child);
```

In this case, the coordinates `(200, 300)` for `child` are not relative to the top-left corner of the canvas, but rather relative to the position of its parent component.

:::tip
Additionally, parent-child components follow the principle of **"child moves with parent, parent does not move with child"**. This means that when the parent component moves, the child component moves along with it. When the child component moves, the parent component remains stationary.

With this feature, you can set a background and make objects in the scene become the "children" of the background, allowing the background to move backward when manipulating the character's movement.
:::

:::info
In addition to coordinates, the **rotation angle** and **Scale** also follows the parent-child component principle.

> The rotation angle here refers to the angle of rotation relative to the entire coordinate system of the parent component, rather than the numerical value of the rotation angle for each component.

:::
