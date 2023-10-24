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

/*
// Coordonnées du cercle C et de la droite AO
const xO = ...; // Coordonnée x du centre du cercle C
const yO = ...; // Coordonnée y du centre du cercle C
const R = ...; // Rayon du cercle C

// Coordonnées du point A
const xA = ...; // Coordonnée x du point A
const yA = ...; // Coordonnée y du point A

// Calcul de la distance entre les points O et A
const dOA = Math.sqrt((xA - xO) * (xA - xO) + (yA - yO) * (yA - yO));

// Calcul des coordonnées du point P sur le cercle de centre O et de rayon R
const xP = xO + R * (xA - xO) / dOA;
const yP = yO + R * (yA - yO) / dOA;
*/
