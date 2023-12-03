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
              text: "Parent-child Objects",
              link: "/advanced/parent-child-objects"
            },
            {
              text: "Recorder",
              link: "/advanced/recorder"
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
