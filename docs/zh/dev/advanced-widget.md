---
title: 组件进阶
---

这里是Widget的进阶文档！在这里，我们将要介绍拼积木的方式来构建我们的Widget

```typescript
constructor(/** 省略 */) {
  this.add(new Widget(/** 省略 */))
}
```

很简单，对吧？

我们通过这种方式把一些基础图形拼成复杂的图形
