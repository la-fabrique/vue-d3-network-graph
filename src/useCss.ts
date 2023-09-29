import { D3LinkOptions, D3NodeOptions } from "./types";

export const useCss = (nodes?: D3NodeOptions, links?: D3LinkOptions) => {
  const css = {
    node: {
      stroke: nodes?.colors?.stroke || "#E2EB98",
      fill: nodes?.colors?.fill || "#93A392",
      selected: {
        stroke: nodes?.colors?.selected?.stroke || "#9DC4B5",
        fill: nodes?.colors?.selected?.fill,
      },
      hover: {
        stroke: "#9DC4B5",
        fill: nodes?.colors?.hover?.fill,
      },
      pinned: {
        stroke: "#9DC4B5",
        fill: nodes?.colors?.pinned?.fill,
      },
      label: {
        fill: nodes?.colors?.label?.fill || "#93A392",
      },
    },
    link: {
      stroke: links?.colors?.stroke || "#BAD9A2",
      fill: links?.colors?.fill,
      selected: {
        stroke: links?.colors?.selected?.stroke || "#9DC4B5",
        fill: links?.colors?.selected?.fill,
      },
      hover: {
        stroke: "#9DC4B5",
        fill: links?.colors?.hover?.fill,
      },
      label: {
        fill: links?.colors?.label?.fill || "#93A392",
      },
    },
  };

  return {
    css,
  };
};
