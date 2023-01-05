import { D3Link, D3LinkOptions } from './types';
export declare function useLink(options: D3LinkOptions): {
    getPath: (link: D3Link) => string | undefined;
    getAttrs: (link: D3Link) => Record<string, unknown>;
    getClass: (linkId: string | undefined) => string[];
    getStyle: (link: D3Link) => {
        stroke: string;
    } | {
        stroke?: undefined;
    };
};
