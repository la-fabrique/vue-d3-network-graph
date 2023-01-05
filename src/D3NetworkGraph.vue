<template>
  <div ref="svg">
    <div class="svg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMinYMin"
        :viewBox="`0 0 ${options.size.width} ${options.size.height}`"
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
        <g v-if="nodeOptions.hasLabel" id="node-labels" class="labels">
          <text
            v-for="node in nodes"
            :key="node.id"
            class="node-label"
            :x="
              (node.x || 0) + getNodeSize(node) / 2 + nodeOptions.fontSize / 2
            "
            :y="(node.y || 0) + labelOffset.y"
            :font-size="nodeOptions.fontSize"
            :stroke-width="nodeOptions.fontSize / 8"
          >
            {{ node.name }}
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import {  onMounted, PropType, ref, watch } from "vue";
import {
  D3Link,
  D3Node,
  D3NodeOptions,
  D3LinkOptions,
  D3Options,
} from "@/types";
import { useDraggable } from "@/useDraggable";
import { useNode } from "@/useNode";
import { useLink } from "@/useLink";
import { useSimulation } from "@/useSimulation";


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
      default: () => {
        return {
          size: { width: 600, height: 400 },
        };
      },
    },
    nodeOptions: {
      type: Object as PropType<D3NodeOptions>,
      default: () => {
        return {
          hasLabel: true,
          size: 20,
          fontSize: 10,
        };
      },
    },
    linkOptions: {
      type: Object as PropType<D3LinkOptions>,
      default: () => {
        return {
          width: 2,
        };
      },
    },
  });
  
   const emit = defineEmits(['node-click', 'link-click']);

    const svg = ref(null);
    const { animate, simulation } = useSimulation(props.options);
    const { dragStart, dragEnd, move } = useDraggable(simulation);
    const {
      labelOffset,
      getSize: getNodeSize,
      getWidth: getNodeWidth,
      getClass: getNodeClass,
      getHeight: getNodeHeight,
      getStyle: getNodeStyle,
    } = useNode(props.nodeOptions);
    const {
      getPath: getLinkPath,
      getAttrs: getLinkAttrs,
      getClass: getLinkClass,
      getStyle: getLinkStyle,
    } = useLink(props.linkOptions);

    onMounted(() => animate(props.nodes, props.links));

    watch([() => props.nodes.length, () => props.links.length], () =>
      animate(props.nodes, props.links)
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
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0;
}
</style>
