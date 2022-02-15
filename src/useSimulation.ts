import { D3Link, D3Node, D3Options } from "@/types";
import {
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  Simulation,
} from "d3-force";
import { Ref, ref } from "vue";

export function useSimulation(options: D3Options): {
  simulation: Ref<Simulation<D3Node, undefined> | undefined>;
  animate: (nodes: D3Node[], links: D3Link[]) => void;
} {
  const FORCE_X = 0.5;
  const FORCE_Y = 0.5;
  const FORCE_MANY_BODY_STRENGTH = 1000;
  const simulation = ref<Simulation<D3Node, undefined> | undefined>(undefined);

  const animate = (nodes: D3Node[], links: D3Link[]) => {
    console.log("animate");
    if (simulation.value) {
      simulation.value.stop();
    }
    simulation.value = simulate(nodes, links);
    simulation.value.restart();
  };

  const simulate = (nodes: D3Node[], links: D3Link[]) => {
    const sim = forceSimulation<D3Node, D3Link>()
      .stop()
      .alpha(0.5)
      .nodes(nodes);
    sim.force("X", forceX(options.size.width / 2).strength(FORCE_X));
    sim.force("Y", forceY(options.size.height / 2).strength(FORCE_Y));
    sim.force("charge", forceManyBody().strength(-FORCE_MANY_BODY_STRENGTH));
    sim.force(
      "link",
      forceLink<D3Node, D3Link>(links).id((d: D3Node) => {
        return d.id!;
      })
    );
    return sim;
  };

  return {
    simulation,
    animate,
  };
}
