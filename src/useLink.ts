import { D3Link } from "./types";
import { Ref, computed } from "vue";

type D3DefinedLinkOptions = {
  width: number;
};

const MARKER_ARROW_START_ID = "arrow-start";
const MARKER_ARROW_END_ID = "arrow-end";

export function useLink(
  options: Readonly<Ref<D3DefinedLinkOptions>>,
  nodeSize: Readonly<Ref<number>>,
  directed: Readonly<Ref<boolean>>
): {
  getPath: (link: D3Link) => string | undefined;
  getAttrs: (link: D3Link) => Record<string, unknown>;
  getClass: (linkId: string | undefined) => string[];
  getStyle: (link: D3Link) => { stroke: string } | { stroke?: undefined };
  getMarkerStart: (link: D3Link) => string | undefined;
  getMarkerEnd: (link: D3Link) => string | undefined;
  markers: Readonly<
    Ref<{
      arrowStart: Record<string, unknown>;
      arrowEnd: Record<string, unknown>;
    }>
  >;
} {
  const getPath = (link: D3Link) =>
    typeof link.source !== "number" &&
    typeof link.source !== "string" &&
    typeof link.target !== "number" &&
    typeof link.target !== "string"
      ? `M${link.source.x} ${link.source.y} L${link.target.x} ${link.target.y}`
      : undefined;

  const getStyle = (link: D3Link) =>
    link.color
      ? {
          stroke: link.color,
        }
      : {};

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getAttrs = (link: D3Link) => ({ "stroke-width": options.value.width });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getClass = (linkId: string | undefined): string[] => {
    const cssClass = ["link"];
    return cssClass;
  };

  const getMarkerStart = (link: D3Link) =>
    directed.value && link.twoWay
      ? `url(#${MARKER_ARROW_START_ID})`
      : undefined;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getMarkerEnd = (link: D3Link) =>
    directed.value ? `url(#${MARKER_ARROW_END_ID})` : undefined;

  // marker scale is not perfect yet if link width is graeter than 3
  const markers = computed(() => ({
    arrowStart: {
      id: MARKER_ARROW_START_ID,
      refX: -(nodeSize.value / 2 - options.value.width),
      refY: 0,
      viewBox: `0 -${5 * options.value.width} ${10 * options.value.width} ${
        10 * options.value.width
      }`,
      orient: "auto",
      markerWidth: 10 + options.value.width,
      markerHeight: 10 + options.value.width,
      "stroke-width": "1",
      "marker-units": "userSpaceOnUse",
    },
    arrowEnd: {
      id: MARKER_ARROW_END_ID,
      refX: nodeSize.value / 2 + (10 - options.value.width),
      refY: 0,
      viewBox: `0 -${5 * options.value.width} ${10 * options.value.width} ${
        10 * options.value.width
      }`,
      orient: "auto",
      markerWidth: 10 + options.value.width,
      markerHeight: 10 + options.value.width,
      "stroke-width": "1",
      "marker-units": "userSpaceOnUse",
    },
  }));

  return {
    getPath,
    getAttrs,
    getClass,
    getStyle,
    getMarkerEnd,
    getMarkerStart,
    markers,
  };
}
