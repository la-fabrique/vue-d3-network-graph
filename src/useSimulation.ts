import type {
  D3Link,
  D3Node,
  useSimulationOptions,
  D3LinkSimulation,
  D3NodeSimulation,
} from "./types";
import { watchDebounced } from "@vueuse/core";
import {
  forceLink,
  forceManyBody,
  forceSimulation,
  forceCollide,
  forceX,
  forceY,
  type Simulation,
} from "d3-force";
import { type Ref, reactive, ref } from "vue";
import { useNode } from "./useNode";
import { useLink } from "./useLink";

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
  options: useSimulationOptions
): {
  /** The graph  */
  graph: { nodes: D3NodeSimulation[]; links: D3LinkSimulation[] };
  /** The d3 simulation */
  simulation: Ref<Simulation<D3NodeSimulation, D3LinkSimulation>>;
} {
  const { getNode } = useNode(options.nodeSize);
  const { getSimulationLink } = useLink(
    options.linkWidth,
    options.nodeSize,
    options.directed
  );

  const graph = reactive<{
    nodes: D3NodeSimulation[];
    links: D3LinkSimulation[];
  }>({
    nodes: [],
    links: [],
  });

  const init = () => {
    graph.nodes = nodes.value.map((n) => getNode(n));
    graph.links = links.value.map((l) => getSimulationLink(l));
    refresh();
  };

  const refresh = async () => {
    simulation.value.stop();
    simulation.value = simulate();
    if (options.static.value) {
      simulation.value.tick(TICK_NUMBER);
    } else {
      simulation.value.restart();
    }
  };

  const simulate = () => {
    const sim = forceSimulation<D3NodeSimulation, D3LinkSimulation>()
      .alphaMin(ALPHA_MIN)
      .alphaDecay(ALPHA_DECAY)
      .nodes(graph.nodes);
    sim.force(
      FORCE_X_NAME,
      forceX(rect.value.width / 2).strength(options.forceXStrength.value)
    );
    sim.force(
      FORCE_Y_NAME,
      forceY(rect.value.height / 2).strength(options.forceYStrength.value)
    );
    sim.force(
      FORCE_CHARGE_NAME,
      forceManyBody().strength(options.forcManyBodyStrength.value)
    );
    sim.force(
      FORCE_COLLIDE_NAME,
      forceCollide(options.forceCollideStrength.value)
    );
    sim.force(
      FORCE_LINK_NAME,
      forceLink(graph.links).id((d: D3NodeSimulation) => {
        if (!("id" in d)) {
          throw new Error("Node id is undefined");
        }
        return d.id!;
      })
    );

    return sim;
  };

  const simulation = ref<Simulation<D3NodeSimulation, D3LinkSimulation>>(
    forceSimulation<D3NodeSimulation, D3LinkSimulation>()
  );

  watchDebounced(
    [
      () => nodes.value.length,
      () => links.value.length,
      rect,
      options.nodeSize,
      options.linkWidth,
      options.forcManyBodyStrength,
      options.forceXStrength,
      options.forceYStrength,
      options.forceCollideStrength,
      options.directed,
    ],
    async () => init(),
    { debounce: 100, maxWait: 1000 }
  );

  watchDebounced(options.static, async () => refresh(), {
    deep: true,
    debounce: 100,
    maxWait: 1000,
  });

  return {
    simulation,
    graph,
  };
}
