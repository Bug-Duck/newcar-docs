---
title: Getting Started
---

# Getting Started <Badge type="tip" text="^0.6.0" />

## Installation

Install the `newcar` with your preferred package manager:

### npm

```shell
$ npm install newcar
```

### yarn

```shell
$ yarn add newcar
```

### pnpm

```shell
$ pnpm add newcar
```

## Initialization

We suggest to use vite to build our animation, in there we use pnpm as a instance.

```shell
$ pnpm create vite
```

And then you can choose your favorite framework to build your program. As a demo, we use native environment.

To create a animation by Newcar, we firstly need a animation object --- `Car`.

Via `createCar()` to create a animation.

```javascript
import * as $ from "newcar";

const animation = $.newcar("#canvas");
```

And then, we need to create a scene for the animation and check out to it.

```javascript
const scene = $.scene([], []);
animation.scene = scene;
```

The last step is playing it!

```javascript
animation.play();
```

Now, the animation has been ran, in the following docs, we'll let it do something absorbing.

## Adding a Object

Newcar offers many objects so that you have more choice (We have basic lib and some offical mods, please refer to API Docs.) In this instance, we use `Text` as a example.There are two ways to add objects.

```javascript
// First way
const scene = $.scene([
  new $.Text("Hello world!")
], []);

// Second way
scene.add(new $.Text("Hello world!"));
```

If everything is okay, you may see a text object with "Hello world" appears on the canvas.

## Let It Dynamic!

Let's talk about the callback function per frame. As the word, the function will be called in each frame, and it allow user getting the current time through a parameter.

:::warning

The unit of the parameter is second, isn't frame!

:::

There are also two ways to set the callback function.

```javascript
// First way
const scene = $.scene([], [
  (time) => {
    // ...
  }
])

// Second way
scene.update((time) => {
  // ...
})
```

We need to use `animate()` to animate the object. The first parameter is the type of animations, the second is the holding time of animation, and the finally is more parameters.

```javascript
scene.update((time) => {
  text.animate($.moveTo, 1, {
    x: 300,
    y: 300
  })
})
```

These codes will let the text move to (300, 300) during 1 second.

What? You say that the animation is monotonous? You also can use timing function to control the speed of animation, just use parameter `by`. Newcar also has some timing function built in, please refer to [https://www.desmos.com/calculator/yasltaa9um](https://www.desmos.com/calculator/yasltaa9um) to get more information.

This is all the things of entry-level docs. If you like this project, please give us a star on GitHub.
