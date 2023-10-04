import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { Simulation } from 'd3-force';
import { SimulationLinkDatum } from 'd3-force';
import { SimulationNodeDatum } from 'd3-force';
import { VNodeProps } from 'vue';

/**
 * Layout options
 */
export declare type D3LayoutOptions = {
    /**
     * Indicates if the nodes should be draggable
     * */
    draggables?: boolean;
    /**
     * Indicate if the graph is directed. Edge arrow will be displayed
     */
    directed?: boolean;
};

/**
 * Represents a link in the graph
 */
export declare interface D3Link extends SimulationLinkDatum<D3Node> {
    /**
     * Link id. If not provided uses array index
     */
    id?: string;
    /**
     * Link name. If not provided uses: 'link [link_id]'
     */
    name?: string;
    /**
     * Link color (stroke), e.g. red, #aa00bb,
     */
    color?: string;
    /**
     * Is  two-way link (bidirectional)
     */
    twoWay?: boolean;
}

/**
 * Default link options
 */
export declare type D3LinkOptions = {
    /**
     * Default link width
     */
    width: number;
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
export declare interface D3Node extends SimulationNodeDatum {
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
    group?: number;
}

/**
 * Default node options
 */
export declare type D3NodeOptions = {
    /** Default node size */
    size?: number;
    font?: {
        /** Default node size */
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
     * @remarks
     * Use this option if you want to use the simulation to calculate the positions of the nodes but you don't want to render them each 'tick'
     */
    static?: boolean;
    /**
     * d3 force configurations
     */
    force: {
        /**
         * d3 forceX strenght
         * */
        x: number;
        /**
         * d3 forceY strenght
         */
        y: number;
        /**
         * d3 forceManyBody strenght
         */
        charge: number;
        /**
         * d3 forceCollide radius
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
options: ComputedRef<D3SimulationOptions>): {
    /** The graph  */
    graph: {
        nodes: D3Node[];
        links: D3Link[];
    };
    /** The d3 simulation */
    simulation: Ref<Simulation<D3Node, D3Link>>;
    /**
     * Refresh the simulation
     */
    refresh: () => void;
};

export { }
