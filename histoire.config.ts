import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  plugins: [HstVue()],
  viteIgnorePlugins: ["vite-plugin-eslint", "vite:dts"],
  setupFile: "./docs/.histoire/setup.ts",
  storyMatch: ["**/.histoire/*.story.vue"],
  storyIgnored: ["**/node_modules/**", "**/dist/**", "**/playground/**"],
  tree: {
    groups: [
      {
        title: "Basic",
        include: (file) => /Play with/.test(file.title),
      },
      {
        title: "Grouping",
        include: (file) => /Node groups/.test(file.title),
      },
      {
        title: "Theming",
        include: (file) => /Custom theme|Custom CSS/.test(file.title),
      },
      {
        title: "C4 Model",
        include: (file) => /C4/.test(file.title),
      },
    ],
  },
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
