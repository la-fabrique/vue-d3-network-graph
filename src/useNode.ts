import { D3Node, D3NodeOptions } from "@/types";
import { computed, MaybeRef, Ref, toValue } from "vue";

const DEFAULT_SIZE = 20;
const DEFAULT_FONT_SIZE = 10;

export function useNode(options?: MaybeRef<D3NodeOptions>): {
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
  const size = () => toValue(options)?.size || DEFAULT_SIZE;
  const fontSize = () => toValue(options)?.font?.size || DEFAULT_FONT_SIZE;

  const getSize = (node: D3Node) => {
    return node.size || size();
  };

  const getWidth = (node: D3Node) => {
    return node.width || size();
  };

  const getHeight = (node: D3Node) => {
    return node.height || node.size || size();
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
      font: { size: fontSize() },
      offset: {
        x: size() / 2 + fontSize() / 2,
        y: fontSize() / 2,
      },
    };
  });

  return { label, getSize, getWidth, getHeight, getStyle, getClass };
}
