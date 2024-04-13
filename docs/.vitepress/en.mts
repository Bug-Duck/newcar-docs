import { defineConfig } from "vitepress";

export const enConfig = defineConfig({
  lang: "en-US",
  description: "The modern animation engine",

  themeConfig: {
    siteTitle: "Newcar Official Docs",
    outline: {
      label: "On this page"
    },
    docFooter: {
      prev: "Previous",
      next: "Next"
    },
    editLink: {
      text: "Suggest to this page",
      pattern: "https://github.com/Bug-Duck/newcar-docs/tree/main/docs/:path"
    },
    nav: [
      {
        text: "Tutorials",
        link: "/getting-started"
      },
      {
        text: "API Reference",
        link: "/api/"
      },
      {
        text: "Members",
        link: "/members"
      },
      {
        text: "Sponsor",
        link: "https://afdian.net/a/newcar"
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
              text: "Animation",
              link: "advanced/animation"
            },
            {
              text: "Parents-Children Widget",
              link: "advanced/parents-children-widget"
            },
            {
              text: "Color System",
              link: "zh/advanced/color-system"
            },
            {
              text: "Frame-by-Frame called",
              link: "zh/advanced/update-function"
            },
            {
              text: "Recorder",
              link: "zh/advanced/recorder"
            }
          ]
        }
      ],
      "/api/": []
    }
  }
});
