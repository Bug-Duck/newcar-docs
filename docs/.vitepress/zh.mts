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
        link: "/getting-started"
      },
      {
        text: "API参考",
        link: "/api/"
      },
      {
        text: "项目成员",
        link: "/members"
      },
      {
        text: "赞助",
        link: "https://afdian.net/a/newcar"
      }
    ],
    sidebar: {
      "/": [
        {
          text: "快速开始",
          link: "zh/getting-started"
        },
        {
          text: "进阶",
          items: [
            {
              text: "可选参数",
              link: "/zh/advanced/optional-parameters"
            },
            {
              text: "父子组件",
              link: "/zh/advanced/parent-child-objects"
            },
            {
              text: "setup与setUpdate",
              link: "/zh/advanced/setup-and-setupdate"
            },
            {
              text: "注入",
              link: "/zh/advanced/provide-inject-system"
            },
            {
              text: "录制器",
              link: "/zh/advanced/recorder"
            }
          ]
        }
      ],
      "/api/": [
        {
          text: "API参考",
          link: "zh/api/",
          items: [
            {
              text: "CarObject",
              link: "zh/api/carobject/",
              items: [{ text: "CarObject", link: "/api/object/carobject" }]
            }
          ]
        }
      ]
    }
  }
});
