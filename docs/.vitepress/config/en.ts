import { defineConfig } from "vitepress";

export const enConfig = defineConfig({
  lang: "en-US",
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
              text: "Frame Callback",
              link: "/advanced/callback-per-frame"
            },
            {
              text: "Pause and Continue",
              link: "/advanced/pause-and-continue"
            },
            {
              text: "Parent-child Components",
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
            },
            {
              text: "Export",
              link: "/advanced/export"
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
