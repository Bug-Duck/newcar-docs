import { defineConfig } from "vitepress";

export const zhConfig = defineConfig({
  lang: "zh-CN",
  description: "现代化的动画引擎",

  themeConfig: {
    siteTitle: "Newcar官方文档",
    outline: {
      label: "索引"
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },
    editLink: {
      text: "编辑此页面",
      pattern: "https://github.com/Bug-Duck/newcar-docs/tree/main/docs/:path"
    },
    nav: [
      {
        text: "文档",
        link: "/zh/getting-started"
      },
      {
        text: "API参考",
        link: "/api/"
      },
      {
        text: "项目成员",
        link: "/zh/members"
      },
      {
        text: "赞助",
        link: "https://afdian.net/a/newcar"
      }
    ],
    sidebar: {
      "/": [],
      "/api/": []
    }
  }
});
