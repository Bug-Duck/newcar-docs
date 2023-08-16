---
title: Getting Started
---

# Getting Started <Badge type="tip" text="^0.3.0" />

## Installation

Install the `newcar` with your preferred package manager:

### npm

```shell
npm install newcar
```

### yarn

```shell
yarn add newcar
```

### pnpm

```shell
pnpm add newcar
```

## Initialization

First, create an animation object `Car` for `newcar` in `index.js`:

```javascript
// src/index.js
import { Car } as newcar from "newcar";

const animation = new Car(
  document.getElementById("animation"), // Get the DOM object of the canvas
  60
);
```

The first parameter is the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) object of the `canvas` element, and the second parameter is the number of frames per second for the animation.

Next, import this file in `index.html`:

```html
<!--index.html-->
<script src="./src/index.js" type="module"></script>
<body>
  <canvas id="animation" width="800" height="450"></canvas>
</body>
```

Now, the animation is not moving yet, so we need to **play** it:

```javascript
animation.play();
```

:::info
Now, the animation should theoretically be running, but there is nothing on the canvas, so we need to add something to the canvas.
:::

## Define Animation Object

The next step is to display something on the screen, for example, displaying `"Hello world!"` on the screen.

The `newcar` component library `newcar.object` contains various components. Here, we will use the `Text` component:

```javascript
import { Car, object } from "./node_modules/newcar/dist/newcar.js";

const text = new object.Text("Hello world!", {
  x: 200, // Define the X coordinate
  y: 100, // Define the Y coordinate
  size: 30 // Define the font size
});

const animation = new Car(document.getElementById("animation"), 60);
animation.addObject(text); // Add this Text object to the animation
animation.play();
```

Now you will see the `"Hello world!"` text on the screen.

<!-- ?> For more parameters and more components of Text, please refer to the [Component List](/api/objects/object-all.md) -->

## Add Keyframe Animation

Next, let's try to **move this text**. This requires using the `addAnimationItem` method. Here, we will add a `Translation` animation:

```javascript
import { Car, object, interpolator, animation } from "newcar";

const animation = new Car(document.getElementById("animation"), 60);

const text = new object.Text("Hello world!", {
  x: 200,
  y: 100,
  size: 30
});

animation.addObject(text).addAnimationItem(
  new animation.Translation({
    startAt: 0, // The animation starts at frame 0
    lastsFor: 30, // Lasts for 30 frames
    to: [200, 200], // Move from the current position to coordinates (200, 200)
    bindTo: text, // Bind the animation to the Text object
    by: interpolator.EaseInSine // Set the easing curve
  })
);

animation.play();
```

The above code will move the `text` from `(200, 100)` to `(200, 200)` starting from frame 0 and lasting for 30 frames.

<!-- Animation Demo: <iframe height="500" width="800" src="../../demos/begin"></iframe> -->

:::tip
If you want to add an **animation curve**, you can use the `by` parameter. `newcar` also provides many built-in animation curves, refer to the animation curves provided by [Easings](https://easings.net/)!
:::

<!-- <iframe height="500px" src="https://easings.net/"></iframe> -->

<!-- ?> For more keyframe animations, please refer to the [Animation List](api/animations/animation-all.md) -->
