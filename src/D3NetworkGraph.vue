<template>
  <svg
    ref="svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMinYMin"
    :viewBox="`0 0 ${rect.width} ${rect.height}`"
    style="
      display: block;
      fill: none;
      stroke: none;
      width: 100%;
      overflow: hidden;
    "
    @mouseup="dragEnd"
    @touchend.passive="dragEnd"
    @touchstart.passive="() => {}"
    @mousemove="move"
  >
    <g id="l-links" class="links">
      <path
        v-for="link in links"
        :id="link.id"
        :key="link.id"
        :d="getLinkPath(link)"
        v-bind="getLinkAttrs(link)"
        :class="getLinkClass(link.id)"
        :style="getLinkStyle(link)"
        @click="emit('link-click', $event, link)"
        @touchstart.passive="emit('link-click', $event, link)"
      ></path>
    </g>
    <g id="l-nodes" class="nodes">
      <template v-for="(node, index) in nodes" :key="index">
        <svg
          v-if="node.innerSVG"
          :viewBox="node.innerSVG.viewBox"
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
          @touchstart.prevent="dragStart($event, index)"
          v-html="node.innerSVG.innerHtml"
        ></svg>
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
          @touchstart.prevent="dragStart($event, index)"
        ></circle>
      </template>
    </g>
    <g id="node-labels" class="labels">
      <text
        v-for="node in nodes"
        :key="node.id"
        class="node-label"
        :x="(node.x || 0) + getNodeSize(node) / 2 + label.font.size / 2"
        :y="(node.y || 0) + label.offset.y"
        :font-size="label.font.size"
        :stroke-width="label.font.size / 8"
      >
        {{ node.name }}
      </text>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { PropType, reactive, ref } from "vue";
import type { D3Link, D3Node, D3Options } from "@/types";
import { useDraggable } from "@/useDraggable";
import { useNode } from "@/useNode";
import { useLink } from "@/useLink";
import { useSimulation } from "@/useSimulation";
import { useResizeObserver } from "@vueuse/core";
import { useCss } from "@/useCss";

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

const emit = defineEmits(["node-click", "link-click"]);

const { css } = useCss(props.options?.nodes, props.options?.links);

// svg container resize observer
const svg = ref(null);
const rect = reactive({ width: 100, height: 100 });
useResizeObserver(svg, (entries) => {
  const entry = entries[0];
  rect.width = entry.contentRect.width;
  rect.height = entry.contentRect.height;
});

// reactive d3 simulation
const { simulation } = useSimulation(
  props.nodes,
  props.links,
  rect,
  props.options?.simulation
);

// draggable nodes
const { dragStart, dragEnd, move } = useDraggable(
  simulation,
  props.options?.draggables
);

const {
  label,
  getSize: getNodeSize,
  getWidth: getNodeWidth,
  getClass: getNodeClass,
  getHeight: getNodeHeight,
  getStyle: getNodeStyle,
} = useNode(props.options?.nodes);
const {
  getPath: getLinkPath,
  getAttrs: getLinkAttrs,
  getClass: getLinkClass,
  getStyle: getLinkStyle,
} = useLink(props.options?.links);
</script>

<style lang="scss">
.node {
  stroke: v-bind("css.node.stroke");
  fill: v-bind("css.node.fill");
  &.selected {
    stroke: v-bind("css.node.selected.stroke || css.node.stroke");
    fill: v-bind("css.node.selected.fill || css.node.fill");
  }
  &.pinned {
    stroke: v-bind("css.node.pinned.stroke || css.node.stroke");
    fill: v-bind("css.node.pinned.fill || css.node.fill");
  }
  &:hover {
    stroke: v-bind("css.node.hover.stroke || css.node.stroke");
    fill: v-bind("css.node.hover.fill || css.node.fill");
  }
}
.link {
  stroke: v-bind("css.link.stroke");
  fill: v-bind("css.link.fill");
  &.selected {
    stroke: v-bind("css.link.selected.stroke");
    fill: v-bind("css.link.selected.fill");
  }
  &:hover {
    stroke: v-bind("css.node.hover.stroke");
    fill: v-bind("css.node.hover.fill");
  }
  & > text {
    fill: v-bind("css.link.label.fill");
    transform: translate(0, -0.5em);
    text-anchor: middle;
  }
}
.labels {
  & > text {
    fill: v-bind("css.node.label.fill");
  }
}
</style>
