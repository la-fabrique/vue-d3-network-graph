import { SimulationLinkDatum, SimulationNodeDatum } from "d3-force";
import { Ref } from "vue";

export interface D3Node extends SimulationNodeDatum {
  id?: number; // node id. If not provided uses array index
  name?: string; //node name. If not provided uses: 'node [node_id]'
  color?: string; //node color, e.g. red, #aa00bb,
  cssClass?: string[] | undefined; //node css class names
  size?: number; // node size (svg renderer only)
  width?: number; //node width (svg renderer only)
  height?: number; //node height (svg renderer only)
  innerSVG?: D3InnerSVG;
  group?: number;
}

export interface D3Link extends SimulationLinkDatum<D3Node> {
  id?: string; // link id. If not provided uses array index
  name?: string; //node name. If not provided uses: 'link [link_id]'
  color?: string; // link color, e.g. red, #aa00bb,
  _svgAttrs?: Record<string, unknown>; // Object, svg line attributes
}

export type MaybeRef<T> = Ref<T> | T;

export type D3NodeOptionsColors = {
  stroke?: string;
  fill?: string;
  selected?: {
    stroke?: string;
    fill?: string;
  };
  hover?: {
    stroke?: string;
    fill?: string;
  };
  pinned?: {
    stroke?: string;
    fill?: string;
  };
  label?: {
    fill?: string;
  };
};

export type D3NodeOptions = {
  size?: number;
  font?: { size?: number };
  colors?: D3NodeOptionsColors;
};

export type D3DefinedNodeOptions = {
  size: number;
  font: { size: number };
};

export type D3LinkOptionsColors = {
  stroke?: string;
  fill?: string;
  selected?: {
    stroke?: string;
    fill?: string;
  };
  hover?: {
    stroke?: string;
    fill?: string;
  };
  label?: {
    fill?: string;
  };
};

export type D3LinkOptions = {
  width: number;
  colors?: D3LinkOptionsColors;
};

export type D3DefinedLinkOptions = {
  width: number;
};

export type D3SimulationOptions = {
  static?: boolean;
  force: { x: number; y: number };
  charge: number;
};

export type D3Options = {
  links?: D3LinkOptions;
  nodes?: D3NodeOptions;
  simulation?: D3SimulationOptions;
  draggables?: boolean;
};

export type D3InnerSVG = {
  viewBox: string;
  innerHtml: string;
};
