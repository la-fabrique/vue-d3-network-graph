<template>
  <Story title="Custom theme" auto-props-disabled>
    <D3NetworkGraph :options="options" :nodes="nodes" :links="links" />
  </Story>
</template>

<script setup lang="ts">
import type { D3Options } from "@/types";
import { reactive } from "vue";

const nodes = [
  { id: 1, name: "my awesome node 1" },
  { id: 2, name: "my node 2" },
  { id: 3, name: "An other node" },
  { id: 4, name: "Last node" },
];
const links = [
  { source: 2, target: 1, name: "Use" },
  { source: 4, target: 3, name: "See" },
  { source: 4, target: 2, name: "Confirm" },
];

const options = reactive<D3Options>({
  layout: {
    draggable: true,
    directed: true,
    theme: "custom",
  },
});
</script>
<style lang="scss">
.theme-custom {
  .node-group {
    stroke: #d32f2f;
    fill: transparent;
    overflow: visible;

    &:hover {
      stroke: #b71c1c;
      fill: transparent;
    }
  }

  .node {
    stroke: #d32f2f;
    fill: #ef9a9a;

    &:hover {
      stroke: #b71c1c;
      fill: #ef5350;
    }
  }

  .node-label {
    fill: #b71c1c;
  }

  .link {
    stroke: #d32f2f;
    fill: #d32f2f;
    &:hover {
      stroke: #b71c1c;
      fill: #b71c1c;
    }
  }

  .link-label {
    fill: #d32f2f;
  }
}
</style>
