import { defineConfig } from "vitepress";

export const enConfig = defineConfig({
  lang: "zh-CN",
  description: "The modern animation engine",
  themeConfig: {
    siteTitle: "Newcar Official Docs",
    editLink: {
      text: "Suggest to this page",
      pattern: "https://github.com/Bug-Duck/newcar-docs/tree/main/docs/:path"
    },
    outline: {
      label: "This page"
    },
    docFooter: {
      prev: "Previous",
      next: "Next"
    },
    nav: [
      {
        text: "Tutorials",
        link: "/getting-started"
      },
      {
        text: "Members",
        link: "/members"
      },
      {
        text: "Sponsor(CN)",
        link: "https://afdian.net/a/acboxsky"
      }
    ],
    sidebar: {
      "/": [
        {
          text: "Getting Started",
          link: "/getting-started"
        },
        {
          text: "Advanced",
          items: [
            {
              text: "Parent-child components",
              link: "/advanced/parent-child-components"
            },
            {
              text: "Custom Object",
              link: "/advanced/custom-object"
            },
            {
              text: "Custom Animation",
              link: "/advanced/custom-animation"
            },
            {
              text: "Audio",
              link: "/advanced/audio"
            }
          ]
        }
      ],
      "/api/": [
        {
          text: "API Reference",
          link: "/api/",
          items: [
            {
              text: "Interface",
              link: "/api/interface/",
              items: [{ text: "carobject", link: "/api/interface/carobject" }]
            },
            {
              text: "Object",
              link: "/api/object/",
              items: [{ text: "Carobj", link: "/api/object/carobj" }]
            },
            { text: "Animation", link: "/api/animation/" }
          ]
        }
      ]
    }
  }
});
