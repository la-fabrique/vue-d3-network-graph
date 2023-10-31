import type { Plugin, App } from "vue";
export * from "./types";
import D3NetworkGraph from "./D3NetworkGraph.vue";
import { useSimulation } from "./useSimulation";
export { D3NetworkGraph, useSimulation };

export default {
  install(app: App) {
    import("./themes/default.scss");

    app.component("D3NetworkGraph", D3NetworkGraph);
  },
} as Plugin;
