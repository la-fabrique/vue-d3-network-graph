<template>
  <div id="example">
    <!-- Network -->
    <div class="graph">
      <D3NetworkGraph
        ref="net"
        :options="options"
        :nodes="ns"
        :links="links"
        @node-click="nodeClick"
        @link-click="linkClick"
      />
    </div>
    <!-- Menu -->
    <div class="over">
      <div class="menu-net">
        <Menu
          v-model:settings="settings"
          :options="options"
          @update:settings="refresh"
          @simulate="reset"
        ></Menu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import D3NetworkGraph from "../../src/D3NetworkGraph.vue";
import Menu from "./Menu.vue";
import { getDefaultOptions, getRandomLinks, getRandomNodes } from "../util";
import type { D3Link, D3Node } from "../../src/types";

const settings = ref({
  maxNodes: 10,
  maxLinks: 2,
});

const options = ref(getDefaultOptions());

const ns = computed(() => nodes.value);

const nodes = ref<D3Node[]>(getRandomNodes(settings.value.maxNodes));
const links = ref<D3Link[]>(
  getRandomLinks(nodes.value, settings.value.maxLinks)
);

const refresh = () => {
  nodes.value = getRandomNodes(settings.value.maxNodes);
  links.value = getRandomLinks(nodes.value, settings.value.maxLinks);
};

function nodeClick(event: MouseEvent | TouchEvent, node: D3Node): void {
  if (event instanceof MouseEvent) {
    console.log("nodeClick", event.x, event.y, node);
  }
}

function linkClick(event: MouseEvent | TouchEvent, link: D3Link): void {
  console.log("linkClick", link);
}

const reset = () => {
  console.log("reset");
  // TODO
};
</script>

<style lang="scss">
@import "../variables.scss";

.graph {
  position: absolute;
  top: 10%;
  left: 10%;
  bottom: 10%;
  right: 10%;
}

.svg-container {
  border-width: 1px;
  border-style: solid;
  border-color: "grey";
}
body {
  overflow-x: hidden;
}
#example,
.net,
button {
  margin: 0;
  padding: 0;
}
.net {
  background-color: $bg;
}
.net-svg {
  fill: $bg;
}
#example {
  position: absolute;
  max-width: 100%;
  width: 100%;
  height: calc(100% - 4px);
  top: 0;
  left: 0;
  bottom: 0;
  box-sizing: content-box;
}
button {
  &.menu {
    // width: 1.5em;
    //height: 1.5em;
    padding: 0;
    font-size: 2em;
    font-weight: bold;
    color: $color;
    //border: $border;
    box-shadow: $sh;
    &:hover {
      color: $color2;
      border-color: $color2;
    }
  }
}

.connected {
  color: $color;
}
.disconnected {
  color: $warn;
}
.node.nodeodd #fill,
.node.nodeodd {
  fill: #f00;
}
.node-label {
  &.odd {
    fill: #f00;
  }
}
.over {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 1em;
}
.menu {
  position: relative;
  display: inline-block;
  padding-right: 3em;
}
.options {
  padding: 0.5em 2em;
  border-radius: 0.5em;
  text-align: center;
}
.close {
  display: block;
  &:after {
    content: "X";
    position: absolute;
    right: 1em;
    top: 0.5em;
    font-size: 1.25em;
    color: $color;
    font-family: sans-serif;
    text-shadow: $txt-sh;
  }
  &:hover {
    &:after {
      color: $dark;
    }
  }
}

ul {
  &.inline {
    display: inline;
    margin: 0;
    padding: 0;
    color: #fff;
  }
}
.inline {
  list-style: none;
  li {
    display: inline-block;
    &:after {
      content: "/";
      margin: 0 0.5em;
    }
  }
}

.menu-net {
  background-color: $bg-plus;
  padding: 0.5em 0.5em;
  border: $dark solid 2px;
  position: relative;
  border-radius: 0.5em;
  .close {
    position: absolute;
    top: 0;
    right: 0;
    &:after {
      color: $dark;
    }
    &:hover {
      &::after {
        color: $color;
      }
    }
  }
}
.title {
  //border: 1.5px $white;
  // border-style: dotted none;
  //padding: 0.5em 0;
  //margin: 1.5em 1em 0.5em 0.5em;
  h1 {
    color: $white;
    text-shadow: $txt-sh;
  }
}
h2 {
  &.hint {
    display: inline;
    position: absolute;
    margin-left: 1em;
    color: $light;
    font-size: 1em;
    font-style: italic;
    letter-spacing: 0.125em;
    text-shadow:
      1px 1px 5px rgba(0, 0, 0, 0.5),
      2px 2px 15px $color2;
    opacity: 0;
    animation-name: hint-anim;
    animation-delay: 1s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    .icon {
      font-size: 3em;
      line-height: 0.5em;
    }
  }
}
</style>
