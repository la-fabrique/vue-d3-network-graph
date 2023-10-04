import type { Simulation } from "d3-force";
import { reactive, type Ref, ref } from "vue";
import type { D3LinkSimulation, D3NodeSimulation } from "./types";

export function useDraggable(
  simulation: Ref<Simulation<D3NodeSimulation, D3LinkSimulation>>,
  draggables: Readonly<Ref<boolean>>
): {
  dragStart: (event: Event, index: number) => void;
  dragEnd: () => void;
  move: (event: Event) => void;
} {
  const dragging = ref<number | undefined>(undefined);
  const mouseOfst = reactive({
    x: 0,
    y: 0,
  });

  const clientPos = (event: Event) => {
    let x,
      y = 0;
    if (event instanceof MouseEvent) {
      x = event.clientX;
      y = event.clientY;
    } else if (event instanceof TouchEvent) {
      x = event.touches[0].clientX;
      y = event.touches[0].clientY;
    }
    return { x: x || 0, y: y || 0 };
  };

  const dragStart = (event: Event, index: number) =>
    draggables.value
      ? (() => {
          dragging.value = index;
          setMouseOffset(event, simulation.value.nodes()[index]);
        })()
      : undefined;

  const setMouseOffset = (event?: Event, node?: D3NodeSimulation) => {
    let x = 0;
    let y = 0;
    if (event && node && node?.x && node?.y) {
      const pos = clientPos(event);
      x = pos.x ? pos.x - node.x : node.x;
      y = pos.y ? pos.y - node.y : node.y;
    }
    mouseOfst.x = x;
    mouseOfst.y = y;
  };

  const dragEnd = () => {
    if (dragging.value !== undefined) {
      const node = simulation.value.nodes()[dragging.value];
      node.fx = null;
      node.fy = null;
      dragStop();
    }
  };

  const dragStop = () => {
    dragging.value = undefined;
    simulation.value.alpha(0.1);
    simulation.value.restart();
    setMouseOffset();
  };

  const move = (event: Event) => {
    const pos = clientPos(event);
    if (dragging.value != undefined) {
      if (simulation.value.nodes()[dragging.value]) {
        simulation.value.restart();
        simulation.value.alpha(0.5);
        simulation.value.nodes()[dragging.value].fx = pos.x - mouseOfst.x;
        simulation.value.nodes()[dragging.value].fy = pos.y - mouseOfst.y;
      }
    }
  };

  return {
    dragStart,
    dragEnd,
    move,
  };
}
