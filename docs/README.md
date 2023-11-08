# Home

> Work in progress. Not production ready yet, use at your own risk. Api may change.

## 📚 Examples

Examples are available with [hitoire](https://la-fabrique.github.io/vue-d3-network-graph/histoire/)

## 💫 Key features

- Directed links (svg markers). see [D3LayoutOptions:directed](modules.md#d3layoutoptions) and [D3Link:twoWay](modules.md#d3link)
- 'Static' mode to use d3-force tick instead of simulation.restart (No rendering of vue components on each tick)
- Node groups
- Custom SVG nodes
- CSS theming with dark mode support
- Fixed node position
- Typescript support
- Vue 3.3 features ([readonly ref from getter](https://vuejs.org/api/reactivity-utilities.html#toref) )
- VueUse : [useResizeObserver](https://vueuse.org/core/useResizeObserver/), [watchDebounced](https://vueuse.org/shared/watchDebounced/#watchdebounced)

## 📦 Install

> Not production ready yet, use at your own risk. Api may change.

```bash
npm install vue-d3-network-graph@beta
```

## 🛠️ Usage

### Install the plugin

```javascript
import plugin from "vue-d3-network-graph";
import { createApp } from "vue";

const app = createApp(App);
app.use(plugin);
```

### Use the component

```html
<template>
  <div id="app">
    <D3NetworkGraph :nodes="nodes" :links="links" :options="options" />
  </div>
</template>
<script lang="ts">
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

  const options = reactive({
    layout: {
      draggable: true,
    },
  });
</script>
```

> See [options API](modules.md#d3options), [D3Node API](modules.md#d3node) and [D3Link API](modules.md#d3link) for more details.

## 🪴What next ?

- Better theming ?
- Mobile support ?
- More events ?
- Custom d3 forces ?
- Remove third party dependencies ?
- Other ideas ?

## 👨‍🚀 Contribute

> Issues and PR are welcome !

```bash
git clone
npm install
npm run story:dev
```
