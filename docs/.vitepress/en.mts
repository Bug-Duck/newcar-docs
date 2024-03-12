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
              text: "Optional Parameters",
              link: "/advanced/optional-parameters"
            },
            {
              text: "Parent and Child Objects",
              link: "/advanced/parent-child-objects"
            },
            {
              text: "Provide-Inject system",
              link: "/zh/advanced/provide-inject-system"
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
              text: "CarObject",
              link: "/api/carobject/",
              items: [{ text: "Carobj", link: "/api/object/carobject" }]
            }
          ]
        }
      ]
    }
  }
});
