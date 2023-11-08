import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

/**
 * Layout options
 * @category Options types
 */
export declare type D3LayoutOptions = {
    /**
     * Indicates if the nodes should be draggable
     * @defaultValue `false`
     * */
    draggable?: boolean;
    /**
     * Indicate if the graph is directed. Edge arrow will be displayed
     * @defaultValue `false`
     */
    directed?: boolean;
    /**
     * Indicates if the simulation should not be animated
     * @remarks  Use this option if you want to use the simulation to calculate the positions of the nodes but you don't want to render them each 'tick'
     * @defaultValue `false`
     */
    static?: boolean;
    /**
     * Css Theme
     * @defaultValue `teal`
     */
    theme?: Theme;
    /**
     * Indicate if is dark mode enabled
     */
    dark?: boolean;
};

/**
 * Represents a link in the graph
 * @category Node types
 */
export declare type D3Link = {
    /**
     * Unique link id. If not provided uses array index
     */
    id?: number | string;
    /**
     * Link name
     */
    name?: string;
    /**
     * Link labels
     */
    labels?: string[];
    /**
     * Link css class names
     */
    class?: string[];
    /**
     * Is two-way link (bidirectional)
     */
    twoWay?: boolean;
    /**
     * Node source id
     * */
    source: string | number;
    /**
     * Node target id
     * */
    target: string | number;
};

/**
 * Default link options
 * @category Options types
 */
export declare type D3LinkOptions = {
    /**
     * Default link width
     * @defaultValue `1`
     */
    width: number;
    font?: {
        /** Default link font size
         * @defaultValue `12`
         */
        size?: number;
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
    "node-click": ($event: TouchEvent | MouseEvent, node: D3Node) => void;
    "link-click": ($event: TouchEvent | MouseEvent, link: D3Link) => void;
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
    "onNode-click"?: (($event: TouchEvent | MouseEvent, node: D3Node) => any) | undefined;
    "onLink-click"?: (($event: TouchEvent | MouseEvent, link: D3Link) => any) | undefined;
}, {
    options: D3Options;
}, {}>;

/**
 * Event exposed by the D3NetworkGraph component
 * @category Events
 */
export declare type D3NeworkGraphEmits = {
    (event: "node-click", $event: TouchEvent | MouseEvent, node: D3Node): void;
    (event: "link-click", $event: TouchEvent | MouseEvent, link: D3Link): void;
};

/**
 * Represents a node in the graph
 * @category Node types
 */
export declare type D3Node = {
    /**
     * Unique node id. If not provided uses array index
     */
    id: number | string;
    /**
     * Node name
     */
    name?: string;
    /**
     * Node labels
     */
    labels?: string[];
    /**
     * Node css class names,
     */
    class?: string[];
    /**
     * Node size
     */
    size?: D3NodeSize;
    /**
     * Node svg image
     */
    innerSVG?: {
        viewBox: string;
        innerHtml: string;
    };
    /**
     * Group id
     * */
    group?: number;
    /**
     * Initial fixed position
     */
    position?: {
        x?: number;
        y?: number;
    };
};

/**
 * Default node options
 * @category Options types
 */
export declare type D3NodeOptions = {
    /** Default node size
     * @defaultValue `25`
     */
    size?: number;
    font?: {
        /** Default node size
         * @defaultValue `12`
         */
        size?: number;
    };
};

/**
 * Represents a node size
 * @category Node types
 */
export declare type D3NodeSize = number | {
    /**
     * Node width
     */
    width: number;
    /**
     * Node height
     */
    height: number;
};

/**
 * Graph options
 * @category Options types
 */
export declare type D3Options = {
    /**
     * Default link options
     * */
    links?: D3LinkOptions;
    /**
     * Default node options
     * */
    nodes?: D3NodeOptions;
    /**
     * Simulation options
     * */
    simulation?: D3SimulationOptions;
    /**
     * Layout options
     * */
    layout?: D3LayoutOptions;
};

/**
 * Simulation options
 * @category Options types
 */
export declare type D3SimulationOptions = {
    /**
     * d3 force configurations
     */
    force: {
        /**
         * d3 forceX strenght between 0 and 1
         * @defaultValue `0.1`
         * */
        x?: number;
        /**
         * d3 forceY strenght between 0 and 1
         * @defaultValue `0.1`
         */
        y?: number;
        /**
         * d3 forceManyBody strenght smaller than 0
         * @defaultValue `-300`
         */
        charge?: number;
        /**
         * d3 forceCollide radius
         * @defaultValue `45`
         */
        collide?: number;
    };
};

/** @ignore */
declare const _default: Plugin_2;
export default _default;

/**
 * Represents a CSS theme
 * @category Options types
 */
declare type Theme = string | "green" | "purple" | "teal" | "blue" | "grey";

export { }
