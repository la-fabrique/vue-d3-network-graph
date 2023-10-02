import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { SimulationLinkDatum } from 'd3-force';
import { SimulationNodeDatum } from 'd3-force';
import { VNodeProps } from 'vue';

export declare type D3DefinedLinkOptions = {
    width: number;
};

export declare type D3DefinedNodeOptions = {
    size: number;
    font: {
        size: number;
    };
};

export declare type D3InnerSVG = {
    viewBox: string;
    innerHtml: string;
};

export declare interface D3Link extends SimulationLinkDatum<D3Node> {
    id?: string;
    name?: string;
    color?: string;
    _svgAttrs?: Record<string, unknown>;
}

export declare type D3LinkOptions = {
    width: number;
    colors?: D3LinkOptionsColors;
};

export declare type D3LinkOptionsColors = {
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
        default: undefined;
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
        default: undefined;
    };
}>> & {
    "onNode-click"?: ((...args: any[]) => any) | undefined;
    "onLink-click"?: ((...args: any[]) => any) | undefined;
}, {
    options: D3Options;
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

export declare type D3NodeOptions = {
    size?: number;
    font?: {
        size?: number;
    };
    colors?: D3NodeOptionsColors;
};

export declare type D3NodeOptionsColors = {
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

export declare type D3Options = {
    links?: D3LinkOptions;
    nodes?: D3NodeOptions;
    simulation?: D3SimulationOptions;
    draggables?: boolean;
};

export declare type D3SimulationOptions = {
    static?: boolean;
    force: {
        x: number;
        y: number;
    };
    charge: number;
};

export declare type MaybeRef<T> = Ref<T> | T;

export { }
