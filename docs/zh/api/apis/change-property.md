## `ChangeProperty(property: string, from: number, to: number, params?: { from: any, to: any, by: EasingFunction }): Animation`

用于让一个 `Widget` 或其子对象的属性动起来

- `property` 此属性的名字
- `from` 此属性的初始值, 如果没有设置,则以 `params.from` 为标准
- `to` 此属性动画完成后的值,如果没有设置,则以 `params.to` 为标准
- `params` 动画的其他参数
  - `params.by`: 变速曲线
