import type { D3NodeSimulation, D3NodeSize } from "./types";

export const isNode = (node: unknown): node is D3NodeSimulation =>
  Boolean(node) && typeof node !== "number" && typeof node !== "string";

export const getNodeSize = (defaultSize: number, size?: D3NodeSize) =>
  size === undefined
    ? defaultSize
    : typeof size === "number"
    ? size
    : size.width > size.height
    ? size.width
    : size.height;

export const getNodeRadius = (defaultSize: number, size?: D3NodeSize) =>
  getNodeSize(defaultSize, size) / 2;

export const getNodeWidth = (defaultSize: number, size?: D3NodeSize) =>
  size === undefined
    ? defaultSize
    : typeof size === "number"
    ? size
    : size.width;

export const getNodeHeight = (defaultSize: number, size?: D3NodeSize) =>
  size === undefined
    ? defaultSize
    : typeof size === "number"
    ? size
    : size.height;

export const getNodeIntersectionPoint = (
  xO: number,
  yO: number,
  r: number,
  xA: number,
  yA: number
) => {
  /*
// Coordonnées du cercle C et de la droite AO
const xO = ...; // Coordonnée x du centre du cercle C
const yO = ...; // Coordonnée y du centre du cercle C
const R = ...; // Rayon du cercle C
// Coordonnées du point A
const xA = ...; // Coordonnée x du point A
const yA = ...; // Coordonnée y du point A
*/
  // Calcul de la distance entre les points O et A
  const dOA = Math.sqrt((xA - xO) * (xA - xO) + (yA - yO) * (yA - yO));

  // Calcul des coordonnées du point P sur le cercle de centre O et de rayon R
  return { x: xO + (r * (xA - xO)) / dOA, y: yO + (r * (yA - yO)) / dOA };
};

export const getLabels = (name?: string, labels?: string[]) =>
  name ? [name, ...(labels || [])] : labels || [];
