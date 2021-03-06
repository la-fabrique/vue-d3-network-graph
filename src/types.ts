import { SimulationLinkDatum, SimulationNodeDatum } from "d3";

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

export interface D3NodeOptions {
  hasLabel: boolean;
  size: number;
  fontSize: number;
}

export interface D3LinkOptions {
  width: number;
}

export interface D3Options {
  size: { width: number; height: number };
}

export interface D3InnerSVG {
  viewBox: string;
  innerHtml: string;
}
