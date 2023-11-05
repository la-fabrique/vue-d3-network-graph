import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  lang: "en-US",
  title: "vue-d3-network-graph",
  description: "D3 force simulation network graph for Vue.js",
  base: "/vue-d3-network-graph/",
  dest: "dist-docs",
  head: [["link", { rel: "icon", href: "favicon.png" }]],
  theme: defaultTheme({
    contributors: false,
    navbar: [
      {
        text: "Examples",
        link: "https://la-fabrique.github.io/vue-d3-network-graph/histoire/",
      },
      {
        text: "API",
        link: "/modules/",
      },
      {
        text: "GitHub",
        children: [
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
    sidebar: ["/README.md", "/modules.md"],
  }),
});
