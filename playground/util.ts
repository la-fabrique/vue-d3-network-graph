import type { D3Link, D3Node } from "@/types";

export const getRandomLinks = (nodes: D3Node[], maxLinks: number): D3Link[] => {
  const links = [];
  for (const node of nodes) {
    const total = Math.floor(Math.random() * maxLinks);
    for (let i = 0; i <= total; i++) {
      const target = Math.floor(Math.random() * nodes.length);
      const source = node.id!;
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

export const getDefaultOptions = () => ({
  draggables: true,
  nodes: {
    size: 10,
    font: {
      size: 10,
    },
  },
  links: {
    width: 1,
  },
  simulation: {
    force: {
      charge: -350,
      x: 0.5,
      y: 0.5,
    },
  },
});
