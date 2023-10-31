<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="menu" ref="menu">
    <ul v-if="settings" class="test-menu">
      <li>
        <label>Nodes:</label>
        <span>{{ settings.maxNodes }}</span>
        <input
          :value="settings.maxNodes"
          type="range"
          min="1"
          :max="500"
          step="10"
          @input="
            (event) =>
              emit('update:settings', {
                ...settings,
                maxNodes: (event.target as HTMLInputElement)?.value,
              })
          "
        />
      </li>
      <li>
        <label>Max Links per Node:</label>
        <span>{{ settings.maxLinks }}</span>
        <input
          type="range"
          :value="settings.maxLinks"
          min="1"
          max="10"
          step="1"
          @input="
            (event) =>
              emit('update:settings', {
                ...settings,
                maxLinks: (event.target as HTMLInputElement)?.value,
              })
          "
        />
      </li>
      <li v-if="innerOptions.layout" class="checkbox">
        <input
          v-model="innerOptions.layout.draggables"
          type="checkbox"
          @input="updateOptions"
        />
        <label>Draggables:</label>
      </li>
      <li v-if="innerOptions.layout" class="checkbox">
        <input
          v-model="innerOptions.layout.directed"
          type="checkbox"
          @input="updateOptions"
        />
        <label>Directed:</label>
      </li>
      <li v-if="innerOptions.simulation" class="checkbox">
        <input
          v-model="innerOptions.simulation.static"
          type="checkbox"
          @input="updateOptions"
        />
        <label>Static</label>
      </li>
      <li class="checkbox">
        <input
          :value="settings.useGroups"
          type="checkbox"
          @input="
            (event) =>
              emit('update:settings', {
                ...settings,
                useGroups: (event.target as HTMLInputElement)?.checked,
              })
          "
        />
        <label>Use node groups</label>
      </li>
    </ul>

    <ul class="test-menu">
      <li v-if="innerOptions.simulation?.force.x">
        <label>Force X:</label>
        <span>{{ innerOptions.simulation?.force.x }}</span>
        <input
          v-model.number="innerOptions.simulation.force.x"
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          @input="updateOptions"
        />
      </li>
      <li v-if="innerOptions.simulation?.force.y">
        <label>Force Y:</label>
        <span>{{ innerOptions.simulation?.force.y }}</span>
        <input
          v-model.number="innerOptions.simulation.force.y"
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          @input="updateOptions"
        />
      </li>
      <li v-if="innerOptions.simulation?.force.charge">
        <label>Many-body strenght force:</label>
        <span>{{ innerOptions.simulation?.force.charge }}</span>
        <input
          v-model.number="innerOptions.simulation.force.charge"
          type="range"
          min="-1000"
          max="-1"
          step="1"
          @input="updateOptions"
        />
      </li>
      <li v-if="innerOptions.simulation?.force.collide">
        <label>Collide radius force:</label>
        <span>{{ innerOptions.simulation?.force.collide }}</span>
        <input
          v-model.number="innerOptions.simulation.force.collide"
          type="range"
          min="1"
          max="100"
          step="1"
          @input="updateOptions"
        />
      </li>
    </ul>

    <ul class="test-menu">
      <li v-if="innerOptions.nodes?.size">
        <label>Node Size:</label>
        <span>{{ innerOptions.nodes.size }}</span>
        <input
          v-model.number="innerOptions.nodes.size"
          type="range"
          min="3"
          max="100"
          step="1"
          @input="updateOptions"
        />
      </li>
      <li v-if="innerOptions.links?.width">
        <label>Link Thickness:</label>
        <span>{{ innerOptions.links.width }}</span>
        <input
          v-model.number="innerOptions.links.width"
          type="range"
          min="1"
          max="15"
          step="1"
          @input="updateOptions"
        />
      </li>
      <li v-if="innerOptions.nodes?.font?.size">
        <label>Node font Size:</label>
        <span>{{ innerOptions.nodes.font.size }}</span>
        <input
          v-model.number="innerOptions.nodes.font.size"
          type="range"
          min="1"
          max="30"
          step="1"
          @input="updateOptions"
        />
      </li>
      <li v-if="innerOptions.links?.font?.size">
        <label>Link font Size:</label>
        <span>{{ innerOptions.links.font.size }}</span>
        <input
          v-model.number="innerOptions.links.font.size"
          type="range"
          min="1"
          max="30"
          step="1"
          @input="updateOptions"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from "vue";
import type { D3Options } from "../../src/types";
import { useVModel } from "@vueuse/core";

const props = defineProps({
  settings: {
    type: Object as PropType<{
      maxNodes: number;
      maxLinks: number;
      useGroups: boolean;
    }>,
    required: true,
  },
  options: {
    type: Object as PropType<D3Options>,
    required: true,
  },
});

const emit = defineEmits(["update:options", "update:settings", "simulate"]);

const innerOptions = useVModel(props, "options", emit, { deep: true });

const menu = ref<HTMLElement | null>(null);

const updateOptions = () => {
  console.log("updateOptions", innerOptions.value);
};
</script>

<style scoped lang="scss">
.debug {
  font-size: 0.5em;
  list-style: none;
}
.test-menu {
  display: table-cell;
  list-style: none;
  li {
    label {
      font-size: 0.85em;
      display: block;
      span {
        font-weight: normal;
      }
    }
    input {
      & + label {
        display: inline;
        margin-left: 0.5em;
      }
    }

    &.checkbox {
      text-align: start;
    }
  }
}
ul {
  &.test-menu {
    & + ul {
      &.test-menu {
        border-left: none;
      }
    }
  }
}
</style>
