import { defineConfig } from "vitepress";

export const sharedConfig = defineConfig({
  title: "Newcar",
  titleTemplate: "Newcar Docs",
  cleanUrls: true,
  appearance: true,
  lastUpdated: true,

  themeConfig: {
    logo: {
      light: "/dark.webp",
      dark: "/light.webp"
    },
    outline: [2, 3],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Bug-Duck/newcar"
      },
      {
        icon: "x",
        link: "https://twitter.com/bugduckteam"
      }
    ],
    footer: {
      message: "Released under the Apache-2.0 license",
      copyright: "Copyright © 2023-present BugDuck"
    }
  }
});
