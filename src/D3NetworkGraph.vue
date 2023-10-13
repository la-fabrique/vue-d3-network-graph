<template>
  <svg
    ref="svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMinYMin"
    :viewBox="`0 0 ${rect.width} ${rect.height}`"
    class="svg-container"
    @mousedown.self.prevent="onMouseDown"
    @mouseup="onMouseUp"
    @touchend.passive="onTouchEnd"
    @touchstart.passive="async () => {}"
    @mousemove="onMouseMove"
    @wheel.prevent="onWheel"
  >
    <defs v-if="options.directed">
      <marker v-bind="markers.arrowEnd">
        <path :fill="theme.link.stroke" d="M0 -5 L 10 0 L 0 5"></path>
      </marker>
      <marker v-bind="markers.arrowStart">
        <path :fill="theme.link.stroke" d="M 10 5 L 0 0 L 10 -5"></path>
      </marker>
    </defs>
    <g ref="canvas" class="svg-canvas" :transform="transform">
      <g class="links">
        <template v-for="(link, index) in graph.links" :key="index">
          <path
            :id="`${index}`"
            :d="getPath(link)"
            :stroke-width="link['stroke-width']"
            :class="link.class"
            :style="link.style"
            :marker-end="link['marker-end']"
            :marker-start="link['marker-start']"
            @click="onLinkClick($event, link, index)"
            @touchstart.passive="onLinkClick($event, link, index)"
          />
          <text
            class="link-label"
            :font-size="linkLabel.font.size"
            :x="getLinkLabelX(link)"
            :y="getLinkLabelY(link)"
          >
            {{ link.name }}
          </text>
        </template>
      </g>

      <g id="l-nodes" class="nodes">
        <template v-for="(node, index) in graph.nodes" :key="index">
          <svg
            v-if="node.innerSVG"
            :viewBox="node.innerSVG.viewBox"
            :width="node.width"
            :height="node.height"
            :x="(node.x || 0) - (node.width || 0) / 2"
            :y="(node.y || 0) - (node.height || 0) / 2"
            :style="node.style"
            :title="node.name"
            :class="node.cssClass"
            @click="onNodeClick($event, node, index)"
            @touchend.passive="onNodeClick($event, node, index)"
            @mousedown.prevent="onNodeMousedown($event, index)"
            @touchstart.prevent.passive="onNodeMousedown($event, index)"
            v-html="node.innerSVG!.innerHtml"
          />
          <circle
            v-else
            :cx="node.x"
            :cy="node.y"
            :r="node.r"
            :style="node.style"
            :title="node.name"
            :class="node.cssClass"
            @click="onNodeClick($event, node, index)"
            @touchend.passive="onNodeClick($event, node, index)"
            @mousedown.prevent="onNodeMousedown($event, index)"
            @touchstart.prevent.passive="onNodeMousedown($event, index)"
          ></circle>
          <text
            class="node-label"
            :x="(node.x || 0) + (node.width || 0) / 2 + nodeLabel.font.size / 2"
            :y="(node.y || 0) + nodeLabel.offset.y"
            :font-size="nodeLabel.font.size"
          >
            {{ node.name }}
          </text>
        </template>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { type PropType, ref, toRef } from "vue";
import type {
  D3Link,
  D3NeworkGraphEmits,
  D3Node,
  D3Options,
  D3LinkSimulation,
  D3NodeSimulation,
} from "./types";
import { useDraggable } from "./useDraggable";
import { useLinkMarkers } from "./useLinkMarkers";
import { useSimulation } from "./useSimulation";
import { useResizeObserver } from "@vueuse/core";
import { useOptions } from "./useOptions";
import { useNodeLabel } from "./useNodeLabel";
import { useLinkLabel } from "./useLinkLabel";
import { useCanvas } from "./useCanvas";
import { isNode } from "./utils";

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

const { theme, options } = useOptions(toRef(() => props.options));

// svg container resize observer
const svg = ref(null);
const canvas = ref<SVGGElement | null>(null);
const rect = ref({ width: 100, height: 100, top: 0, left: 0 });
const { transform, zoom, panMove, panStart, panEnd } = useCanvas(rect);

useResizeObserver(svg, (entries) => {
  const entry = entries[0];
  if (
    entry.contentRect.width === rect.value.width &&
    entry.contentRect.height === rect.value.height
  )
    return;
  const clientRect = entry.target.getBoundingClientRect();
  rect.value = {
    top: clientRect.top,
    left: clientRect.left,
    width: entry.contentRect.width,
    height: entry.contentRect.height,
  };
});

const getPath = (link: D3LinkSimulation) =>
  isNode(link.source) && isNode(link.target)
    ? `M${link.source.x} ${link.source.y} L${link.target.x} ${link.target.y}`
    : undefined;

const { simulation, graph } = useSimulation(
  toRef(() => props.nodes),
  toRef(() => props.links),
  rect,
  options
);

// draggable nodes
const { dragStart, dragEnd, dragMove } = useDraggable(
  simulation,
  options.draggables
);

const { label: nodeLabel } = useNodeLabel(
  options.nodeFontSize,
  options.nodeSize
);

const {
  label: linkLabel,
  getX: getLinkLabelX,
  getY: getLinkLabelY,
} = useLinkLabel(options.linkFontSize);

const { markers } = useLinkMarkers(
  options.linkWidth,
  options.nodeSize,
  options.directed
);

const onNodeClick = (
  event: MouseEvent | TouchEvent,
  node: D3NodeSimulation,
  index: number
) => {
  emit("node-click", event, props.nodes[index]);
};

const onLinkClick = (
  event: MouseEvent | TouchEvent,
  link: D3LinkSimulation,
  index: number
) => {
  emit("link-click", event, props.links[index]);
};

const onWheel = async (event: WheelEvent) => {
  if (!event.ctrlKey || !canvas.value) return;

  const delta = event.deltaY || event.deltaX;
  const scaleStep =
    Math.abs(delta) < 50
      ? 0.05 // touchpad pitch
      : 0.25; // mouse wheel

  const scaleDelta = delta < 0 ? scaleStep : -scaleStep;
  zoom(event.clientX, event.clientY, scaleDelta);
};

const onMouseMove = (event: MouseEvent) => {
  dragMove(event);
  panMove(event.clientX, event.clientY);
};

const onMouseDown = (event: MouseEvent) => {
  panStart(event.clientX, event.clientY);
};

const onNodeMousedown = (event: Event, index: number) =>
  dragStart(event, index);

const onMouseUp = () => {
  dragEnd();
  panEnd();
};

const onTouchEnd = () => dragEnd();
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
.link-label {
  fill: v-bind("theme.link.label.fill");
}
</style>
