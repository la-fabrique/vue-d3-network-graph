<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <d3-net-example />

    <!--Links-->
    <ul class="links">
      <li>
        <a :href="repo">
          <div class="icon" v-html="icons.gitHub"></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import ghIcon from "./assets/github.svg?raw";
import D3NetExample from "./components/D3NetExample.vue";

const repo = import.meta.env.VITE_APP_REPO;

const icons = {
  gitHub: ghIcon,
};
</script>

<style lang="scss">
@import "./assets/css/icons.css";
@import "./index.scss";

#app {
  position: absolute;
  max-width: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  user-select: none;
}
.menu-container {
  position: fixed;
  bottom: 0;
  z-index: 50;
  margin: 5em;
  width: 25em;
  max-width: 25em;
}
h1 {
  font-size: 1.7em;
  letter-spacing: 0.0325em;
  color: $color2;
}
div {
  &.menu {
    border: $dark 1px solid;
    // border-top-width: 10px;
    //border-bottom-width: 5px;
    padding: 1em 2em;
    background-color: $color;
    color: #fff;
    box-shadow: $sh;
    margin-bottom: 1em;
    .title {
      border: 1.5px;
      border-style: dotted none;
      padding: 0.5em 0;
      letter-spacing: 0.0625em;
      h1 {
        font-size: 1.7em;
        letter-spacing: 0.0325em;
        font-family: "Belgrano", serif;
        text-shadow: $sh, $sh;
      }
      h2 {
        font-size: 0.8em;
        font-style: italic;
      }
    }
  }
}
div.menu .title h1,
div.menu .title h2 {
  margin: 0 0 0.5em 0;
}
.links {
  margin: 1em 5em 0 0;
  position: absolute;
  list-style: none;
  top: 0;
  right: 0;
}
.icon {
  svg {
    padding: 0.1em;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    width: 3em;
    height: 3em;
    fill: $color;
  }
}
.set {
  margin: 1em;
  display: inline-block;
}
.console {
  display: block;
  max-width: 20em;
  position: fixed;
  margin: 5em;
  right: 0;
  bottom: 0;
  color: $dark;
}
</style>
