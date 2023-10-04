<template>
  <svg
    ref="svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMinYMin"
    :viewBox="`0 0 ${rect.width} ${rect.height}`"
    class="svg-container"
    @mouseup="dragEnd"
    @touchend.passive="dragEnd"
    @touchstart.passive="async () => {}"
    @mousemove="move"
  >
    <defs v-if="layout.directed">
      <marker v-bind="markers.arrowEnd">
        <path :fill="theme.link.stroke" d="M0 -5 L 10 0 L 0 5"></path>
      </marker>
      <marker v-bind="markers.arrowStart">
        <path :fill="theme.link.stroke" d="M 10 5 L 0 0 L 10 -5"></path>
      </marker>
    </defs>
    <g id="l-links" class="links">
      <path
        v-for="link in graph.links"
        :id="link.id"
        :key="link.id"
        :d="getLinkPath(link)"
        v-bind="getLinkAttrs(link)"
        :class="getLinkClass(link.id)"
        :style="getLinkStyle(link)"
        :marker-end="getLinkMarkerEnd(link)"
        :marker-start="getLinkMarkerStart(link)"
        @click="emit('link-click', $event, link)"
        @touchstart.passive="emit('link-click', $event, link)"
      ></path>
    </g>
    <g id="l-nodes" class="nodes">
      <template v-for="(node, index) in graph.nodes" :key="index">
        <svg
          v-if="node.innerSVG"
          :viewBox="node.innerSVG!.viewBox"
          :width="getNodeWidth(node)"
          :height="getNodeHeight(node)"
          :x="(node.x || 0) - getNodeWidth(node) / 2"
          :y="(node.y || 0) - getNodeHeight(node) / 2"
          :style="getNodeStyle(node)"
          :title="node.name"
          :class="getNodeClass(node, ['node-svg'])"
          @click="emit('node-click', $event, node)"
          @touchend.passive="emit('node-click', $event, node)"
          @mousedown.prevent="dragStart($event, index)"
          @touchstart.prevent.passive="dragStart($event, index)"
          v-html="node.innerSVG!.innerHtml"
        />
        <circle
          v-else
          :r="getNodeSize(node) / 2"
          :cx="node.x || 0"
          :cy="node.y || 0"
          :style="getNodeStyle(node)"
          :title="node.name"
          :class="getNodeClass(node)"
          @click="$emit('node-click', $event, node)"
          @touchend.passive="$emit('node-click', $event, node)"
          @mousedown.prevent="dragStart($event, index)"
          @touchstart.prevent.passive="dragStart($event, index)"
        ></circle>
        <text
          class="node-label"
          :x="(node.x || 0) + getNodeSize(node) / 2 + label.font.size / 2"
          :y="(node.y || 0) + label.offset.y"
          :font-size="label.font.size"
          :stroke-width="label.font.size / 8"
        >
          {{ node.name }}
        </text>
      </template>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { type PropType, ref, toRef } from "vue";
import type { D3Link, D3NeworkGraphEmits, D3Node, D3Options } from "./types";
import { useDraggable } from "./useDraggable";
import { useNode } from "./useNode";
import { useLink } from "./useLink";
import { useSimulation } from "./useSimulation";
import { useResizeObserver } from "@vueuse/core";
import { useOptions } from "./useOptions";

const props = defineProps({
  nodes: {
    type: Array as PropType<Array<D3Node>>,
    required: true,
  },
  links: {
    type: Array as PropType<Array<D3Link>>,
    required: true,
  },
  options: {
    type: Object as PropType<D3Options>,
    default: undefined,
  },
});

const emit = defineEmits<D3NeworkGraphEmits>();

const {
  theme,
  simulation: optionsSimulation,
  nodes: optionsNodes,
  links: optionsLinks,
  layout,
} = useOptions(toRef(() => props.options));

// svg container resize observer
const svg = ref(null);
const rect = ref({ width: 100, height: 100 });

useResizeObserver(svg, (entries) => {
  const entry = entries[0];
  if (
    entry.contentRect.width === rect.value.width &&
    entry.contentRect.height === rect.value.height
  )
    return;
  rect.value = {
    width: entry.contentRect.width,
    height: entry.contentRect.height,
  };
});

// reactive d3 simulation
const { simulation, graph } = useSimulation(
  toRef(() => props.nodes),
  toRef(() => props.links),
  rect,
  optionsSimulation
);

// draggable nodes
const { dragStart, dragEnd, move } = useDraggable(
  simulation,
  toRef(() => layout.value.draggables)
);

const {
  label,
  getSize: getNodeSize,
  getWidth: getNodeWidth,
  getClass: getNodeClass,
  getHeight: getNodeHeight,
  getStyle: getNodeStyle,
} = useNode(optionsNodes);
const {
  getPath: getLinkPath,
  getAttrs: getLinkAttrs,
  getClass: getLinkClass,
  getStyle: getLinkStyle,
  getMarkerEnd: getLinkMarkerEnd,
  getMarkerStart: getLinkMarkerStart,
  markers,
} = useLink(
  optionsLinks,
  toRef(() => optionsNodes.value.size),
  toRef(() => layout.value.directed)
);
</script>

<style lang="scss">
.svg-container {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  & > g {
    pointer-events: all;
  }
}
.node {
  stroke: v-bind("theme.node.stroke");
  fill: v-bind("theme.node.fill");
  &.selected {
    stroke: v-bind("theme.node.selected.stroke || theme.node.stroke");
    fill: v-bind("theme.node.selected.fill || theme.node.fill");
  }
  &.pinned {
    stroke: v-bind("theme.node.pinned.stroke || theme.node.stroke");
    fill: v-bind("theme.node.pinned.fill || theme.node.fill");
  }
  &:hover {
    stroke: v-bind("theme.node.hover.stroke || theme.node.stroke");
    fill: v-bind("theme.node.hover.fill || theme.node.fill");
  }
}
.link {
  stroke: v-bind("theme.link.stroke");
  fill: v-bind("theme.link.fill");
  &.selected {
    stroke: v-bind("theme.link.selected.stroke");
    fill: v-bind("theme.link.selected.fill");
  }
  &:hover {
    stroke: v-bind("theme.node.hover.stroke");
    fill: v-bind("theme.node.hover.fill");
  }
  & > text {
    fill: v-bind("theme.link.label.fill");
    transform: translate(0, -0.5em);
    text-anchor: middle;
  }
}
.node-label {
  fill: v-bind("theme.node.label.fill");
}
</style>
