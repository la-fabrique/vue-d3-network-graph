import { D3Link, D3Node, D3SimulationOptions } from "@/types";
import {
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  Simulation,
} from "d3-force";
import { Ref, ref } from "vue";

const DEFAULT_FORCE_X = 0.5;
const DEFAULT_FORCE_Y = 0.5;
const DEFAULT_FORCE_MANY_BODY_STRENGTH = -1000;

export function useSimulation(options?: D3SimulationOptions): {
  simulation: Ref<Simulation<D3Node, undefined> | undefined>;
  animate: (
    rect: { width: number; height: number },
    nodes: D3Node[],
    links: D3Link[]
  ) => void;
} {
  const fX = options?.force.x || DEFAULT_FORCE_X;
  const fY = options?.force.y || DEFAULT_FORCE_Y;
  const forceManyBodyStrength =
    options?.charge || DEFAULT_FORCE_MANY_BODY_STRENGTH;

  const simulation = ref<Simulation<D3Node, undefined> | undefined>(undefined);

  const animate = (
    rect: { width: number; height: number },
    nodes: D3Node[],
    links: D3Link[]
  ) => {
    console.debug("animate", rect);

    if (simulation.value) {
      simulation.value.stop();
    }
    simulation.value = simulate(rect, nodes, links);
    simulation.value.restart();
  };

  const simulate = (
    rect: { width: number; height: number },
    nodes: D3Node[],
    links: D3Link[]
  ) => {
    const sim = forceSimulation<D3Node, D3Link>()
      .stop()
      .alpha(0.5)
      .nodes(nodes);
    sim.force("X", forceX(rect.width / 2).strength(fX));
    sim.force("Y", forceY(rect.height / 2).strength(fY));
    sim.force("charge", forceManyBody().strength(forceManyBodyStrength));
    sim.force(
      "link",
      forceLink(links).id((d: D3Node) => {
        if (!d.id) {
          throw new Error("Node id is undefined");
        }
        return d.id;
      })
    );
    return sim;
  };

  return {
    simulation,
    animate,
  };
}
