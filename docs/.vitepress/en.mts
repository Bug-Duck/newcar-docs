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
              text: "setup and setUpdate",
              link: "/advanced/setup-and-setupdate"
            },
            {
              text: "Color System",
              link: "/advanced/color-system"
            },
            {
              text: "Provide-Inject system",
              link: "/advanced/provide-inject-system"
            },
            {
              text: "Recorder",
              link: "/advanced/recorder"
            },
            {
              text: "Custom",
              items: [
                {
                  text: "Custom Object",
                  link: "/custom/custom-carobject"
                }
              ]
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
