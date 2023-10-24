import type { D3Link, D3Node } from "@/types";
import { describe, expect, it } from "vitest";
import { useNodes } from "@/useNodes";
import { ref } from "vue";

describe("GIVEN nodes in same group", () => {
  const nodes = [
    { id: 1, group: 1, name: "node-1" },
    { id: 2, group: 1, name: "node-2" },
    { id: 3, group: 1, name: "node-3" },
  ];

  const { reduce } = useNodes(ref(25), ref(1), ref(false));

  describe("WHEN innerHtml is not defined", () => {
    it("THEN nodes are removed, group node is added with innerSvg", () => {
      const { nodes: result } = reduce(nodes, []);

      expect(result.length).toEqual(1);
      expect(result[0].id).toEqual("g-1");
      expect(result[0].r).toBeDefined();
      expect(result[0].innerSVG).toBeDefined();
    });
  });
});

describe("GIVEN nodes in groups and nodes without group", () => {
  const { reduce } = useNodes(ref(25), ref(1), ref(true));

  const nodes = [
    { id: 1, group: 1, name: "node-1" },
    { id: 11, group: 1, name: "node-11" },
    { id: 2, group: 2, name: "node-2" },
    { id: 22, group: 2, name: "node-22" },
    { id: 3, group: undefined, name: "node-3" },
    { id: 33, group: undefined, name: "node-33" },
    { id: 4, group: 4, name: "node-4" },
    { id: 44, group: 4, name: "node-44" },
  ] as D3Node[];

  const links = [
    { source: 1, target: 11, name: "link-1-11" },
    { source: 2, target: 22, name: "link-2-22" },
    { source: 3, target: 33, name: "link-3-33" },
    { source: 1, target: 2, name: "link-1-2" },
    { source: 3, target: 2, name: "link-3-2" },
    { source: 22, target: 3, name: "link-22-3" },
    { source: 4, target: 44, name: "link-4-44" },
  ] as D3Link[];

  const { nodes: reducedNodes, links: reducedLinks } = reduce(nodes, links);

  describe("WHEN nodes are in same group", () => {
    it("THEN nodes are removed and new node with group id like `g-{id}` is added", () => {
      expect(reducedNodes).toEqual(
        expect.not.arrayContaining([expect.objectContaining({ id: "1" })])
      );
      expect(reducedNodes).toEqual(
        expect.not.arrayContaining([expect.objectContaining({ id: "11" })])
      );
      expect(reducedNodes).toEqual(
        expect.not.arrayContaining([expect.objectContaining({ id: "2" })])
      );
      expect(reducedNodes).toEqual(
        expect.not.arrayContaining([expect.objectContaining({ id: "22" })])
      );
      expect(reducedNodes).toEqual(
        expect.arrayContaining([expect.objectContaining({ id: "g-1" })])
      );
      expect(reducedNodes).toEqual(
        expect.arrayContaining([expect.objectContaining({ id: "g-2" })])
      );
    });
  });

  describe("WHEN nodes are not in group", () => {
    it("THEN nodes are not removed", () => {
      expect(reducedNodes).toEqual(
        expect.arrayContaining([expect.objectContaining({ id: 3 })])
      );
      expect(reducedNodes).toEqual(
        expect.arrayContaining([expect.objectContaining({ id: 33 })])
      );
    });
  });

  describe("WHEN link exists between two nodes of the same group", () => {
    it("THEN link is removed", () => {
      expect(reducedLinks.find((l) => l.target === l.source)).not.toBeDefined();
    });
  });

  describe("WHEN link exists between two nodes not in group", () => {
    it("THEN link is not removed", () => {
      expect(reducedLinks).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ source: 3, target: 33 }),
        ])
      );
    });
  });

  describe("WHEN a links exists between two nodes of different groups", () => {
    it("THEN links are merged into new link between groups ", () => {
      expect(reducedLinks).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            source: "g-1",
            target: "g-2",
          }),
        ])
      );
    });
  });

  describe("WHEN a link exists between node in group and node without group", () => {
    it("THEN link target is updated with group id ", () => {
      expect(reducedLinks).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            source: 3,
            target: "g-2",
          }),
        ])
      );
    });
    it("THEN link source is updated with group id", () => {
      expect(reducedLinks).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            source: "g-2",
            target: 3,
          }),
        ])
      );
    });
  });
});
