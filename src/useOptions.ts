import { type Ref, toRef } from "vue";
import type { useSimulationOptions, D3Options } from "./types";

export const DEFAULT_FORCE_X = 0.1;
export const DEFAULT_FORCE_Y = 0.1;
export const DEFAULT_FORCE_MANY_BODY_STRENGTH = -300;
const DEFAULT_NODE_SIZE = 25;
const DEFAULT_NODE_FONT_SIZE = 12;
const DEFAULT_LINK_WIDTH = 1;
const DEFAULT_FORCE_COLLIDE_STRENGTH = 45;

export const useOptions = (d3Options: Readonly<Ref<D3Options | undefined>>) => {
  const options: useSimulationOptions = {
    static: toRef(() => d3Options.value?.layout?.static || false),
    forceXStrength: toRef(
      () => d3Options.value?.simulation?.force.x || DEFAULT_FORCE_X
    ),
    forceYStrength: toRef(
      () => d3Options.value?.simulation?.force.y || DEFAULT_FORCE_Y
    ),
    forcManyBodyStrength: toRef(
      () =>
        d3Options.value?.simulation?.force.charge ||
        DEFAULT_FORCE_MANY_BODY_STRENGTH
    ),
    forceCollideStrength: toRef(
      () =>
        d3Options.value?.simulation?.force.collide ||
        DEFAULT_FORCE_COLLIDE_STRENGTH
    ),
    nodeSize: toRef(() => d3Options.value?.nodes?.size || DEFAULT_NODE_SIZE),
    nodeFontSize: toRef(
      () => d3Options.value?.nodes?.font?.size || DEFAULT_NODE_FONT_SIZE
    ),
    linkWidth: toRef(() => d3Options.value?.links?.width || DEFAULT_LINK_WIDTH),
    linkFontSize: toRef(() => d3Options.value?.links?.font?.size || 12),
    draggables: toRef(() => d3Options.value?.layout?.draggables || false),
    directed: toRef(() => d3Options.value?.layout?.directed || false),
    themeClass: toRef(() =>
      d3Options.value?.layout?.theme
        ? `theme-${d3Options.value?.layout?.theme}`
        : "theme-teal"
    ),
  };

  return {
    options,
  };
};
