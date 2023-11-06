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
} {
  const getSize = (size?: number) => size || nodeSize.value;

  const getWidth = (node: D3Node) => getNodeWidth(nodeSize.value, node.size);

  const getHeight = (node: D3Node) => getNodeHeight(nodeSize.value, node.size);

  const getX = (x?: number, width?: number) => (x || 0) - (width || 0) / 2;

  const getY = (y?: number, height?: number) => (y || 0) - (height || 0) / 2;

  const getInnerSvg = (node: PackCircle, children: D3NodeSimulation[]) =>
    `<circle cx="${node.x}" cy="${node.y}" r="${
      node.r + 1
    }" class="node-group" />` +
    children
      .map(
        (node) =>
          `<circle cx="${node.x}" cy="${node.y}" r="${node.r}" style="${node.style}" class="${node.class}" >
              <title>${node.name}</title>
          </circle>`
      )
      .join("");

  const getNodeGroup = (
    node: D3Node,
    children: D3Node[],
    defaultX?: number,
    defaultY?: number
  ) => {
    const packedNodes = packSiblings(
      children.map(
        (n) =>
          ({
            ...getNode(n),
            r: getNodeRadius(nodeSize.value, n.size),
          }) as D3NodeSimulation & PackRadius
      )
    );
    const enclosedNode = packEnclose(packedNodes);

    return {
      id: node.id,
      key: node.id,
      x: defaultX,
      y: defaultY,
      innerSVG: {
        viewBox: `-${enclosedNode.r + 2} -${enclosedNode.r + 2} ${
          enclosedNode.r * 2 + 4
        } ${enclosedNode.r * 2 + 4}`,
        innerHtml: getInnerSvg(enclosedNode, packedNodes),
      },
      width: enclosedNode.r * 2,
      height: enclosedNode.r * 2,
      name: node.name,
      title: node.name,
      class: ["node-group"],
      r: enclosedNode.r,
    } as D3NodeSimulation;
  };

  const getNode = (
    node: D3Node,
    children?: D3Node[],
    defaultX?: number,
    defaultY?: number
  ): D3NodeSimulation =>
    children && children.length > 0
      ? getNodeGroup(node, children, defaultX, defaultY)
      : ({
          id: node.id,
          key: node.id,
          x: defaultX,
          y: defaultY,
          innerSVG: node.innerSVG,
          width: getWidth(node),
          height: getHeight(node),
          name: node.name,
          title: node.name,
          class: node.class ? ["node", ...(node.class || [])] : ["node"],
          r: node.innerSVG
            ? undefined
            : getNodeRadius(nodeSize.value, node.size),
        } as D3NodeSimulation);

  return {
    getNode,
    getSize,
    getX,
    getY,
  };
}
