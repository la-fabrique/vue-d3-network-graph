<template>
  <Story title="C4. Container" auto-props-disabled>
    <span class="title-grey">[Container] Internet Banking System</span>
    <D3NetworkGraph
      :options="options"
      :nodes="nodes"
      :links="links"
      class="c4-container"
    />
  </Story>
</template>
<script setup lang="ts">
import type { D3Link, D3Node, D3Options } from "@/types";
import { reactive } from "vue";
import { isDark } from "histoire/client";

const svgApp = {
  innerHtml: `<path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 7H3V4H21V7Z" />`,
  viewBox: "0 0 24 24",
};
const svgPersonne = {
  innerHtml: `<path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />`,
  viewBox: "0 0 24 24",
};

const svgContainer = {
  innerHtml: `<path d="M4,6V19H20V6H4Z" />`,
  viewBox: "0 0 24 24",
};

const nodes: D3Node[] = [
  {
    id: 1,
    labels: ["Personal Banking", "Customer"],
    class: ["blue"],
    innerSVG: svgPersonne,
    position: { x: 320 },
  },
  {
    id: 2,
    labels: ["Web application"],
    class: ["blue"],
    innerSVG: svgContainer,
    position: { y: 320 },
  },
  {
    id: 3,
    labels: ["Single Page Application"],
    class: ["blue"],
    innerSVG: svgContainer,
  },
  {
    id: 4,
    labels: ["Mobile Application"],
    class: ["blue"],
    innerSVG: svgContainer,
    position: { y: 300 },
  },
  {
    id: 5,
    name: "Email System",
    class: ["grey"],
    innerSVG: svgApp,
    position: { x: 550 },
  },
  {
    id: 6,
    name: "Mainframe Banking System",
    class: ["grey"],
    innerSVG: svgApp,
    position: { y: 550 },
  },
  {
    id: 7,
    labels: ["API Application"],
    class: ["blue"],
    innerSVG: svgContainer,
    position: { y: 600, x: 320 },
  },
];
const links: D3Link[] = [
  {
    source: 1,
    target: 2,
    labels: ["Visite bigbank.com/lib", "using"],
  },
  {
    source: 1,
    target: 3,
    labels: ["Views account balances,", "and make payments using"],
  },
  {
    source: 1,
    target: 4,
    labels: ["Views account balances,", "and make payments using"],
  },
  {
    source: 2,
    target: 3,
    labels: ["Delivers to the customer's web browser"],
  },
  {
    source: 5,
    target: 1,
    labels: ["Send e-mail to"],
  },
  {
    source: 3,
    target: 7,
    labels: ["Make API calls to"],
  },
  {
    source: 4,
    target: 7,
    labels: ["Make API calls to"],
  },
  { source: 7, target: 5, labels: ["Send e-mail", "using"] },
  {
    source: 7,
    target: 6,
    labels: ["Make API calls to"],
  },
];

const options = reactive<D3Options>({
  nodes: {
    size: 45,
  },
  layout: {
    draggable: true,
    directed: true,
    theme: "grey",
    dark: isDark(),
  },
  simulation: {
    force: {
      collide: 110,
      charge: 0,
      x: 0.1,
      y: 0.1,
    },
  },
});
</script>
<style lang="scss">
.c4-container {
  .node.blue {
    stroke: transparent;
    fill: #0d47a1;
    &:hover {
      stroke: transparent;
      fill: #1565c0;
    }
  }
  .node.grey {
    stroke: transparent;
    fill: #bdbdbd;
    &:hover {
      stroke: transparent;
      fill: #e0e0e0;
    }
  }
  .link {
    stroke-dasharray: 10 10;
  }
}
</style>
