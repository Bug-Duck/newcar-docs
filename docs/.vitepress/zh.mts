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
      "/": [
        {
          text: "快速开始",
          link: "zh/getting-started"
        },
        {
          text: "进阶",
          items: [
            ,
            {
              text: "动画",
              link: "/zh/advanced/animation"
            },
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
              text: "色彩系统",
              link: "zh/advanced/color-system"
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
        },
        {
          text: "自定义",
          items: [
            {
              text: "自定义组件",
              link: "/zh/custom/custom-carobject"
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
