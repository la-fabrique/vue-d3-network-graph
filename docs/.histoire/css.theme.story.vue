<template>
  <Story title="Custom CSS & Custom theme" auto-props-disabled>
    <D3NetworkGraph
      :options="options"
      :nodes="nodes"
      :links="links"
      class="theme-css"
    />
  </Story>
</template>

<script setup lang="ts">
import type { D3Options } from "@/types";
import { reactive } from "vue";

const nodes = [
  { id: 1, name: "Node 1" },
  { id: 2, name: "Node 2" },
  { id: 3, name: "Node 3", class: ["green"] },
  { id: 4, name: "Node 4" },
];
const links = [
  { source: 2, target: 1, name: "Use", class: ["purple"] },
  { source: 4, target: 3, name: "See" },
  { source: 4, target: 2, name: "Confirm" },
];

const options = reactive<D3Options>({
  links: {
    width: 2,
  },
  layout: {
    draggable: true,
    theme: "custom",
  },
});
</script>
<style lang="scss">
// Be careful, order is important. The last one is the one applied.
// class must be defined after theme

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
    fill: transparent;
    &:hover {
      stroke: #b71c1c;
      fill: transparent;
    }
  }

  .link-label {
    fill: #d32f2f;
  }
}

.theme-css {
  .node.green {
    stroke: #388e3c;
    fill: #a5d6a7;

    &:hover {
      stroke: #1b5e20;
      fill: #66bb6a;
    }
  }

  .link.purple {
    stroke: #7b1fa2;
    fill: transparent;
    &:hover {
      stroke: #4a148c;
      fill: transparent;
    }
  }
}
</style>
