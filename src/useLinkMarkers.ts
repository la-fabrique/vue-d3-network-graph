import type { D3Link } from "./types";
import { type Ref, computed } from "vue";

const MARKER_ARROW_START_ID = "arrow-start";
const MARKER_ARROW_END_ID = "arrow-end";

export function useLinkMarkers(
  strokewidth: Readonly<Ref<number>>,
  nodeSize: Readonly<Ref<number>>,
  directed: Readonly<Ref<boolean>>
): {
  getMarkerStart: (link: D3Link) => string | undefined;
  getMarkerEnd: (link: D3Link) => string | undefined;
  markers: Readonly<
    Ref<{
      arrowStart: Record<string, unknown>;
      arrowEnd: Record<string, unknown>;
    }>
  >;
} {
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
      refX: -(nodeSize.value / 2 - strokewidth.value),
      refY: 0,
      viewBox: `0 -${5 * strokewidth.value} ${10 * strokewidth.value} ${
        10 * strokewidth.value
      }`,
      orient: "auto",
      markerWidth: 10 + strokewidth.value,
      markerHeight: 10 + strokewidth.value,
      "stroke-width": "1",
      "marker-units": "userSpaceOnUse",
    },
    arrowEnd: {
      id: MARKER_ARROW_END_ID,
      refX: nodeSize.value / 2 + (10 - strokewidth.value),
      refY: 0,
      viewBox: `0 -${5 * strokewidth.value} ${10 * strokewidth.value} ${
        10 * strokewidth.value
      }`,
      orient: "auto",
      markerWidth: 10 + strokewidth.value,
      markerHeight: 10 + strokewidth.value,
      "marker-units": "userSpaceOnUse",
    },
  }));

  return {
    getMarkerEnd,
    getMarkerStart,
    markers,
  };
}
