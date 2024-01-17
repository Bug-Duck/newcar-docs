import { sharedConfig } from "./shared.mts";
import { enConfig } from "./en.mts";

import { defineConfig } from "vitepress";

export default defineConfig({
  ...sharedConfig,

  locales: {
    root: {
      label: "English",
      link: "/",
      ...enConfig
    }
  }
});
