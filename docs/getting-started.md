---
title: Getting Started
---

# Getting Started <Badge type="tip" text="^0.7.0" />

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

We suggest to use Vite to build our animation, in there we use pnpm as a instance.

```shell
pnpm create vite
```

And then you can choose your favorite framework to build your program. As a demo, we use native environment.

### Create

To create a animation by Newcar, we firstly need a animation object --- `Car`.

Via `newcar` or `createCar` to create a animation.

```javascript
import { createCar, Scene } from "newcar";

const animation = createCar("#canvas");
```

Defining a `<canvas>` tag and set the id to `canvas`:

```html
<canvas id="canvas" width="1600" height="900"></canvas>
```

And then, we are going to create a scene for the animation and check out to it.

```javascript
const scene = new Scene();
animation.scene = scene;
```

The last step is that when the canvaskit was loaded play it:

```javascript
animation.on("ready-to-play", () => {
  animation.play();
});
```

Now, the animation has been ran, but there are no anything on the canvas, let it do something absorbing.

### Add a Object

Newcar offers many objects so that you have more choice (We have basic lib and some offical mods, please refer to API Docs.) In this instance, we use `Text` as a example.

```javascript
import { createCar, Scene, Text } from "newcar";

// Omit the existing code here.

scene.add(
  new Text("Hello world!", {
    x: 100,
    y: 100,
    size: 50
  })
);
```

If everything is okay, you will see a text object with "Hello world" appears on the canvas.

### Setup

We use async function to control objects, the first paramter is itself, you can control its act.

The codes below these texts can wait 100 frames and change the text to "Hi world".

```javascript
import { createCar, Scene, Text, sleep } from "newcar";

// Omit the existing code here.

const scene = new $.Scene().add(
  new Text("Hello world", {
    x: 100,
    y: 100,
    size: 50
  }).setup(async (obj) => {
    await sleep(100);
    obj.text = "Hi world";
  })
);
```

### Animate

We need to use `animate()` to animate the object. The first parameter is the function of animations, the second is the holding frame of animation, and the finally is more parameters.

```javascript
import { createCar, Scene, Text, sleep, move } from "newcar";

const scene = new $.Scene().add(
  new Text("Hello world", {
    x: 100,
    y: 100,
    size: 50
  }).setup(async (obj) => {
    await sleep(100);
    obj.animate(move, 100, {
      toX: 300,
      toY: 300
    });
  })
);
```

These codes will let the text move to (300, 300) during 100 frame.

You also can use timing function to control the speed of animation, just use parameter `by`. Newcar also has some timing function built in, please refer to [https://www.desmos.com/calculator/yasltaa9um](https://www.desmos.com/calculator/yasltaa9um) to get more information.

This is all the things of entry-level docs. If you like this project, please give us a star on GitHub.
