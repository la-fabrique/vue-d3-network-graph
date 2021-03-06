import { D3Node } from "@/types";
import { Simulation } from "d3-force";
import { reactive, Ref, ref } from "vue";

export function useDraggable(
  simulation: Ref<Simulation<D3Node, undefined> | undefined>
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

  const dragStart = (event: Event, index: number) => {
    dragging.value = index;
    setMouseOffset(event, simulation.value?.nodes()[index]);
  };

  const setMouseOffset = (event?: Event, node?: D3Node) => {
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
    if (simulation.value && dragging.value !== undefined) {
      const node = simulation.value.nodes()[dragging.value];
      node.fx = null;
      node.fy = null;
    }

    dragStop();
  };

  const dragStop = () => {
    dragging.value = undefined;
    simulation.value?.alpha(0.1);
    simulation.value?.restart();
    setMouseOffset();
  };

  const move = (event: Event) => {
    const pos = clientPos(event);
    if (simulation.value && dragging.value != undefined) {
      if (simulation.value.nodes()[dragging.value]) {
        simulation.value?.restart();
        simulation.value?.alpha(0.5);
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
