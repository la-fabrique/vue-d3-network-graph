import { defineSetupVue3 } from "@histoire/plugin-vue";
import {D3NetworkGraph} from "../../src/index";
import "../../dist/style.css"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  app.component("D3NetworkGraph", D3NetworkGraph);
  import("./style.scss");
});
