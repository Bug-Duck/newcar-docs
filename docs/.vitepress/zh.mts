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
          text: "示例动画",
          link: "/examples"
        },
        {
          text: "入门指南",
          link: "zh/getting-started"
        },
        {
          text: "进阶",
          items: [
            {
              text: "动画",
              link: "zh/advanced/animation"
            },
            {
              text: "父子组件",
              link: "zh/advanced/parents-children-widget"
            },
            {
              text: "色彩系统",
              link: "zh/advanced/color-system"
            },
            {
              text: "逐帧调用",
              link: "zh/advanced/update-function"
            },
            {
              text: "资源预加载",
              link: "zh/advanced/preload"
            },
            {
              text: "录制器",
              link: "zh/advanced/recorder"
            },
            {
              text: "本地模式",
              link: "zh/advanced/local-mode"
            }
          ]
        },
        {
          text: "API参考",
          items: [
            {
              text: "函数",
              items: [],
              collapsed: false,
              link: "zh/api/apis"
            },
            {
              text: "核心对象",
              items: [],
              collapsed: false,
              link: "zh/api/objects"
            },
            {
              text: "基础图形包",
              items: [
                {
                  text: "Arc",
                  link: "zh/api/basic/arc"
                },
                {
                  text: "Arrow",
                  link: "zh/api/basic/arrow"
                },
                {
                  text: "Circle",
                  link: "zh/api/basic/circle"
                },
                {
                  text: "Figure",
                  link: "zh/api/basic/figure"
                },
                {
                  text: "ImageWidget",
                  link: "zh/api/basic/image-widget"
                },
                {
                  text: "Line",
                  link: "zh/api/basic/line"
                },
                {
                  text: "Path",
                  link: "zh/api/basic/path"
                },
                {
                  text: "Polygon",
                  link: "zh/api/basic/polygon"
                },
                {
                  text: "Rect",
                  link: "zh/api/basic/rect"
                },
                {
                  text: "Svg",
                  link: "zh/api/basic/svg"
                },
                {
                  text: "Text",
                  link: "zh/api/basic/text"
                },
                {
                  text: "Widget",
                  link: "zh/api/basic/widget"
                }
              ],
              collapsed: false
            },
            {
              text: "动画",
              link: "zh/api/animations"
            }
          ]
        }
      ]
    }
  }
});
