[vue-d3-network-graph](../README.md) / Exports

# vue-d3-network-graph

## Table of contents

### Type Aliases

- [D3LayoutOptions](modules.md#d3layoutoptions)
- [D3Link](modules.md#d3link)
- [D3LinkOptions](modules.md#d3linkoptions)
- [D3LinkOptionsColors](modules.md#d3linkoptionscolors)
- [D3LinkSimulation](modules.md#d3linksimulation)
- [D3NeworkGraphEmits](modules.md#d3neworkgraphemits)
- [D3Node](modules.md#d3node)
- [D3NodeOptions](modules.md#d3nodeoptions)
- [D3NodeOptionsColors](modules.md#d3nodeoptionscolors)
- [D3NodeSimulation](modules.md#d3nodesimulation)
- [D3Options](modules.md#d3options)
- [D3SimulationOptions](modules.md#d3simulationoptions)
- [useSimulationOptions](modules.md#usesimulationoptions)

### Variables

- [D3NetworkGraph](modules.md#d3networkgraph)

### Functions

- [useSimulation](modules.md#usesimulation)

## Type Aliases

### D3LayoutOptions

Ƭ **D3LayoutOptions**: `Object`

Layout options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `directed?` | `boolean` | Indicate if the graph is directed. Edge arrow will be displayed **`Default Value`** `false` |
| `draggables?` | `boolean` | Indicates if the nodes should be draggable **`Default Value`** `false` |

#### Defined in

[types.ts:244](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L244)

___

### D3Link

Ƭ **D3Link**: `Object`

Represents a link in the graph

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `color?` | `string` | Link color (stroke), e.g. red, #aa00bb, |
| `id?` | `number` \| `string` | Unique link id. If not provided uses array index |
| `name?` | `string` | Link name. If not provided uses: 'link [link_id]' |
| `source` | `string` \| `number` | Node source id |
| `target` | `string` \| `number` | Node target id |
| `twoWay?` | `boolean` | Is two-way link (bidirectional) |

#### Defined in

[types.ts:45](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L45)

___

### D3LinkOptions

Ƭ **D3LinkOptions**: `Object`

Default link options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors?` | [`D3LinkOptionsColors`](modules.md#d3linkoptionscolors) | Default link colors |
| `font?` | { `size?`: `number`  } | - |
| `font.size?` | `number` | Default link font size **`Default Value`** `12` |
| `width` | `number` | Default link width **`Default Value`** `2` |

#### Defined in

[types.ts:185](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L185)

___

### D3LinkOptionsColors

Ƭ **D3LinkOptionsColors**: `Object`

Default link colors

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fill?` | `string` | Default link fill color |
| `hover?` | { `fill?`: `string` ; `stroke?`: `string`  } | - |
| `hover.fill?` | `string` | Hovered link fill color |
| `hover.stroke?` | `string` | Hovered link stroke color |
| `label?` | { `fill?`: `string`  } | - |
| `label.fill?` | `string` | Link label color |
| `selected?` | { `fill?`: `string` ; `stroke?`: `string`  } | - |
| `selected.fill?` | `string` | Selected link fill color |
| `selected.stroke?` | `string` | Selected link stroke color |
| `stroke?` | `string` | Default link stroke color |

#### Defined in

[types.ts:145](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L145)

___

### D3LinkSimulation

Ƭ **D3LinkSimulation**: `SimulationLinkDatum`<[`D3NodeSimulation`](modules.md#d3nodesimulation)\> & { `class?`: `string`[] ; `marker-end?`: `string` ; `marker-start?`: `string` ; `name?`: `string` ; `stroke-width?`: `number` ; `style?`: `string`  }

Link used by the d3 simulation compisition function `useSimulation`

#### Defined in

[types.ts:389](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L389)

___

### D3NeworkGraphEmits

Ƭ **D3NeworkGraphEmits**: (`event`: ``"node-click"``, `$event`: `TouchEvent` \| `MouseEvent`, `node`: [`D3Node`](modules.md#d3node)) => `void`(`event`: ``"link-click"``, `$event`: `TouchEvent` \| `MouseEvent`, `link`: [`D3Link`](modules.md#d3link)) => `void`

#### Type declaration

▸ (`event`, `$event`, `node`): `void`

Event exposed by the D3NetworkGraph component

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"node-click"`` |
| `$event` | `TouchEvent` \| `MouseEvent` |
| `node` | [`D3Node`](modules.md#d3node) |

##### Returns

`void`

▸ (`event`, `$event`, `link`): `void`

Event exposed by the D3NetworkGraph component

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"link-click"`` |
| `$event` | `TouchEvent` \| `MouseEvent` |
| `link` | [`D3Link`](modules.md#d3link) |

##### Returns

`void`

#### Defined in

[types.ts:282](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L282)

___

### D3Node

Ƭ **D3Node**: `Object`

Represents a node in the graph

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `color?` | `string` | Node color, e.g. red, #aa00bb, |
| `group?` | `number` | - |
| `height?` | `number` | Node height |
| `id` | `number` \| `string` | Unique node id. If not provided uses array index |
| `innerSVG?` | { `innerHtml`: `string` ; `viewBox`: `string`  } | Node svg image |
| `innerSVG.innerHtml` | `string` | - |
| `innerSVG.viewBox` | `string` | - |
| `name?` | `string` | Node name. If not provided uses: 'node [node_id]' |
| `size?` | `number` | Node size |
| `width?` | `number` | Node width |

#### Defined in

[types.ts:7](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L7)

___

### D3NodeOptions

Ƭ **D3NodeOptions**: `Object`

Default node options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors?` | [`D3NodeOptionsColors`](modules.md#d3nodeoptionscolors) | Default node colors |
| `font?` | { `size?`: `number`  } | - |
| `font.size?` | `number` | Default node size **`Default Value`** `12` |
| `size?` | `number` | Default node size **`Default Value`** `25` |

#### Defined in

[types.ts:127](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L127)

___

### D3NodeOptionsColors

Ƭ **D3NodeOptionsColors**: `Object`

Defaut node colors

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fill?` | `string` | Default node fill color |
| `hover?` | { `fill?`: `string` ; `stroke?`: `string`  } | - |
| `hover.fill?` | `string` | Hovered node fill color |
| `hover.stroke?` | `string` | Hovered node stroke color |
| `label?` | { `fill?`: `string`  } | - |
| `label.fill?` | `string` | Node label color |
| `pinned?` | { `fill?`: `string` ; `stroke?`: `string`  } | - |
| `pinned.fill?` | `string` | Pinned node fill color |
| `pinned.stroke?` | `string` | Pinned node stroke color |
| `selected?` | { `fill?`: `string` ; `stroke?`: `string`  } | - |
| `selected.fill?` | `string` | Selected node fill color |
| `selected.stroke?` | `string` | Selected node stroke color |
| `stroke?` | `string` | Default node stroke color |

#### Defined in

[types.ts:77](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L77)

___

### D3NodeSimulation

Ƭ **D3NodeSimulation**: `SimulationNodeDatum` & { `color?`: `string` ; `cssClass?`: `string`[] ; `height?`: `number` ; `id?`: `number` ; `innerSVG?`: { `innerHtml`: `string` ; `viewBox`: `string`  } ; `name?`: `string` ; `r?`: `number` ; `size?`: `number` ; `style?`: `string` ; `width?`: `number`  }

Node used by the d3 simulation compisition function `useSimulation`

#### Defined in

[types.ts:340](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L340)

___

### D3Options

Ƭ **D3Options**: `Object`

Graph options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `layout?` | [`D3LayoutOptions`](modules.md#d3layoutoptions) | Layout options |
| `links?` | [`D3LinkOptions`](modules.md#d3linkoptions) | Default link options |
| `nodes?` | [`D3NodeOptions`](modules.md#d3nodeoptions) | Default node options |
| `simulation?` | [`D3SimulationOptions`](modules.md#d3simulationoptions) | Simulation options |

#### Defined in

[types.ts:260](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L260)

___

### D3SimulationOptions

Ƭ **D3SimulationOptions**: `Object`

Simulation options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `force` | { `charge`: `number` ; `collide`: `number` ; `x`: `number` ; `y`: `number`  } | d3 force configurations |
| `force.charge` | `number` | d3 forceManyBody strenght smaller than 0 **`Default Value`** `-300` |
| `force.collide` | `number` | d3 forceCollide radius **`Default Value`** `45` |
| `force.x` | `number` | d3 forceX strenght between 0 and 1 **`Default Value`** `0.1` |
| `force.y` | `number` | d3 forceY strenght between 0 and 1 **`Default Value`** `0.1` |
| `static?` | `boolean` | Indicates if the simulation should not be animated **`Remarks`** Use this option if you want to use the simulation to calculate the positions of the nodes but you don't want to render them each 'tick' **`Default Value`** `false` |

#### Defined in

[types.ts:206](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L206)

___

### useSimulationOptions

Ƭ **useSimulationOptions**: `Object`

Options used by the useSimulation composition function

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `directed` | `Readonly`<`Ref`<`boolean`\>\> | Indicate if the graph is directed. Edge arrow will be displayed |
| `draggables` | `Readonly`<`Ref`<`boolean`\>\> | Indicate if draggables are enabled |
| `forcManyBodyStrength` | `Readonly`<`Ref`<`number`\>\> | d3 forceManyBody strenght smaller than 0 |
| `forceCollideStrength` | `Readonly`<`Ref`<`number`\>\> | d3 forceCollide radius |
| `forceXStrength` | `Readonly`<`Ref`<`number`\>\> | d3 forceX strenght between 0 and 1 |
| `forceYStrength` | `Readonly`<`Ref`<`number`\>\> | d3 forceY strenght between 0 and 1 |
| `linkFontSize` | `Readonly`<`Ref`<`number`\>\> | Default link font size |
| `linkWidth` | `Readonly`<`Ref`<`number`\>\> | Default link width |
| `nodeFontSize` | `Readonly`<`Ref`<`number`\>\> | Default node font size |
| `nodeSize` | `Readonly`<`Ref`<`number`\>\> | Default node size |
| `static` | `Readonly`<`Ref`<`boolean`\>\> | Indicates if the simulation should not be animated |

#### Defined in

[types.ts:290](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/types.ts#L290)

## Variables

### D3NetworkGraph

• `Const` **D3NetworkGraph**: `DefineComponent`<{}, {}, `any`\>

#### Defined in

[shims-vue.d.ts:4](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/shims-vue.d.ts#L4)

## Functions

### useSimulation

▸ **useSimulation**(`nodes`, `links`, `rect`, `options`): `Object`

Composition function used by the D3NetworkGraph component to create a d3 simulation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodes` | `Readonly`<`Ref`<[`D3Node`](modules.md#d3node)[]\>\> | The nodes of the graph |
| `links` | `Readonly`<`Ref`<[`D3Link`](modules.md#d3link)[]\>\> | The links of the graph |
| `rect` | `Readonly`<`Ref`<{ `height`: `number` ; `width`: `number`  }\>\> | The size of the graph |
| `options` | [`useSimulationOptions`](modules.md#usesimulationoptions) | The options of the simulation |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `graph` | { `links`: [`D3LinkSimulation`](modules.md#d3linksimulation)[] ; `nodes`: [`D3NodeSimulation`](modules.md#d3nodesimulation)[]  } | The graph |
| `graph.links` | [`D3LinkSimulation`](modules.md#d3linksimulation)[] | - |
| `graph.nodes` | [`D3NodeSimulation`](modules.md#d3nodesimulation)[] | - |
| `simulation` | `Ref`<`Simulation`<[`D3NodeSimulation`](modules.md#d3nodesimulation), [`D3LinkSimulation`](modules.md#d3linksimulation)\>\> | The d3 simulation |

**`Remarks`**

This function can be used to create a d3 simulation for a network graph without components

#### Defined in

[useSimulation.ts:36](https://github.com/la-fabrique/vue-d3-network-graph/blob/a33e03f/src/useSimulation.ts#L36)
