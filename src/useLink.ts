import type { D3Link, D3LinkSimulation } from "./types";
import { type Ref } from "vue";
import { getLabels } from "./utils";

const MARKER_ARROW_START_ID = "arrow-start";
const MARKER_ARROW_END_ID = "arrow-end";

export function useLink(
  strokewidth: Readonly<Ref<number>>,
  directed: Readonly<Ref<boolean>>
): {
  getLink: (link: D3Link) => D3LinkSimulation;
  getMarkerStart: (link: D3Link) => string | undefined;
  getMarkerEnd: (link: D3Link) => string | undefined;
} {
  const getMarkerStart = (link: D3Link) =>
    directed.value && link.twoWay
      ? `url(#${MARKER_ARROW_START_ID})`
      : undefined;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getMarkerEnd = (link: D3Link) =>
    directed.value ? `url(#${MARKER_ARROW_END_ID})` : undefined;

  const getLink = (link: D3Link) => {
    return {
      source: link.source,
      target: link.target,
      labels: getLabels(link.name, link.labels),
      class: link.class ? ["link", link.class] : ["link"],
      "stroke-width": strokewidth.value,
      "marker-end": getMarkerEnd(link),
      "marker-start": getMarkerStart(link),
    } as D3LinkSimulation;
  };

  return {
    getMarkerEnd,
    getMarkerStart,
    getLink,
  };
}
