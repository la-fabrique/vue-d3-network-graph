# 🔆 [vue-d3-network-graph](https://la-fabrique.github.io/vue-d3-network-graph/) 🔆

> inspired by https://github.com/emiliorizzo/vue-d3-network

## 💫 Key features

- Directed links (svg markers). see [D3LayoutOptions:directed](docs/modules.md#d3layoutoptions) and [D3Link:twoWay](docs/modules.md#d3link)
- 'Static' mode to use d3-force tick instead of simulation.restart (No rendering of vue components on each tick)
- Composition function : [useSimulation](docs/modules.md#usesimulation) (renderless use of d3 simulation)
- Typescript support
- Vue 3.3 features ([c-bind in css](https://vuejs.org/api/sfc-css-features.html#v-bind-in-css), [readonly ref from getter](https://vuejs.org/api/reactivity-utilities.html#toref) )
- VueUse : [useResizeObserver](https://vueuse.org/core/useResizeObserver/), [watchDebounced](https://vueuse.org/shared/watchDebounced/#watchdebounced)

## 📦 Install

```bash
npm install vue-d3-network-graph@beta
```

> Not production ready yet, use at your own risk. Api may change.

## 🛠️ Usage

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

# 🖥️ API

See [API documentation](docs/modules.md)

## D3NetworkGraph Component

**props**

| Name     | Type                                    | Default   | Description                                                                                                                                  |
| -------- | --------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| nodes    | Array<[D3Node](docs/modules.md#d3node)> | []        | Array of nodes                                                                                                                               |
| links    | Array<[D3Link](docs/modules.md#d3link)> | []        | Array of links                                                                                                                               |
| options? | [D3Options](docs/modules.md#d3options)  | undefined | [Links](docs/modules.md#d3linkoptions), [nodes](docs/modules.md#d3nodeoptions) and [simulation](docs/modules.md#d3simulationoptions) Options |

**events**

| Name         | Type                                           | Description                                         |
| ------------ | ---------------------------------------------- | --------------------------------------------------- |
| 'node-click' | [function](docs/modules.md#d3neworkgraphemits) | Callback function called when a node is clicked     |
| 'link-click' | [function](docs/modules.md#d3neworkgraphemits) | Callback function called when a node is mouseovered |

# 🪴What next ?

- [x] Zoom-Pan
- [ ] Enforce better option API
- [ ] Enforce better css API
- [ ] Children nodes group
- [ ] Mobile support
- [ ] Selection
- [ ] Custom forces
- [ ] Remove third party dependencies

> Issues and PR are welcome !

# 👨‍🚀 Contributors

<ul style="list-style: none; display: flex; flex-wrap: wrap;">
    <li style="margin-bottom:8px; margin-right:8px">
      <a href="https://github.com/deka" class="" data-hovercard-type="user" data-hovercard-url="/users/deka/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self">
        <img src="https://avatars.githubusercontent.com/u/349156?s=64&amp;v=4" alt="@deka" size="32" height="32" width="32" data-view-component="true" class="avatar circle">
      </a>
    </li>
    <li style="margin-bottom:8px; margin-right:8px">
      <a href="https://github.com/dependabot" class="">
        <img src="https://avatars.githubusercontent.com/u/27347476?s=64&amp;v=4" alt="@dependabot" size="32" height="32" width="32" data-view-component="true" class="avatar">
      </a>
    </li>
    <li style="margin-bottom:8px; margin-right:8px">
      <a href="https://github.com/zomkd" class="" data-hovercard-type="user" data-hovercard-url="/users/zomkd/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self">
        <img src="https://avatars.githubusercontent.com/u/92479660?s=64&amp;v=4" alt="@zomkd" size="32" height="32" width="32" data-view-component="true" class="avatar circle">
      </a>
    </li>
</ul>
<div style="margin-top: 8px; color: rgb(125, 133, 144)" >
    deka, dependabot, and zomkd
  </div>
