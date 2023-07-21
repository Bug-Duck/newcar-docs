import { defineConfig } from "vitepress";
import { sharedConfig } from "./shared";
import { zhConfig } from "./zh";
import { enConfig } from "./en";

export default defineConfig({
  ...sharedConfig,

  locales: {
    root: {
      label: "简体中文",
      link: "/",
      ...zhConfig
    },
    en: {
      label: "English",
      link: "/en/",
      ...enConfig
    }
  }
});
