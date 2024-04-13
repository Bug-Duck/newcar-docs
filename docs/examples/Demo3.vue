<template>
  <canvas width="1600" height="900" id="canvas3" style="width: 100%" @click="app.play"></canvas>
</template>

<script setup lang="ts">
import { Widget, create, App, CarEngine, Scene } from "newcar";
import { NumberPlane, MathFunction } from "@newcar/mod-math";

let app: App;

new CarEngine()
  .init("https://unpkg.com/canvaskit-wasm@latest/bin/canvaskit.wasm")
  .then((engine) => {
    const app = engine.createApp(document.querySelector("#canvas3")!);
    const root = new Widget().add(
      new NumberPlane(-200, 200, -200, 200, {
        x: 400,
        y: 225
      })
      // .add(new MathFunction(Math.sin, [-4, 4]).animate(create, 20, 80))
      // .add(new MathFunction(Math.cos, [-4, 4]).animate(create, 20, 80)),
    );
    const scene = new Scene(root);
    app.checkout(scene);
  });
</script>
