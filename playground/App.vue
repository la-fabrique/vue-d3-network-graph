<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="6">
            <D3NetworkGraph :nodes="nodes" :links="links" :options="options" />
          </v-col>
          <v-col cols="6">
            <v-btn @click="addNode">Ajouter noeud</v-btn>
            <v-btn @click="toggleHasNodesLabel">Toggle node label</v-btn>
            <v-btn @click="toggleNodeSize">Toggle node size</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { D3NetworkGraph, type D3Link, type D3Node } from "@/index";

const database = {
  viewBox: "0 0 32 32",
  innerHtml: `
   <path d="M5 12v4c0 3 5 6 11 6s11-3 11-6v-4c-2 3-6 4-11 4s-9-1-11-4z"/>
  <path d="M5 20v4c0 3 5 6 11 6s11-3 11-6v-4c-2 3-6 4-11 4s-9-1-11-4z"/>
  <ellipse cx="16" cy="8" rx="11" ry="6"/>
  `,
};

const bloc = {
  viewBox: "0 0 98 98",
  innerHtml: `
    <path d="M31 31h36v37H31z"/>
  <path d="M49 0a49 49 0 1 0 0 98 49 49 0 0 0 0-98zm32 81H17V17h64v64z"/>
  `,
};

export default defineComponent({
  name: "App",
  components: { D3NetworkGraph },

  data() {
    return {
      nodes: [
        { id: 1, name: "my awesome node 1", innerSVG: database },
        { id: 2, name: "my node 2", innerSVG: bloc },
        { id: 3, name: "orange node" },
        { id: 4, name: "blue node" },
        { id: 5, name: "G1 - 1", group: 1 },
        { id: 6, name: "G1 - 2", group: 1 },
        { id: 7, name: "G1 - 3", group: 1 },
        { id: 8, name: "G2 - 1", group: 2 },
        { id: 9, name: "G2 - 2", group: 2 },
        { id: 10, name: "G2 - 3", group: 2 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
      ] as D3Node[],
      links: [
        { source: 2, target: 1, name: "Utilise" },
        { source: 4, target: 3, name: "Utilise" },
        { source: 4, target: 2, name: "Utilise" },
        { source: 4, target: 9, name: "Utilise" },
        { source: 5, target: 6, name: "Utilise" },
        { source: 7, target: 8, name: "Utilise" },
        { source: 5, target: 8, name: "Utilise" },
        { source: 3, target: 8, name: "Utilise" },
        { source: 7, target: 9, name: "Utilise" },
        { source: 3, target: 9 },
        { source: 10, target: 6 },
        { source: 11, target: 6 },
        { source: 12, target: 6 },
        { source: 13, target: 6 },
        { source: 14, target: 6 },
      ] as D3Link[],
      nodeOptions: {
        hasLabel: true,
        size: 20,
        fontSize: 10,
      },
    };
  },
  computed: {
    options() {
      return undefined;
      /*  return {
        nodes: { hasLabel: true, size: 20 },
        links: { width: 5 },
      } as D3Options; */
    },
  },
  methods: {
    addNode() {
      const id = this.nodes.reduce((a, b) => (a.id! > b.id! ? a : b)).id! + 1;
      console.log(id);
      this.nodes.push({
        id: id,
        name: "New",
      });
      this.links.push({
        source: id,
        target: 2,
      });
    },
    toggleHasNodesLabel() {
      this.nodeOptions.hasLabel = !this.nodeOptions.hasLabel;
    },
    toggleNodeSize() {
      switch (this.nodeOptions.size) {
        case 20:
          this.nodeOptions.size = 10;
          break;
        default:
          this.nodeOptions.size = 20;
          break;
      }
    },
  },
});
</script>
