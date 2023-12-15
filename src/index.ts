import type { Plugin, App } from "vue";
import "./themes/index.scss";

import type {
  D3Link,
  D3Node,
  D3Options,
  D3NodeSize,
  D3NodeOptions,
  D3LinkOptions,
  D3SimulationOptions,
  D3LayoutOptions,
  D3NeworkGraphEmits,
} from "./types";

/** @ignore */
import D3NetworkGraph from "./D3NetworkGraph.vue";

export type {
  D3Link,
  D3Node,
  D3Options,
  D3NodeSize,
  D3NodeOptions,
  D3LinkOptions,
  D3SimulationOptions,
  D3LayoutOptions,
  D3NeworkGraphEmits,
};

/** @ignore */
export { D3NetworkGraph };

/** @ignore */
export default {
  install(app: App) {
    app.component("D3NetworkGraph", D3NetworkGraph);
  },
} as Plugin;
