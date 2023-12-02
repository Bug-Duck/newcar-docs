import { defineConfig } from "vitepress";
import { sharedConfig } from "./shared";
import { zhConfig } from "./zh";
import { enConfig } from "./en";

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
