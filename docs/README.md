# Home

> Work in progress. Not production ready yet, use at your own risk. Api may change.

## 💫 Key features

- Directed links (svg markers). see [D3LayoutOptions:directed](modules.md#d3layoutoptions) and [D3Link:twoWay](modules.md#d3link)
- 'Static' mode to use d3-force tick instead of simulation.restart (No rendering of vue components on each tick)
- Node groups
- Custom SVG nodes
- Typescript support
- Vue 3.3 features ([readonly ref from getter](https://vuejs.org/api/reactivity-utilities.html#toref) )
- VueUse : [useResizeObserver](https://vueuse.org/core/useResizeObserver/), [watchDebounced](https://vueuse.org/shared/watchDebounced/#watchdebounced)

## 📚 Examples

Examples are available with [hitoire](https://la-fabrique.github.io/vue-d3-network-graph/histoire/)

## 📦 Install

> Not production ready yet, use at your own risk. Api may change.

```bash
npm install vue-d3-network-graph@beta
```

## 🛠️ Usage

```html
<template>
  <div id="app">
    <D3NetworkGraph :nodes="nodes" :links="links" />
  </div>
</template>
<script lang="ts">
  import { D3NetworkGraph } from "vue-d3-network-graph";
  import "vue-d3-network-graph/dist/style.css";

  const nodes = ref([
    { id: 1, name: "my awesome node 1" },
    { id: 2, name: "my node 2" },
    { id: 3, name: "An other node" },
    { id: 4, name: "Last node" },
  ]);
  const links = ref([
    { source: 2, target: 1, name: "Use" },
    { source: 4, target: 3, name: "See" },
    { source: 4, target: 2, name: "Confirm" },
  ]);
</script>
```

## 🪴What next ?

- [x] Zoom-Pan
- [x] Children nodes group
- [ ] Enforce better option API
- [ ] Enforce better css API
- [ ] Mobile support
- [ ] Selection
- [ ] Custom forces
- [ ] Remove third party dependencies

## 👨‍🚀 Contribute

> Issues and PR are welcome !

```bash
git clone
npm install
npm run dev
```
