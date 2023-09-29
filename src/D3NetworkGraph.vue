<template>
  <div class="svg-container">
    <svg
      ref="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMinYMin"
      :viewBox="`0 0 ${rect.width} ${rect.height}`"
      class="svg-content-responsive"
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
      <g v-if="label.exists" id="node-labels" class="labels">
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
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, reactive, ref } from "vue";
import type { D3Link, D3Node, D3Options } from "@/types";
import { useDraggable } from "@/useDraggable";
import { useNode } from "@/useNode";
import { useLink } from "@/useLink";
import { useSimulation } from "@/useSimulation";
import { useResizeObserver, watchDebounced } from "@vueuse/core";

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
const rect = reactive({ width: 100, height: 100 });
const svg = ref(null);

useResizeObserver(svg, (entries) => {
  const entry = entries[0];
  rect.width = entry.contentRect.width;
  rect.height = entry.contentRect.height;
});
const { animate, simulation } = useSimulation(props.options?.simulation);
const { dragStart, dragEnd, move } = useDraggable(simulation);
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

onMounted(() => animate(rect, props.nodes, props.links));

watchDebounced(
  [() => props.nodes.length, () => props.links.length, rect],
  () => animate(rect, props.nodes, props.links),
  { debounce: 100, maxWait: 500 }
);
</script>

<style lang="scss">
.node {
  stroke: rgba(18, 120, 98, 0.7);
  stroke-width: 1px;
  transition: fill 0.5s ease;
  fill: #dcfaf3;
  &.selected {
    stroke: #caa455;
  }
  &.pinned {
    stroke: rgba(190, 56, 93, 0.6);
  }
}
.link {
  stroke: rgba(18, 120, 98, 0.3);
  &.selected {
    stroke: rgba(202, 164, 85, 0.6);
  }
}
.node,
.link {
  stroke-linecap: round;
}
.node:hover,
.link:hover {
  stroke: #be385d;
  stroke-width: 2px;
}
.node-label {
  fill: #127862;
}
.link-label {
  fill: #127862;
  transform: translate(0, -0.5em);
  text-anchor: middle;
}
.svg-container {
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* aspect ratio */
  vertical-align: top;
  overflow: hidden;
}

.svg-content-responsive {
  /*  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0; */
  display: block;
  fill: none;
  stroke: none;
  width: 100%;
  height: 100%;
  overflow: visible;
  background: #eee;
}
</style>
