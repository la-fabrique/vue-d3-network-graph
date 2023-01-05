import { D3Node } from './types';
import { Simulation } from "d3-force";
import { Ref } from "vue";
export declare function useDraggable(simulation: Ref<Simulation<D3Node, undefined> | undefined>): {
    dragStart: (event: Event, index: number) => void;
    dragEnd: () => void;
    move: (event: Event) => void;
};
