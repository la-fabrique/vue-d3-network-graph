import type { D3NodeSimulation, D3Node } from "./types";
import type { Ref } from "vue";
import { getNodeHeight, getNodeRadius, getNodeWidth } from "./utils";
import {
  packEnclose,
  packSiblings,
  type PackCircle,
  type PackRadius,
} from "d3-hierarchy";

export function useNode(nodeSize: Readonly<Ref<number>>): {
  getNode: (
    node: D3Node,
    children?: D3Node[],
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
  const getSize = (size?: number) => size || nodeSize.value;

  const getWidth = (node: D3Node) => getNodeWidth(nodeSize.value, node.size);

  const getHeight = (node: D3Node) => getNodeHeight(nodeSize.value, node.size);

  const getStyle = (node: D3Node) => (node.color ? "fill: " + node.color : "");

  const getClass = (
    fx?: number | null | undefined,
    fy?: number | null | undefined
  ) => ["node"];

  const getX = (x?: number, width?: number) => (x || 0) - (width || 0) / 2;

  const getY = (y?: number, height?: number) => (y || 0) - (height || 0) / 2;

  const getInnerSvg = (node: PackCircle, children: D3NodeSimulation[]) =>
    `<circle cx="${node.x}" cy="${node.y}" r="${
      node.r + 1
    }" class="node-group" />` +
    children
      .map(
        (node) =>
          `<circle cx="${node.x}" cy="${node.y}" r="${node.r}" style="${node.style}" class="${node.cssClass}" >
              <title>${node.name}</title>
          </circle>`
      )
      .join("");

  const getNode = (
    node: D3Node,
    children?: D3Node[],
    defaultX?: number,
    defaultY?: number
  ): D3NodeSimulation => {
    let enclosedNode: PackCircle | undefined = undefined;
    let packedNodes: Array<D3NodeSimulation & PackCircle> | undefined =
      undefined;

    if (children && children.length > 0) {
      packedNodes = packSiblings(
        children.map(
          (n) =>
            ({
              ...getNode(n),
              r: getNodeRadius(nodeSize.value, n.size),
            }) as D3NodeSimulation & PackRadius
        )
      );

      enclosedNode = packEnclose(packedNodes);
    }

    return {
      id: node.id,
      key: node.id,
      x: defaultX,
      y: defaultY,
      innerSVG:
        enclosedNode && packedNodes
          ? {
              viewBox: `-${enclosedNode.r + 2} -${enclosedNode.r + 2} ${
                enclosedNode.r * 2 + 4
              } ${enclosedNode.r * 2 + 4}`,
              innerHtml: getInnerSvg(enclosedNode, packedNodes),
            }
          : node.innerSVG,
      width: enclosedNode ? enclosedNode.r * 2 : getWidth(node),
      height: enclosedNode ? enclosedNode.r * 2 : getHeight(node),
      name: node.name,
      style: getStyle(node),
      title: node.name,
      cssClass: enclosedNode ? ["node-group"] : ["node"],
      r: enclosedNode
        ? enclosedNode.r
        : node.innerSVG
        ? undefined
        : getNodeRadius(nodeSize.value, node.size),
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
