import { D3Link, D3Node, D3SimulationOptions } from "@/types";
import { watchDebounced } from "@vueuse/core";
import {
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  Simulation,
} from "d3-force";
import { ComputedRef, Ref, ref, toValue } from "vue";

const FORCE_X_NAME = "X";
const FORCE_Y_NAME = "Y";
const FORCE_CHARGE_NAME = "charge";
const FORCE_LINK_NAME = "link";
const ALPHA_MIN = 0.01;
const ALPHA_DECAY = 0.1;
const TICK_NUMBER = Math.log(ALPHA_MIN) / Math.log(1 - ALPHA_DECAY);

export function useSimulation(
  nodes: Readonly<Ref<D3Node[]>>,
  links: Readonly<Ref<D3Link[]>>,
  rect: Readonly<Ref<{ width: number; height: number }>>,
  options: ComputedRef<D3SimulationOptions>
): {
  simulation: Ref<Simulation<D3Node, D3Link>>;
  animate: () => void;
} {
  const animate = async () => {
    simulation.value.stop();
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
      .nodes(nodes.value);
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
      forceManyBody().strength(options.value.charge)
    );
    sim.force(
      FORCE_LINK_NAME,
      forceLink(links.value).id((d: D3Node) => {
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
    [() => toValue(nodes).length, () => toValue(links).length, rect],
    async () => animate(),
    { debounce: 100, maxWait: 1000 }
  );

  watchDebounced(
    () => options.value,
    async () => animate(),
    { deep: true, debounce: 100, maxWait: 1000 }
  );

  return {
    simulation,
    animate,
  };
}
