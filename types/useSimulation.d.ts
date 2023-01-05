import { D3Link, D3Node, D3Options } from './types';
import { Simulation } from "d3-force";
import { Ref } from "vue";
export declare function useSimulation(options: D3Options): {
    simulation: Ref<Simulation<D3Node, undefined> | undefined>;
    animate: (nodes: D3Node[], links: D3Link[]) => void;
};
