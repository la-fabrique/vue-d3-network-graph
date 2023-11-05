import { defineSetupVue3 } from "@histoire/plugin-vue";
import d3graph from "../../src/index";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  app.use(d3graph);

  import("./style.scss");
});
