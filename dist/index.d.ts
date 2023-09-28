import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { SimulationLinkDatum } from 'd3';
import { SimulationNodeDatum } from 'd3';
import { VNodeProps } from 'vue';

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
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "node-click": (...args: any[]) => void;
    "link-click": (...args: any[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}, {}>;

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
