import type { Ref } from "vue";
import type { SimulationLinkDatum, SimulationNodeDatum } from "d3-force";

/**
 * Represents a node size
 * @category Node types
 */
export type D3NodeSize =
  | number
  | {
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
 * Represents a node in the graph
 * @category Node types
 */
export type D3Node = {
  /**
   * Unique node id. If not provided uses array index
   */
  id: number | string;
  /**
   * Node name. If not provided uses: 'node [node_id]'
   */
  name?: string;
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
};

/**
 * Represents a link in the graph
 * @category Node types
 */
export type D3Link = {
  /**
   * Unique link id. If not provided uses array index
   */
  id?: number | string;
  /**
   * Link name. If not provided uses: 'link [link_id]'
   */
  name?: string;
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
 * Default node options
 * @category Options types
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
};

/**
 * Default link options
 * @category Options types
 */
export type D3LinkOptions = {
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

/**
 * Simulation options
 * @category Options types
 */
export type D3SimulationOptions = {
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

/**
 * Represents a CSS theme
 * @category Options types
 */
export type Theme = string | "green" | "purple" | "teal";

/**
 * Layout options
 * @category Options types
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
};

/**
 * Graph options
 * @category Options types
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
 * @category Events
 */
export type D3NeworkGraphEmits = {
  (event: "node-click", $event: TouchEvent | MouseEvent, node: D3Node): void;
  (event: "link-click", $event: TouchEvent | MouseEvent, link: D3Link): void;
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
  /**
   * Default link font size
   */
  linkFontSize: Readonly<Ref<number>>;
  /**
   * Css Theme class
   */
  themeClass: Readonly<Ref<string>>;
};

/**
 * Node used by the d3 simulation compisition function `useSimulation`
 */
export type D3NodeSimulation = SimulationNodeDatum & {
  /**
   * Node id. If not provided uses array index
   */
  id?: number | string;
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
  class?: string[];
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
 * Link used by the d3 simulation compisition function `useSimulation`
 */
export type D3LinkSimulation = SimulationLinkDatum<D3NodeSimulation> & {
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

  xT?: number;
  yT?: number;
  xS?: number;
  yS?: number;
};
