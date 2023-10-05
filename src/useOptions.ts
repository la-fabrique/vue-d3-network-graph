import { type Ref, computed, toRef } from "vue";
import type { useSimulationOptions, D3Options } from "./types";

export const DEFAULT_FORCE_X = 0.1;
export const DEFAULT_FORCE_Y = 0.1;
export const DEFAULT_FORCE_MANY_BODY_STRENGTH = -300;
const DEFAULT_NODE_SIZE = 25;
const DEFAULT_NODE_FONT_SIZE = 12;
const DEFAULT_LINK_WIDTH = 2;
const DEFAULT_FORCE_COLLIDE_STRENGTH = 45;

export const useOptions = (d3Options: Readonly<Ref<D3Options | undefined>>) => {
  const theme = computed(() => ({
    node: {
      stroke: d3Options.value?.nodes?.colors?.stroke || "#E2EB98",
      fill: d3Options.value?.nodes?.colors?.fill || "#93A392",
      selected: {
        stroke: d3Options.value?.nodes?.colors?.selected?.stroke || "#9DC4B5",
        fill: d3Options.value?.nodes?.colors?.selected?.fill,
      },
      hover: {
        stroke: "#9DC4B5",
        fill: d3Options.value?.nodes?.colors?.hover?.fill,
      },
      pinned: {
        stroke: "#9DC4B5",
        fill: d3Options.value?.nodes?.colors?.pinned?.fill,
      },
      label: {
        fill: d3Options.value?.nodes?.colors?.label?.fill || "#93A392",
      },
    },
    link: {
      stroke: d3Options.value?.links?.colors?.stroke || "#BAD9A2",
      fill: d3Options.value?.links?.colors?.fill,
      selected: {
        stroke: d3Options.value?.links?.colors?.selected?.stroke || "#9DC4B5",
        fill: d3Options.value?.links?.colors?.selected?.fill,
      },
      hover: {
        stroke: "#9DC4B5",
        fill: d3Options.value?.links?.colors?.hover?.fill,
      },
      label: {
        fill: d3Options.value?.links?.colors?.label?.fill || "#93A392",
      },
    },
  }));

  const options: useSimulationOptions = {
    static: toRef(() => d3Options.value?.simulation?.static || false),
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
  };

  return {
    options,
    theme,
  };
};
