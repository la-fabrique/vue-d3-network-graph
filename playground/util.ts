import type { D3Link, D3Node, D3Options } from "@/types";

export const getRandomLinks = (nodes: D3Node[], maxLinks: number): D3Link[] => {
  const links: D3Link[] = [];
  for (const node of nodes) {
    const total = Math.floor(Math.random() * maxLinks);
    for (let i = 0; i <= total; i++) {
      const target = Math.floor(Math.random() * nodes.length);
      const source = node.id!;
      if (
        target === source ||
        links.some((l) => l.source === source && l.target === target)
      ) {
        continue;
      }
      const existingLink = links.find(
        (l) => l.source === target && l.target === source
      );
      if (existingLink) {
        existingLink.twoWay = true;
        continue;
      }

      links.push(newLink(source, target));
    }
  }
  return links;
};

const newLink = (source: number, target: number) => ({
  source: source,
  target: target,
  name: "Utilise",
});

export const getRandomNodes = (maxNodes: number) => {
  const nodes = [];
  for (let i = 0; i <= maxNodes; i++) {
    nodes.push(newNode(i));
  }
  return nodes;
};

const newNode = (id: number): D3Node => ({
  id: id,
  name: "Node " + id,
  group: Math.floor(Math.random() * 10),
});

export const getDefaultOptions = () =>
  ({
    layout: { draggables: true, directed: true },
    nodes: {
      size: 25,
      font: {
        size: 10,
      },
      colors: {
        fill: undefined,
        label: {
          fill: undefined,
        },
      },
    },
    links: {
      width: 1,
      colors: {
        stroke: undefined,
      },
    },
    simulation: {
      force: {
        charge: -300,
        x: 0.1,
        y: 0.1,
        collide: 50,
      },
    },
  }) as D3Options;
