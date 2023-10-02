import { Ref, computed } from "vue";
import { D3Options } from "./types";

export const DEFAULT_FORCE_X = 0.5;
export const DEFAULT_FORCE_Y = 0.5;
export const DEFAULT_FORCE_MANY_BODY_STRENGTH = -350;
const DEFAULT_NODE_SIZE = 40;
const DEFAULT_NODE_FONT_SIZE = 10;
const DEFAULT_WIDTH = 2;

export const useOptions = (options: Readonly<Ref<D3Options | undefined>>) => {
  const theme = computed(() => ({
    node: {
      stroke: options.value?.nodes?.colors?.stroke || "#E2EB98",
      fill: options.value?.nodes?.colors?.fill || "#93A392",
      selected: {
        stroke: options.value?.nodes?.colors?.selected?.stroke || "#9DC4B5",
        fill: options.value?.nodes?.colors?.selected?.fill,
      },
      hover: {
        stroke: "#9DC4B5",
        fill: options.value?.nodes?.colors?.hover?.fill,
      },
      pinned: {
        stroke: "#9DC4B5",
        fill: options.value?.nodes?.colors?.pinned?.fill,
      },
      label: {
        fill: options.value?.nodes?.colors?.label?.fill || "#93A392",
      },
    },
    link: {
      stroke: options.value?.links?.colors?.stroke || "#BAD9A2",
      fill: options.value?.links?.colors?.fill,
      selected: {
        stroke: options.value?.links?.colors?.selected?.stroke || "#9DC4B5",
        fill: options.value?.links?.colors?.selected?.fill,
      },
      hover: {
        stroke: "#9DC4B5",
        fill: options.value?.links?.colors?.hover?.fill,
      },
      label: {
        fill: options.value?.links?.colors?.label?.fill || "#93A392",
      },
    },
  }));

  const simulation = computed(() => ({
    static: options.value?.simulation?.static || false,
    force: {
      x: options.value?.simulation?.force.x || DEFAULT_FORCE_X,
      y: options.value?.simulation?.force.y || DEFAULT_FORCE_Y,
      charge:
        options.value?.simulation?.force.charge ||
        DEFAULT_FORCE_MANY_BODY_STRENGTH,
    },
  }));

  const nodes = computed(() => ({
    size: options.value?.nodes?.size || DEFAULT_NODE_SIZE,
    font: {
      size: options.value?.nodes?.font?.size || DEFAULT_NODE_FONT_SIZE,
    },
  }));

  const links = computed(() => ({
    width: options.value?.links?.width || DEFAULT_WIDTH,
  }));

  return {
    simulation,
    theme,
    nodes,
    links,
  };
};
