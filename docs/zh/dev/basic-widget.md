---
title: 组件基础
---

# 组件基础

欢迎来到 Newcar 拓展的开发教程！我们会逐步讲解 Newcar 拓展的开发方式，以便于大家更好的开发 Newcar 拓展！

我们需要用到的包有

- `@newcar/core` Newcar 的核心包
- `@newcar/basic` Newcar 的基础图形包
- `@newcar/utils` Newcar 的工具包
- `canvaskit-wasm` 老朋友了，CanvasKit-WASM 的包

在你的项目目录里安装这两个包，然后你便可以开发 Widgets 了！

我们的所有 Widget 都是基于 `Widget` 类，里面定义了一些方法，用于内核对他们进行操作

## 最基础的结构

为了使用户有更完整的类型体验感，我们推荐使用 TypeScript 来代替 JavaScript 开发

```typescript
import { Widget } from "@newcar/core";
import type { CanvasKit, Canvas } from "canvaskit-wasm";

export interface MyWidgetOptions {
  style?: MyWidgetStyle;
}

export interface MyWidgetStyle {}

export class MyWidget extends Widget {
  constructor(options?: MyWidgetOptions) {
    options ??= {}; // 为了防止用户传入空的options,我们这里加一个判断
  }

  // 初始化Widget的方法
  init(ck: CanvasKit) {}

  // 按需更新属性
  predraw(ck: CanvasKit, prop: string) {}

  // 绘制
  draw(canvas: Canvas) {}
}
```

- `MyWidgetOptions` 自定义 Widget 的选项，包含样式
- `MyWidgetStyle` 自定义 Widget 的样式
- `MyWidget` 自定义 Widget 本体
  - `init` 初始化
    - `ck` CanvasKit-WASM 的命名空间
  - `predraw` 预绘制，包括按需更新
    - `ck` CanvasKit-WASM 的命名空间
    - `prop` 改变的参数
  - `draw` 绘制函数
    - `canvas` CanvasKit-WASM 的画布对象

关于 CanvasKit-WASM 的使用，请参见 [Skia 官网](https://skia.org)

我们这里来实现一个三角形：

```typescript
import { Widget } from "@newcar/core";
import { Color } from "@newcar/utils";
import type { CanvasKit, Canvas, Paint, Path } from "canvaskit-wasm";

export interface MyWidgetOptions {
  style?: MyWidgetStyle;
}

export interface MyWidgetStyle {
  color: Color;
}

export class MyWidget extends Widget {
  paint: Paint;
  path: Path;
  declare style: MyWidgetStyle;

  constructor(
    public point1: [number, number],
    public point2: [number, number],
    public point3: [number, number],
    options?: MyWidgetOptions
  ) {
    options ??= {}; // 为了防止用户传入空的options,我们这里加一个判断
    options.style ??= {};
    this.style.color = options.style.color;
  }

  // 初始化Widget的方法
  init(ck: CanvasKit) {
    this.paint = new ck.Paint();
    this.path = new ck.Path();
    // 特别注意，这里需要转为Float4格式
    this.paint.setColor(this.style.color.toFloat4);
    this.paint.setStyle(ck.PaintStyle.Stroke);
  }

  // 按需更新属性
  predraw(ck: CanvasKit, prop: string) {
    switch (prop) {
      case "style.color": {
        // 这里也是
        this.paint.setColor(this.style.color.toFloat4());
        break;
      }
      case "point1":
      case "point2":
      case "point3": {
        this.path.moveTo(...this.point1);
        this.path.lineTo(...this.point2);
        this.path.lineTo(...this.point3);
        this.path.close();
      }
    }
  }

  // 绘制
  draw(canvas: Canvas) {
    canvas.drawPath(this.path, this.paint);
  }
}
```

CanvasKit 与原生 Canvas2d 有很多相同之处，大家可以参考 Skia 的 API 进行开发，当然我们更建议使用“拼积木”的方法来构建我们的 Widget，具体请见下一篇
