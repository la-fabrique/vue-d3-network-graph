import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { Simulation } from 'd3-force';
import type { SimulationLinkDatum } from 'd3-force';
import type { SimulationNodeDatum } from 'd3-force';
import { VNodeProps } from 'vue';

/**
 * Layout options
 */
export declare type D3LayoutOptions = {
    /**
     * Indicates if the nodes should be draggable
     * @defaultValue `false`
     * */
    draggables?: boolean;
    /**
     * Indicate if the graph is directed. Edge arrow will be displayed
     * @defaultValue `false`
     */
    directed?: boolean;
};

/**
 * Represents a link in the graph
 */
export declare type D3Link = {
    /**
     * Unique link id. If not provided uses array index
     */
    id?: number | string;
    /**
     * Link name. If not provided uses: 'link [link_id]'
     */
    name?: string;
    /**
     * Link color (stroke), e.g. red, #aa00bb,
     */
    color?: string;
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
 */
export declare type D3LinkOptions = {
    /**
     * Default link width
     * @defaultValue `2`
     */
    width: number;
    font?: {
        /** Default link font size
         * @defaultValue `12`
         */
        size?: number;
    };
    /**
     * Default link colors
     */
    colors?: D3LinkOptionsColors;
};

/**
 * Default link colors
 */
export declare type D3LinkOptionsColors = {
    /**
     * Default link stroke color
     */
    stroke?: string;
    /**
     * Default link fill color
     */
    fill?: string;
    selected?: {
        /**
         * Selected link stroke color
         */
        stroke?: string;
        /**
         * Selected link fill color
         */
        fill?: string;
    };
    hover?: {
        /**
         * Hovered link stroke color
         */
        stroke?: string;
        /**
         * Hovered link fill color
         */
        fill?: string;
    };
    label?: {
        /**
         * Link label color
         */
        fill?: string;
    };
};

/**
 * Link used by the d3 simulation compisition function `useSimulation`
 */
export declare type D3LinkSimulation = SimulationLinkDatum<D3NodeSimulation> & {
    /** Link css class */
    class?: string[];
    /** Link style */
    style?: string;
    /** Link name */
    name?: string;
    /** Link thickness */
    "stroke-width"?: number;
    /** Link marker-end */
    "marker-end"?: string;
    /** Link marker-start */
    "marker-start"?: string;
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
 */
export declare type D3NeworkGraphEmits = {
    (event: "node-click", $event: TouchEvent | MouseEvent, node: D3Node): void;
    (event: "link-click", $event: TouchEvent | MouseEvent, link: D3Link): void;
};

/**
 * Represents a node in the graph
 */
export declare type D3Node = {
    /**
     * Unique node id. If not provided uses array index
     */
    id: number | string;
    /**
     * Node name. If not provided uses: 'node [node_id]'
     */
    name?: string;
    /**
     * Node color, e.g. red, #aa00bb,
     */
    color?: string;
    /**
     * Node size
     */
    size?: number;
    /**
     * Node width
     */
    width?: number;
    /**
     * Node height
     */
    height?: number;
    /**
     * Node svg image
     */
    innerSVG?: {
        viewBox: string;
        innerHtml: string;
    };
    group?: number;
};

/**
 * Default node options
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
    /** Default node colors */
    colors?: D3NodeOptionsColors;
};

/**
 * Defaut node colors
 */
export declare type D3NodeOptionsColors = {
    /**
     * Default node stroke color
     */
    stroke?: string;
    /**
     * Default node fill color
     */
    fill?: string;
    selected?: {
        /**
         * Selected node stroke color
         * */
        stroke?: string;
        /**
         * Selected node fill color
         */
        fill?: string;
    };
    hover?: {
        /**
         * Hovered node stroke color
         */
        stroke?: string;
        /**
         * Hovered node fill color
         */
        fill?: string;
    };
    pinned?: {
        /**
         * Pinned node stroke color
         */
        stroke?: string;
        /**
         * Pinned node fill color
         */
        fill?: string;
    };
    label?: {
        /**
         * Node label color
         */
        fill?: string;
    };
};

/**
 * Node used by the d3 simulation compisition function `useSimulation`
 */
export declare type D3NodeSimulation = SimulationNodeDatum & {
    /**
     * Node id. If not provided uses array index
     */
    id?: number;
    /**
     * Node name. If not provided uses: 'node [node_id]'
     */
    name?: string;
    /**
     * Node color, e.g. red, #aa00bb,
     */
    color?: string;
    /**
     * Node css class names
     */
    cssClass?: string[] | undefined;
    /**
     * Node size
     */
    size?: number;
    /**
     * Node width
     */
    width?: number;
    /**
     * Node height
     */
    height?: number;
    /**
     * Node svg image
     */
    innerSVG?: {
        viewBox: string;
        innerHtml: string;
    };
    /**
     * Node style
     * */
    style?: string;
    /** Noderadius */
    r?: number;
};

/**
 * Graph options
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
 */
export declare type D3SimulationOptions = {
    /**
     * Indicates if the simulation should not be animated
     * @remarks  Use this option if you want to use the simulation to calculate the positions of the nodes but you don't want to render them each 'tick'
     * @defaultValue `false`
     */
    static?: boolean;
    /**
     * d3 force configurations
     */
    force: {
        /**
         * d3 forceX strenght between 0 and 1
         * @defaultValue `0.1`
         * */
        x: number;
        /**
         * d3 forceY strenght between 0 and 1
         * @defaultValue `0.1`
         */
        y: number;
        /**
         * d3 forceManyBody strenght smaller than 0
         * @defaultValue `-300`
         */
        charge: number;
        /**
         * d3 forceCollide radius
         * @defaultValue `45`
         */
        collide: number;
    };
};

/**
 * Composition function used by the D3NetworkGraph component to create a d3 simulation
 * @remarks
 * This function can be used to create a d3 simulation for a network graph without components
 */
export declare function useSimulation(
/** The nodes of the graph */
nodes: Readonly<Ref<D3Node[]>>, 
/** The links of the graph */
links: Readonly<Ref<D3Link[]>>, 
/** The size of the graph */
rect: Readonly<Ref<{
    width: number;
    height: number;
}>>, 
/** The options of the simulation */
options: useSimulationOptions): {
    /** The graph  */
    graph: {
        nodes: D3NodeSimulation[];
        links: D3LinkSimulation[];
    };
    /** The d3 simulation */
    simulation: Ref<Simulation<D3NodeSimulation, D3LinkSimulation>>;
};

/**
 * Options used by the useSimulation composition function
 */
export declare type useSimulationOptions = {
    /**
     * Indicates if the simulation should not be animated
     */
    static: Readonly<Ref<boolean>>;
    /**
     * d3 forceX strenght between 0 and 1
     */
    forceXStrength: Readonly<Ref<number>>;
    /**
     * d3 forceY strenght between 0 and 1
     */
    forceYStrength: Readonly<Ref<number>>;
    /**
     * d3 forceManyBody strenght smaller than 0
     * */
    forcManyBodyStrength: Readonly<Ref<number>>;
    /**
     * d3 forceCollide radius
     */
    forceCollideStrength: Readonly<Ref<number>>;
    /**
     * Default node size
     */
    nodeSize: Readonly<Ref<number>>;
    /**
     * Default node font size
     */
    nodeFontSize: Readonly<Ref<number>>;
    /**
     * Indicate if draggables are enabled
     */
    draggables: Readonly<Ref<boolean>>;
    /**
     * Indicate if the graph is directed. Edge arrow will be displayed
     */
    directed: Readonly<Ref<boolean>>;
    /**
     * Default link width
     */
    linkWidth: Readonly<Ref<number>>;
    /**
     * Default link font size
     */
    linkFontSize: Readonly<Ref<number>>;
};

export { }
