import { D3Node, D3NodeOptions } from './types';
import { Ref } from "vue";
export declare function useNode(options: D3NodeOptions): {
    getSize: (node: D3Node) => number;
    getWidth: (node: D3Node) => number;
    getHeight: (node: D3Node) => number;
    getStyle: (node: D3Node) => string;
    getClass: (node: D3Node, classes?: string[]) => string[];
    labelOffset: Ref<{
        x: number;
        y: number;
    }>;
};
