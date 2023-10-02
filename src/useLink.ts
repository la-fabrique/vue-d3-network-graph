import { D3DefinedLinkOptions, D3Link } from "@/types";
import { Ref } from "vue";

export function useLink(options: Readonly<Ref<D3DefinedLinkOptions>>): {
  getPath: (link: D3Link) => string | undefined;
  getAttrs: (link: D3Link) => Record<string, unknown>;
  getClass: (linkId: string | undefined) => string[];
  getStyle: (link: D3Link) => { stroke: string } | { stroke?: undefined };
} {
  const getPath = (link: D3Link) => {
    if (
      typeof link.source !== "number" &&
      typeof link.source !== "string" &&
      typeof link.target !== "number" &&
      typeof link.target !== "string"
    ) {
      const d = {
        M: [link?.source?.x || 0, link?.source?.y || 0],
        X: [link?.target?.x || 0, link?.target?.y || 0],
      };
      return "M " + d.M.join(" ") + " L" + d.X.join(" ");
    }
    return undefined;
  };

  const getStyle = (link: D3Link) => {
    return link.color
      ? {
          stroke: link.color,
        }
      : {};
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getAttrs = (link: D3Link) => {
    return { "stroke-width": options.value.width };
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getClass = (linkId: string | undefined): string[] => {
    const cssClass = ["link"];
    return cssClass;
  };

  return {
    getPath,
    getAttrs,
    getClass,
    getStyle,
  };
}
