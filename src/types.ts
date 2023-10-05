import type { Ref } from "vue";
import type { SimulationLinkDatum, SimulationNodeDatum } from "d3-force";

/**
 * Represents a node in the graph
 */
export type D3Node = {
  /**
   * Node id. If not provided uses array index
   */
  id?: string;
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
};

/**
 * Represents a link in the graph
 */
export type D3Link = {
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

  source?: string;

  target?: string;
};

/**
 * Defaut node colors
 */
export type D3NodeOptionsColors = {
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
 * Default node options
 */
export type D3NodeOptions = {
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
 * Default link colors
 */
export type D3LinkOptionsColors = {
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
 * Default link options
 */
export type D3LinkOptions = {
  /**
   * Default link width
   * @defaultValue `2`
   */
  width: number;
  /**
   * Default link colors
   */
  colors?: D3LinkOptionsColors;
};

/**
 * Simulation options
 */
export type D3SimulationOptions = {
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
 * Layout options
 */
export type D3LayoutOptions = {
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
 * Graph options
 */
export type D3Options = {
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
 * Event exposed by the D3NetworkGraph component
 */
export type D3NeworkGraphEmits = {
  (
    event: "node-click",
    $event: TouchEvent | MouseEvent,
    node: D3NodeSimulation
  ): void;
  (
    event: "link-click",
    $event: TouchEvent | MouseEvent,
    link: D3LinkSimulation
  ): void;
};

/**
 * Options used by the useSimulation composition function
 */
export type useSimulationOptions = {
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
};

export type D3NodeSimulation = SimulationNodeDatum & {
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

  style?: string;

  r?: number;
};

export type D3LinkSimulation = SimulationLinkDatum<D3NodeSimulation> & {
  id?: string;
  key?: number;
  d?: string;
  class?: string[];
  style?: string;
  name?: string;
  "stroke-width"?: number;
  "marker-end"?: string;
  "marker-start"?: string;
};
