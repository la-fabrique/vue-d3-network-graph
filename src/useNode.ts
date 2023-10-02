import { D3Node, D3DefinedNodeOptions } from "@/types";
import { computed, Ref } from "vue";

export function useNode(options: Readonly<Ref<D3DefinedNodeOptions>>): {
  getSize: (node: D3Node) => number;
  getWidth: (node: D3Node) => number;
  getHeight: (node: D3Node) => number;
  getStyle: (node: D3Node) => string;
  getClass: (node: D3Node, classes?: string[]) => string[];
  label: Ref<{
    font: {
      size: number;
    };
    offset: {
      x: number;
      y: number;
    };
  }>;
} {
  const getSize = (node: D3Node) => {
    return node.size || options.value.size;
  };

  const getWidth = (node: D3Node) => {
    return node.width || options.value.size;
  };

  const getHeight = (node: D3Node) => {
    return node.height || node.size || options.value.size;
  };

  const getStyle = (node: D3Node) => {
    return node.color ? "fill: " + node.color : "";
  };

  const getClass = (node: D3Node, classes: string[] = []) => {
    const cssClass = node.cssClass ? node.cssClass : [];
    cssClass.push("node");
    classes.forEach((c) => cssClass.push(c));
    if (node.fx || node.fy) cssClass.push("pinned");
    return cssClass;
  };

  const label = computed(() => {
    return {
      font: { size: options.value.font.size },
      offset: {
        x: options.value.size / 2 + options.value.font.size / 2,
        y: options.value.font.size / 2,
      },
    };
  });

  return { label, getSize, getWidth, getHeight, getStyle, getClass };
}
