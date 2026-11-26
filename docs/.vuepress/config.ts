import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  lang: "en-US",
  title: "vue-d3-network-graph",
  description: "D3 force simulation network graph for Vue.js",
  base: "/vue-d3-network-graph/",
  dest: "dist-docs",
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: [
          // imports the virtual "@temp/theme-helper" module, so it must be
          // bundled during SSR rendering
          "@vuepress/theme-helper",
          // vue-router 5 node entry does not define `__VUE_OPTIONS_API__`,
          // bundling it lets vite inject the compile-time flags
          "vue-router",
        ],
      },
    },
  }),
  head: [["link", { rel: "icon", href: "favicon.png" }]],
  theme: defaultTheme({
    contributors: false,
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "API",
        link: "/modules.md",
      },
      {
        text: "Examples",
        link: "https://la-fabrique.github.io/vue-d3-network-graph/histoire/",
      },
      {
        text: "GitHub",
        items: [
          {
            text: "Sources",
            link: "https://github.com/la-fabrique/vue-d3-network-graph",
          },
          {
            text: "Releases",
            link: "https://github.com/la-fabrique/vue-d3-network-graph/releases",
          },
        ],
      },
    ],
    sidebar: [
      { text: "Introduction", link: "/README.md" },
      { text: "API", link: "/modules.md" },
    ],
  }),
});
