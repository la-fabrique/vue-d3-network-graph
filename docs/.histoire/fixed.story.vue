<template>
  <Story title="Fixed nodes" auto-props-disabled>
    <D3NetworkGraph :options="options" :nodes="nodes" :links="links" />
  </Story>
</template>

<script setup lang="ts">
import type { D3Options } from "@/types";
import { watch } from "vue";
import { isDark } from "histoire/client";
import { computed, reactive } from "vue";

const nodes = [
  { id: 1, labels: ["Node 1"] },
  { id: 2, labels: ["Node 2", "fixed"], position: { x: 50, y: 50 } },
  { id: 3, labels: ["Node 3"] },
  { id: 4, labels: ["Node 4", "fixed"], position: { x: 300, y: 50 } },
];
const links = [
  { source: 2, target: 1 },
  { source: 4, target: 3 },
  { source: 4, target: 2 },
];

const options = reactive<D3Options>({
  nodes: {
    size: 25,
    font: {
      size: 12,
    },
  },
  links: {
    width: 1,
    font: {
      size: 12,
    },
  },
  layout: {
    draggables: true,
    directed: true,
    static: false,
    dark: isDark(),
  },
  simulation: {
    force: {
      charge: -300,
      collide: 45,
      x: 0.1,
      y: 0.1,
    },
  },
});
</script>
<style></style>
