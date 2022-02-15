import { D3Node, D3NodeOptions } from "@/types";
import { computed, Ref } from "vue";

export function useNode(options: D3NodeOptions): {
  getSize: (node: D3Node) => number;
  getWidth: (node: D3Node) => number;
  getHeight: (node: D3Node) => number;
  getStyle: (node: D3Node) => string;
  getClass: (node: D3Node, classes?: string[]) => string[];
  labelOffset: Ref<{
    x: number;
    y: number;
  }>;
} {
  const getSize = (node: D3Node) => {
    return node.size || options.size;
  };

  const getWidth = (node: D3Node) => {
    return node.width || node.size || options.size;
  };

  const getHeight = (node: D3Node) => {
    return node.height || node.size || options.size;
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

  const labelOffset = computed(() => {
    return {
      x: options.size / 2 + options.fontSize / 2,
      y: options.fontSize / 2,
    };
  });

  return { labelOffset, getSize, getWidth, getHeight, getStyle, getClass };
}
