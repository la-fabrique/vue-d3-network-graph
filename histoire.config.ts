import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  plugins: [HstVue()],
  viteIgnorePlugins: ["vite-plugin-eslint", "vite:dts"],
  setupFile: "./docs/.histoire/setup.ts",
  storyMatch: ["**/.histoire/*.story.vue"],
  storyIgnored: [
    "**/node_modules/**",
    "**/dist/**",
    "**/playground/**",
    //"**/docs/**",
  ],
  outDir: "./dist-docs/histoire/",
  theme: {
    title: "D3 Network graph",
    /*  logo: {
      square: "./img/square.png",
      light: "./img/light.png",
      dark: "./img/dark.png",
    }, */
    logoHref: "https://la-fabrique.github.io/vue-d3-network-graph/histoire/",
    favicon: "favicon.png",
  },
  vite: {
    base: "/vue-d3-network-graph/histoire/",
  },
});
