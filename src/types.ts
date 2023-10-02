import { SimulationLinkDatum, SimulationNodeDatum } from "d3-force";

/**
 * Represents a node in the graph
 */
export interface D3Node extends SimulationNodeDatum {
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
 * Represents a link in the graph
 */
export interface D3Link extends SimulationLinkDatum<D3Node> {
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
}

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
   * @remarks
   * Use this option if you want to use the simulation to calculate the positions of the nodes but you don't want to render them each 'tick'
   */
  static?: boolean;
  /**
   * d3 force configurations
   */
  force: {
    /**
     * d3 forceX strenght configuration
     * */
    x: number;
    /**
     * d3 forceY strenght configuration
     */
    y: number;
    /**
     * d3 forceManyBody strenght configuration
     */
    charge: number;
  };
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
   * Indicates if the nodes should be draggable
   * */
  draggables?: boolean;
};

/**
 * Event exposed by the D3NetworkGraph component
 */
export type D3NeworkGraphEmits = {
  (event: "node-click", $event: TouchEvent | MouseEvent, node: D3Node): void;
  (event: "link-click", $event: TouchEvent | MouseEvent, link: D3Link): void;
};
