vue-d3-network-graph / [Exports](docs/modules.md)

# vue-d3-network-graph

inspired by https://github.com/emiliorizzo/vue-d3-network

## Key features

- Vue 3.3 features
- 'Static' mode to use d3-force tick instead of simulation.restart (No rendering vue component on each tick)
- [VueUse/useResizeObserver](https://vueuse.org/core/useResizeObserver/)
- Tpyescript support
- Composition function : [useSimulation](docs/modules.md#usesimulation) (renderless use of d3 simulation)

## Installation

> npm install vue-d3-network-graph

## Utilisation

```html
<template>
  <div id="app">
    <D3NetworkGraph :nodes="nodes" :links="links" />
  </div>
</template>
<script lang="ts">
  import D3NetworkGraph from "vue-d3-network-graph";
  import "vue-d3-network-graph/dist/style.css";

  const nodes = ref([
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
  ]);
  const links = ref([
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
  ]);
</script>
```

## API

See [API](docs/modules.md)

### D3NetworkGraph Component

**props**

| Name     | Type                                       | Default   | Description                                                                                                                                      |
| -------- | ------------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| nodes    | Array<[D3Node](docs/interfaces/D3Node.md)> | []        | Array of nodes                                                                                                                                   |
| links    | Array<[D3Link](docs/interfaces/D3Link.md)> | []        | Array of links                                                                                                                                   |
| options? | [D3Options](docs/modules.md#d3options)     | undefined | [`Links`](docs/modules.md#d3linkoptions), [nodes](docs/modules.md#d3nodeoptions) and [`simulation`](docs/modules.md#d3simulationoptions) Options |

**events**

| Name         | Type                                             | Description                                         |
| ------------ | ------------------------------------------------ | --------------------------------------------------- |
| 'node-click' | [`function`](docs/modules.md#d3neworkgraphemits) | Callback function called when a node is clicked     |
| 'link-click' | [`function`](docs/modules.md#d3neworkgraphemits) | Callback function called when a node is mouseovered |

## TODO :

- [ ] Zoom
- [ ] Children nodes
- [ ] Selection
- [ ] Custom forces
- [ ] Better theming support
- [ ] (Canvas rendering ?)
- [ ] (Remove vueuse dependency ?)

> Issues and PR are welcome !
