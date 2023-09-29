import { D3Link, D3Node, D3SimulationOptions } from "@/types";
import {
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  Simulation,
} from "d3-force";
import { MaybeRef, Ref, ref, toValue, watch } from "vue";

export const DEFAULT_FORCE_X = 0.5;
export const DEFAULT_FORCE_Y = 0.5;
export const DEFAULT_FORCE_MANY_BODY_STRENGTH = -1000;
const FORCE_X_NAME = "X";
const FORCE_Y_NAME = "Y";
const FORCE_CHARGE_NAME = "charge";
const FORCE_LINK_NAME = "link";

export function useSimulation(
  nodes: MaybeRef<D3Node[]>,
  links: MaybeRef<D3Link[]>,
  rect: MaybeRef<{ width: number; height: number }>,
  options?: MaybeRef<D3SimulationOptions | undefined>
): {
  simulation: Ref<Simulation<D3Node, undefined>>;
  animate: () => void;
} {
  const fX = () => toValue(options)?.force.x || DEFAULT_FORCE_X;
  const fY = () => toValue(options)?.force.y || DEFAULT_FORCE_Y;
  const forceManyBodyStrength = () =>
    toValue(options)?.charge || DEFAULT_FORCE_MANY_BODY_STRENGTH;
  const getNodes = () => [...toValue(nodes)] || [];
  const getLinks = () => [...toValue(links)] || [];
  const getRect = () => toValue(rect) || { width: 0, height: 0 };

  const animate = () => {
    simulation.value.stop();
    simulation.value = simulate();
    simulation.value.restart();
  };

  const simulate = () => {
    const sim = forceSimulation<D3Node, D3Link>()
      .stop()
      .alpha(0.5)
      .nodes(getNodes());
    sim.force(FORCE_X_NAME, forceX(getRect().width / 2).strength(fX()));
    sim.force(FORCE_Y_NAME, forceY(getRect().height / 2).strength(fY()));
    sim.force(
      FORCE_CHARGE_NAME,
      forceManyBody().strength(forceManyBodyStrength())
    );
    sim.force(
      FORCE_LINK_NAME,
      forceLink(getLinks()).id((d: D3Node) => {
        if (!d.id) {
          throw new Error("Node id is undefined");
        }
        return d.id;
      })
    );

    return sim;
  };

  const simulation = ref<Simulation<D3Node, undefined>>(simulate());

  watch(
    [() => toValue(nodes).length, () => toValue(links).length, rect],
    () => {
      animate();
    }
  );

  return {
    simulation,
    animate,
  };
}
