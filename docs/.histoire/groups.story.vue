<template>
  <Story title="Node groups" auto-props-disabled>
    <D3NetworkGraph
      :options="options"
      :nodes="nodes"
      :links="links"
      @node-click="logEvent('node-click', $event)"
    />
  </Story>
</template>

<script setup lang="ts">
import type { D3Link, D3Node, D3Options } from "@/types";
import { logEvent } from "histoire/client";
import { reactive, ref } from "vue";

const nodes = ref<D3Node[]>([
  { id: 1, name: "Node 1", group: 1 },
  { id: 2, name: "Node 2", group: 1 },
  { id: 3, name: "Node 3", group: 2 },
  { id: 4, name: "Node 4" },
  { id: 5, name: "Node 5", group: 2 },
]);
const links = ref<D3Link[]>([
  { source: 2, target: 1, name: "Use" },
  { source: 4, target: 3, name: "Use" },
  { source: 4, target: 2, name: "Use" },
  { source: 5, target: 4, name: "Use" },
]);

const options = reactive<D3Options>({
  layout: {
    draggable: true,
    directed: true,
  },
  simulation: {
    force: {
      collide: 70,
    },
  },
});
</script>
