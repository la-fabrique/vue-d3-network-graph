import { type Ref, computed } from "vue";

export const useNodeLabel = (
  fontSize: Readonly<Ref<number>>,
  nodeSize: Readonly<Ref<number>>
) => {
  const label = computed(() => ({
    font: { size: fontSize.value },
    offset: {
      x: nodeSize.value / 2 + fontSize.value / 2,
      y: fontSize.value / 2,
    },
  }));

  return {
    label,
  };
};
