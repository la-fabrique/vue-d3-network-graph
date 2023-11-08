<template>
  <svg
    ref="svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMinYMin"
    :viewBox="`0 0 ${rect.width} ${rect.height}`"
    :class="cssClass"
    @mousedown.self.prevent="onMouseDown"
    @mouseup="onMouseUp"
    @touchend.passive="onTouchEnd"
    @touchstart.passive="async () => {}"
    @mousemove="onMouseMove"
    @wheel.prevent="onWheel"
  >
    <defs v-if="options.directed">
      <marker v-bind="markers.arrowEnd">
        <path class="link" d="M 0 5 L 0 -5 L 10 0 L 0 5"></path>
      </marker>
      <marker v-bind="markers.arrowStart">
        <path class="link" d="M 10 5 L 0 0 L 10 -5 L 10 5"></path>
      </marker>
    </defs>
    <g ref="canvas" class="svg-canvas" :transform="transform">
      <g class="links">
        <template v-for="(link, index) in links" :key="index">
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
            :y="getLinkLabelY(link)"
          >
            <tspan
              v-for="(label, idx) in link.labels"
              :key="idx"
              :dy="idx > 0 ? '1.1em' : '0'"
              :x="getLinkLabelX(link)"
            >
              {{ label }}
            </tspan>
          </text>
        </template>
      </g>

      <g class="nodes">
        <template v-for="(node, index) in nodes" :key="index">
          <svg
            v-if="node.innerSVG"
            :viewBox="node.innerSVG.viewBox"
            :width="node.width"
            :height="node.height"
            :x="(node.x || 0) - (node.width || 0) / 2"
            :y="(node.y || 0) - (node.height || 0) / 2"
            :title="node.name"
            :class="node.class"
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
            :title="node.name"
            :class="node.class"
            @click="onNodeClick($event, node, index)"
            @touchend.passive="onNodeClick($event, node, index)"
            @mousedown.prevent="onNodeMousedown($event, index)"
            @touchstart.prevent.passive="onNodeMousedown($event, index)"
          ></circle>
          <text
            class="node-label"
            :y="(node.y || 0) + nodeLabel.offset.y"
            :font-size="nodeLabel.font.size"
          >
            <tspan
              v-for="(label, idx) in node.labels"
              :key="idx"
              :dy="idx > 0 ? '1.1em' : '0'"
              :x="(node.x || 0) + (node.width || 0)"
            >
              {{ label }}
            </tspan>
          </text>
        </template>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { type PropType, ref, toRef, computed } from "vue";
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
import { isDefined, useResizeObserver } from "@vueuse/core";
import { useOptions } from "./useOptions";
import { useNodeLabel } from "./useNodeLabel";
import { useLinkLabel } from "./useLinkLabel";
import { useCanvas } from "./useCanvas";
import { onMounted } from "vue";

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

const { options } = useOptions(toRef(() => props.options));

// svg container resize observer
const svg = ref<SVGAElement | null>(null);
const canvas = ref<SVGGElement | null>(null);
const rect = ref({ width: 100, height: 100, top: 0, left: 0 });
const { transform, zoom, panMove, panStart, panEnd } = useCanvas(rect);
const cssClass = computed(() => [
  "svg-container",
  `${options.themeClass.value}${options.dark.value ? "--dark" : ""}`,
]);

const updateRect = (clientRect: DOMRect) => {
  if (
    clientRect.width === rect.value.width &&
    clientRect.height === rect.value.height
  )
    return;

  rect.value = {
    top: clientRect.top,
    left: clientRect.left,
    width: clientRect.width,
    height: clientRect.height,
  };
};

useResizeObserver(svg, (entries) => {
  const entry = entries[0];
  const clientRect = entry.target.getBoundingClientRect();
  updateRect(clientRect);
});

const getPath = (link: D3LinkSimulation) =>
  isDefined(link.xS) &&
  isDefined(link.yS) &&
  isDefined(link.xT) &&
  isDefined(link.yT)
    ? `M${link.xS} ${link.yS} L${link.xT} ${link.yT}`
    : undefined;

const { simulation, nodes, links } = useSimulation(
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

onMounted(() => {
  if (svg.value) {
    const clientRect = svg.value.getBoundingClientRect();
    updateRect(clientRect);
  }
});
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
</style>
