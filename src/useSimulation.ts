import { D3Link, D3Node, D3SimulationOptions } from "./types";
import { watchDebounced } from "@vueuse/core";
import {
  forceLink,
  forceManyBody,
  forceSimulation,
  forceCollide,
  forceX,
  forceY,
  Simulation,
} from "d3-force";
import { ComputedRef, Ref, reactive, ref, toRaw } from "vue";

const FORCE_X_NAME = "X";
const FORCE_Y_NAME = "Y";
const FORCE_CHARGE_NAME = "charge";
const FORCE_LINK_NAME = "link";
const FORCE_COLLIDE_NAME = "collide";
const ALPHA_MIN = 0.01;
const ALPHA_DECAY = 0.1;
const TICK_NUMBER = Math.log(ALPHA_MIN) / Math.log(1 - ALPHA_DECAY);

/**
 * Composition function used by the D3NetworkGraph component to create a d3 simulation
 * @remarks
 * This function can be used to create a d3 simulation for a network graph without components
 */
export function useSimulation(
  /** The nodes of the graph */
  nodes: Readonly<Ref<D3Node[]>>,
  /** The links of the graph */
  links: Readonly<Ref<D3Link[]>>,
  /** The size of the graph */
  rect: Readonly<Ref<{ width: number; height: number }>>,
  /** The options of the simulation */
  options: ComputedRef<D3SimulationOptions>
): {
  /** The graph  */
  graph: { nodes: D3Node[]; links: D3Link[] };
  /** The d3 simulation */
  simulation: Ref<Simulation<D3Node, D3Link>>;
  /**
   * Refresh the simulation
   */
  refresh: () => void;
} {
  const graph = reactive<{ nodes: D3Node[]; links: D3Link[] }>({
    nodes: [],
    links: [],
  });

  const refresh = async () => {
    simulation.value.stop();
    graph.nodes = nodes.value.map((n) => toRaw(n));
    graph.links = links.value.map((l) => toRaw(l));
    simulation.value = simulate();
    if (options.value.static) {
      simulation.value.tick(TICK_NUMBER);
    } else {
      simulation.value.restart();
    }
  };

  const simulate = () => {
    const sim = forceSimulation<D3Node, D3Link>()
      .stop()
      .alphaMin(ALPHA_MIN)
      .alphaDecay(ALPHA_DECAY)
      .nodes(graph.nodes);
    sim.force(
      FORCE_X_NAME,
      forceX(rect.value.width / 2).strength(options.value.force.x)
    );
    sim.force(
      FORCE_Y_NAME,
      forceY(rect.value.height / 2).strength(options.value.force.y)
    );
    sim.force(
      FORCE_CHARGE_NAME,
      forceManyBody().strength(options.value.force.charge)
    );
    sim.force(FORCE_COLLIDE_NAME, forceCollide(options.value.force.collide));
    sim.force(
      FORCE_LINK_NAME,
      forceLink(graph.links).id((d: D3Node) => {
        if (!("id" in d)) {
          throw new Error("Node id is undefined");
        }
        return d.id!;
      })
    );

    return sim;
  };

  const simulation = ref<Simulation<D3Node, D3Link>>(simulate());

  watchDebounced(
    [() => nodes.value.length, () => links.value.length, rect],
    async () => refresh(),
    { debounce: 100, maxWait: 1000 }
  );

  watchDebounced(
    () => options.value,
    async () => refresh(),
    { deep: true, debounce: 100, maxWait: 1000 }
  );

  return {
    simulation,
    refresh,
    graph,
  };
}
