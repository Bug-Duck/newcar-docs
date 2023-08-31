# Carobj

The base class for all newcar's object.
If you want to custom a car object, please drive a class from `Carobj` and override `onDraw` function.

## `constructor()`

- `data`?: `carobject`

```ts
class Carobj {
  constructor(data?: {
    x?: number;
    y?: number;
    scaleX?: number;
    scaleY?: number;
    children?: Carobj[];
    operation?: GlobalCompositeOperation;
    display?: boolean;
    rotation?: number;
    transparency?: number;
    centerX?: number;
    centerY?: number;
  }) {
    /* ... */
  }
}
```

## `x` and `y` ?: `number`

The position of the object relative to its parent object.

Default to `0`.

## `scaleX` and `scaleY` ?: `number`

Scale ratio.

Default to `1`.

## `children`?: `Carobj[]`

The object's children.

Default to `[]`.

## `operation`?: `GlobalCompositeOperation`

The ccomposite operation.

Options:

- `source-over` (default)
- `destination-over`
- `source-in`
- `destination-in`
- `source-out`
- `destination-out`
- `source-atop`
- `destination-atop`
- `lighter` (light-like)
- `darker` (piant-like)
- `xor`
- `copy`
- ...

More options could be found in [here](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation).

## `display`?: `boolean`

Whether or not the object should be displayed.

Default to `true`.

## `rotation`?: `number`

The rotation angle of the object (in radians).

Default to `0`.

## `transparency`?: `number`

The transparency of the object (0-1).

Default to `0`.

## `centerX` and `centerY` ?: `number`

The coordinates of the object's rotation center, relative to itself.

Default to `0`.
