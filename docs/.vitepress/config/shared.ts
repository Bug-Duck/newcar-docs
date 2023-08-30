import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

export const sharedConfig = defineConfig({
  title: "Newcar",
  appearance: "dark",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/uni.webp", type: "image/webp" }]],
  themeConfig: {
    logo: {
      light: "/dark.webp",
      dark: "/light.webp"
    },
    outline: 2,
    search: {
      provider: "local"
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Bug-Duck/newcar"
      },
      {
        icon: "twitter",
        link: "https://twitter.com/bugduckteam"
      },
      {
        icon: "telegram",
        link: "https://t.me/newcar_js"
      },
    ],
    footer: {
      message: "Released under the Apache-2.0 license",
      copyright: "Copyright © 2023-present BugDuck"
    }
  },
  vite: {
    plugins: [UnoCSS()]
  }
});
