import { defineConfig } from "vitepress";

export const zhConfig = defineConfig({
  lang: "zh-CN",
  description: "现代动画引擎",
  themeConfig: {
    siteTitle: "Newcar 官方中文文档",
    outline: {
      label: "本页内容"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    nav: [
      {
        text: "指南",
        link: "/getting-start"
      },
      {
        text: "成员",
        link: "/members"
      },
      {
        text: "捐赠作者",
        link: "https://afdian.net/a/acboxsky"
      }
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档"
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换"
                }
              }
            }
          }
        }
      }
    },
    sidebar: {
      "/": [
        {
          text: "快速开始",
          link: "/getting-start"
        },
        {
          text: "进阶",
          items: [
            {
              text: "父子组件",
              link: "/advanced/father-child-components"
            },
            {
              text: "自定义组件对象",
              link: "/advanced/custom-object"
            },
            {
              text: "自定义动画",
              link: "/advanced/custom-animation"
            },
            {
              text: "音频",
              link: "/advanced/audio"
            }
          ]
        }
      ]
    }
  }
});
