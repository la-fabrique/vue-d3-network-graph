import type { Ref } from "vue";
import type { D3Link, D3LinkSimulation, D3Node } from "./types";
import { useNode } from "./useNode";
import { useLink } from "./useLink";
import { isDefined } from "@vueuse/core";

export const useNodes = (
  size: Readonly<Ref<number>>,
  linkStroke: Readonly<Ref<number>>,
  directed: Readonly<Ref<boolean>>
) => {
  const { getNode } = useNode(size);
  const { getLink } = useLink(linkStroke, directed);

  const linkExists = (
    link: D3LinkSimulation,
    firstId: string | number,
    secondId: string | number
  ) =>
    (link.source === firstId && link.target === secondId) ||
    (link.source === secondId && link.target === firstId);

  const reduce = (nodes: D3Node[], links: D3Link[]) => {
    const nodesSimulation = nodes
      .reduce(
        (acc, node) => {
          // orphan node
          if (node.group === undefined) {
            acc.push(node);
            return acc;
          }

          // sibling node and parent exists
          const existingNode = acc.find((n) => n.id === `g-${node.group}`);
          if (existingNode && existingNode.children) {
            existingNode.children.push(node);
            return acc;
          }

          acc.push({ id: `g-${node.group}`, children: [node] });
          return acc;
        },
        [] as (D3Node & { children?: D3Node[] })[]
      )
      .map((node) => getNode(node, node.children));

    const linksSimulation = links
      .reduce((acc, link) => {
        const sourceSimulation = nodesSimulation.find(
          (n) => n.id === link.source
        );
        const targetSimulation = nodesSimulation.find(
          (n) => n.id === link.target
        );

        // nodes without a group
        if (sourceSimulation && targetSimulation) {
          acc.push(link);
          return acc;
        }

        const source = nodes.find((n) => n.id === link.source);
        const target = nodes.find((n) => n.id === link.target);

        // nodes in two groups
        if (isDefined(source?.group) && isDefined(target?.group)) {
          if (source?.group === target?.group) {
            return acc;
          }
          const sameLink = acc.find((l) =>
            linkExists(l, `g-${source!.group}`, `g-${target!.group}`)
          );
          if (!sameLink) {
            acc.push({
              ...link,
              source: `g-${source!.group}`,
              target: `g-${target!.group}`,
              name: link.name || `g-${source!.group}-${target!.group}`,
            });
          } else if (
            !sameLink.twoWay &&
            sameLink.source !== `g-${source!.group}`
          ) {
            sameLink.twoWay = true;
          }
          return acc;
        }

        // source node in group and target node not in group
        if (isDefined(source?.group) && target && !isDefined(target?.group)) {
          acc.push({
            ...link,
            source: `g-${source!.group}`,
            name: link.name || `g-${source!.group}-${target.id}`, // nullable target !
          });
          return acc;
        }

        // source node not in group and target node in group
        if (source && !isDefined(source?.group) && isDefined(target?.group)) {
          acc.push({
            ...link,
            target: `g-${target!.group}`,
            name: link.name || `${source.id}-${target!.group}`,
          });
          return acc;
        }

        return acc;
      }, [] as D3Link[])
      .map((link) => getLink(link));

    return {
      nodes: nodesSimulation,
      links: linksSimulation,
    };
  };

  return { reduce };
};
