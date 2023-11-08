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
      refX: 0,
      refY: 0,
      viewBox: `0 -5 10 10`,
      orient: "auto",
      markerWidth: 10,
      markerHeight: 10,
    },
    arrowEnd: {
      id: MARKER_ARROW_END_ID,
      refX: 10,
      refY: 0,
      viewBox: `0 -5 10 10`,
      orient: "auto",
      markerWidth: 10,
      markerHeight: 10,
    },
  }));

  return {
    getMarkerEnd,
    getMarkerStart,
    markers,
  };
}
