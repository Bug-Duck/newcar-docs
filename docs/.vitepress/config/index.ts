import { defineConfig } from "vitepress";
import { sharedConfig } from "./shared";
import { zhConfig } from "./zh";
import { enConfig } from "./en";

export default defineConfig({
  ...sharedConfig,

  locales: {
    zh: {
      label: "简体中文",
      link: "/zh/",
      ...zhConfig
    },
    root: {
      label: "English",
      link: "/",
      ...enConfig
    }
  }
});
