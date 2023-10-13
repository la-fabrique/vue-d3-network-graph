import type { D3NodeSimulation } from "./types";

export const isNode = (node: unknown): node is D3NodeSimulation =>
  Boolean(node) && typeof node !== "number" && typeof node !== "string";
