import type { D3NodeSimulation, D3Node } from "./types";
import type { Ref } from "vue";

export function useNode(size: Readonly<Ref<number>>): {
  getNode: (
    node: D3Node,
    defaultX?: number,
    defaultY?: number
  ) => D3NodeSimulation;
  getSize: (size?: number) => number;
  getX: (x?: number, width?: number) => number;
  getY: (y?: number, height?: number) => number;
  getClass: (
    fx?: number | null | undefined,
    fy?: number | null | undefined
  ) => string[];
} {
  const getSize = (nodeSize?: number) => nodeSize || size.value;

  const getWidth = (node: D3Node) => node.width || size.value;

  const getHeight = (node: D3Node) => node.height || node.size || size.value;

  const getStyle = (node: D3Node) => (node.color ? "fill: " + node.color : "");

  const getClass = (
    fx?: number | null | undefined,
    fy?: number | null | undefined
  ) => (fx || fy ? ["node", "pinned"] : ["node"]);

  const getX = (x?: number, width?: number) => (x || 0) - (width || 0) / 2;

  const getY = (y?: number, height?: number) => (y || 0) - (height || 0) / 2;

  const getNode = (node: D3Node, defaultX?: number, defaultY?: number) => {
    return {
      id: node.id,
      key: node.id,
      /*  vx: defaultX,
      vy: defaultY, */
      x: defaultX,
      y: defaultY,
      viewBox: node.innerSVG,
      width: getWidth(node),
      height: getHeight(node),
      name: node.name,
      style: getStyle(node),
      title: node.name,
      cssClass: getClass(),
      r: node.innerSVG ? undefined : getSize(node.size) / 2,
    } as D3NodeSimulation;
  };

  return {
    getNode,
    getClass,
    getSize,
    getX,
    getY,
  };
}
