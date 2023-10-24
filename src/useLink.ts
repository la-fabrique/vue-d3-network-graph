import type { D3Link, D3LinkSimulation } from "./types";
import { type Ref } from "vue";

const MARKER_ARROW_START_ID = "arrow-start";
const MARKER_ARROW_END_ID = "arrow-end";

export function useLink(
  strokewidth: Readonly<Ref<number>>,
  directed: Readonly<Ref<boolean>>
): {
  getLink: (link: D3Link) => D3LinkSimulation;
  getClass: (linkId: string | undefined) => string[];
  getStyle: (link: D3Link) => { stroke: string } | undefined;
  getMarkerStart: (link: D3Link) => string | undefined;
  getMarkerEnd: (link: D3Link) => string | undefined;
} {
  const getStyle = (link: D3Link) =>
    link.color
      ? {
          stroke: link.color,
        }
      : undefined;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getClass = (linkId: string | number | undefined): string[] => {
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

  const getLink = (link: D3Link) => {
    return {
      source: link.source,
      target: link.target,
      name: link.name,
      class: getClass(link.id),
      style: getStyle(link),
      "stroke-width": strokewidth.value,
      "marker-end": getMarkerEnd(link),
      "marker-start": getMarkerStart(link),
    } as D3LinkSimulation;
  };

  return {
    getClass,
    getStyle,
    getMarkerEnd,
    getMarkerStart,
    getLink,
  };
}
