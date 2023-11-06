<template>
  <Story title="Play with options" auto-props-disabled>
    <D3NetworkGraph
      :options="options"
      :nodes="nodes"
      :links="links"
      @node-click="logEvent('node-click', $event)"
    />
    <template #controls>
      <div class="controls d3-controls">
        <label class="htw-p-2 d3-label">Nodes</label>
        <HstSlider
          v-model="options.nodes!.size"
          :min="5"
          :max="45"
          title="Node size"
        />
        <HstSlider
          v-model="options.nodes!.font!.size"
          :min="8"
          :max="20"
          title="Node label font size"
        />
        <label class="htw-p-2 d3-label">Links</label>
        <HstSlider
          v-model="options.links!.width"
          :min="1"
          :max="4"
          title="Link width"
        />
        <HstSlider
          v-model="options.links!.font!.size"
          :min="8"
          :max="20"
          title="Link label font size"
        />
        <label class="htw-p-2 d3-label">Layout</label>
        <HstCheckbox v-model="options.layout!.draggables" title="Draggables" />
        <HstCheckbox v-model="options.layout!.directed" title="Directed" />
        <HstCheckbox v-model="options.layout!.static" title="Static" />
        <HstSelect
          v-model="options.layout!.theme"
          :options="['teal', 'green', 'purple']"
          title="Theme"
        />
        <label class="htw-p-2 d3-label">Simulation</label>
        <HstSlider
          v-model="options.simulation!.force!.charge"
          :min="-1000"
          :max="-1"
          title="Charge (forceManyBody strength)"
        />
        <HstSlider
          v-model="options.simulation!.force!.collide"
          :min="1"
          :max="100"
          title="Collide (forceCollide radius)"
        />
        <HstSlider
          v-model="options.simulation!.force!.x"
          :min="0"
          :max="1"
          step="0.1"
          title="X (forceX strenght) "
        />
        <HstSlider
          v-model="options.simulation!.force!.y"
          :min="0"
          :max="1"
          step="0.1"
          title="Y (forceY strenght)"
        />
      </div>
    </template>
  </Story>
</template>

<script setup lang="ts">
import type { D3Options } from "@/types";
import { logEvent } from "histoire/client";
import { computed, reactive } from "vue";

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
