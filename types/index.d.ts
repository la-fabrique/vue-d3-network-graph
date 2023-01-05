import type { AllowedComponentProps } from 'vue';
import type { ComponentCustomProps } from 'vue';
import type { ComponentOptionsMixin } from 'vue';
import type { DefineComponent } from 'vue';
import type { ExtractPropTypes } from 'vue';
import type { PropType } from 'vue';
import type { Ref } from 'vue';
import type { Simulation } from 'd3-force';
import { SimulationLinkDatum } from 'd3';
import { SimulationNodeDatum } from 'd3';
import type { VNodeProps } from 'vue';

export declare interface D3InnerSVG {
    viewBox: string;
    innerHtml: string;
}

export declare interface D3Link extends SimulationLinkDatum<D3Node> {
    id?: string;
    name?: string;
    color?: string;
    _svgAttrs?: Record<string, unknown>;
}

export declare interface D3LinkOptions {
    width: number;
}

export declare const D3NetworkGraph: DefineComponent<{
    nodes: {
        type: PropType<D3Node[]>;
        required: true;
    };
    links: {
        type: PropType<D3Link[]>;
        required: true;
    };
    options: {
        type: PropType<D3Options>;
        default: () => {
            size: {
                width: number;
                height: number;
            };
        };
    };
    nodeOptions: {
        type: PropType<D3NodeOptions>;
        default: () => {
            hasLabel: boolean;
            size: number;
            fontSize: number;
        };
    };
    linkOptions: {
        type: PropType<D3LinkOptions>;
        default: () => {
            width: number;
        };
    };
}, {
    props: any;
    emit: (event: "node-click" | "link-click", ...args: any[]) => void;
    svg: Ref<null>;
    animate: (nodes: D3Node[], links: D3Link[]) => void;
    simulation: Ref<Simulation<D3Node, undefined> | undefined>;
    dragStart: (event: Event, index: number) => void;
    dragEnd: () => void;
    move: (event: Event) => void;
    labelOffset: Ref<{
        x: number;
        y: number;
    }>;
    getNodeSize: (node: D3Node) => number;
    getNodeWidth: (node: D3Node) => number;
    getNodeClass: (node: D3Node, classes?: string[] | undefined) => string[];
    getNodeHeight: (node: D3Node) => number;
    getNodeStyle: (node: D3Node) => string;
    getLinkPath: (link: D3Link) => string | undefined;
    getLinkAttrs: (link: D3Link) => Record<string, unknown>;
    getLinkClass: (linkId: string | undefined) => string[];
    getLinkStyle: (link: D3Link) => {
        stroke: string;
    } | {
        stroke?: undefined;
    };
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("node-click" | "link-click")[], "node-click" | "link-click", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    nodes: {
        type: PropType<D3Node[]>;
        required: true;
    };
    links: {
        type: PropType<D3Link[]>;
        required: true;
    };
    options: {
        type: PropType<D3Options>;
        default: () => {
            size: {
                width: number;
                height: number;
            };
        };
    };
    nodeOptions: {
        type: PropType<D3NodeOptions>;
        default: () => {
            hasLabel: boolean;
            size: number;
            fontSize: number;
        };
    };
    linkOptions: {
        type: PropType<D3LinkOptions>;
        default: () => {
            width: number;
        };
    };
}>> & {
    "onNode-click"?: ((...args: any[]) => any) | undefined;
    "onLink-click"?: ((...args: any[]) => any) | undefined;
}, {
    options: D3Options;
    nodeOptions: D3NodeOptions;
    linkOptions: D3LinkOptions;
}>;

export declare interface D3Node extends SimulationNodeDatum {
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

export declare interface D3NodeOptions {
    hasLabel: boolean;
    size: number;
    fontSize: number;
}

export declare interface D3Options {
    size: {
        width: number;
        height: number;
    };
}

export { }
