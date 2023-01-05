import { SimulationLinkDatum, SimulationNodeDatum } from "d3";
export interface D3Node extends SimulationNodeDatum {
    id?: number;
    name?: string;
    color?: string;
    cssClass?: string[] | undefined;
    size?: number;
    width?: number;
    height?: number;
    innerSVG?: D3InnerSVG;
    group?: number;
}
export interface D3Link extends SimulationLinkDatum<D3Node> {
    id?: string;
    name?: string;
    color?: string;
    _svgAttrs?: Record<string, unknown>;
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
    size: {
        width: number;
        height: number;
    };
}
export interface D3InnerSVG {
    viewBox: string;
    innerHtml: string;
}
