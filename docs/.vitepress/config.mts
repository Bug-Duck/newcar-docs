import { sharedConfig } from "./shared.mts";
import { enConfig } from "./en.mts";
import { zhConfig } from "./zh.mts";

import { defineConfig } from "vitepress";

export default defineConfig({
  ...sharedConfig,

  locales: {
    root: {
      label: "English",
      link: "/",
      ...enConfig
    },
    zh: {
      label: "Chinese",
      link: "/zh",
      ...zhConfig
    }
  }
});
