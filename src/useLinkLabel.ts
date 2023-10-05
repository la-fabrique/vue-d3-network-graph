import { type Ref, computed } from "vue";
import { isNode, type D3LinkSimulation } from "./types";

export const useLinkLabel = (fontSize: Readonly<Ref<number>>) => {
  const label = computed(() => ({
    font: { size: fontSize.value },
  }));

  const getX = (link: D3LinkSimulation) =>
    isNode(link.source) && isNode(link.target) && link.source.x && link.target.x
      ? link.target.x > link.source.x
        ? link.source.x + (link.target.x - link.source.x) / 2
        : link.target.x + (link.source.x - link.target.x) / 2
      : undefined;

  const getY = (link: D3LinkSimulation) =>
    isNode(link.source) && isNode(link.target) && link.source.y && link.target.y
      ? link.target.y > link.source.y
        ? link.source.y + (link.target.y - link.source.y) / 2
        : link.target.y + (link.source.y - link.target.y) / 2
      : undefined;

  return {
    label,
    getX,
    getY,
  };
};
