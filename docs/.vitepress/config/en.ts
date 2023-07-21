import { defineConfig } from "vitepress";

export const enConfig = defineConfig({
  lang: "zh-CN",
  description: "The modern animation engine",
  themeConfig: {
    siteTitle: "Newcar Official Docs",
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
        link: "/en/getting-start"
      },
      {
        text: "Members",
        link: "/en/members"
      },
      {
        text: "Sponsor(CN)",
        link: "https://afdian.net/a/acboxsky"
      }
    ],
    sidebar: {
      "/en/": [
        {
          text: "Getting Start",
          link: "/en/getting-start"
        },
        {
          text: "Advanced",
          items: [
            {
              text: "Parent-child components",
              link: "/en/advanced/father-child-components"
            },
            {
              text: "Custom Object",
              link: "/en/advanced/custom-object"
            },
            {
              text: "Custom Animation",
              link: "/en/advanced/custom-animation"
            },
            {
              text: "Audio",
              link: "/en/advanced/audio"
            }
          ]
        }
      ]
    }
  }
});
