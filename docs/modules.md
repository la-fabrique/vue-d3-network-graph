[vue-d3-network-graph](../README.md) / Exports

# vue-d3-network-graph

## Table of contents

### Interfaces

- [D3Link](interfaces/D3Link.md)
- [D3Node](interfaces/D3Node.md)

### Type Aliases

- [D3LayoutOptions](modules.md#d3layoutoptions)
- [D3LinkOptions](modules.md#d3linkoptions)
- [D3LinkOptionsColors](modules.md#d3linkoptionscolors)
- [D3NeworkGraphEmits](modules.md#d3neworkgraphemits)
- [D3NodeOptions](modules.md#d3nodeoptions)
- [D3NodeOptionsColors](modules.md#d3nodeoptionscolors)
- [D3Options](modules.md#d3options)
- [D3SimulationOptions](modules.md#d3simulationoptions)

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
| `directed?` | `boolean` | Indicate if the graph is directed. Edge arrow will be displayed |
| `draggables?` | `boolean` | Indicates if the nodes should be draggable |

#### Defined in

[src/types.ts:213](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L213)

___

### D3LinkOptions

Ƭ **D3LinkOptions**: `Object`

Default link options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors?` | [`D3LinkOptionsColors`](modules.md#d3linkoptionscolors) | Default link colors |
| `width` | `number` | Default link width |

#### Defined in

[src/types.ts:170](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L170)

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

[src/types.ts:130](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L130)

___

### D3NeworkGraphEmits

Ƭ **D3NeworkGraphEmits**: (`event`: ``"node-click"``, `$event`: `TouchEvent` \| `MouseEvent`, `node`: [`D3Node`](interfaces/D3Node.md)) => `void`(`event`: ``"link-click"``, `$event`: `TouchEvent` \| `MouseEvent`, `link`: [`D3Link`](interfaces/D3Link.md)) => `void`

#### Type declaration

▸ (`event`, `$event`, `node`): `void`

Event exposed by the D3NetworkGraph component

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"node-click"`` |
| `$event` | `TouchEvent` \| `MouseEvent` |
| `node` | [`D3Node`](interfaces/D3Node.md) |

##### Returns

`void`

▸ (`event`, `$event`, `link`): `void`

Event exposed by the D3NetworkGraph component

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"link-click"`` |
| `$event` | `TouchEvent` \| `MouseEvent` |
| `link` | [`D3Link`](interfaces/D3Link.md) |

##### Returns

`void`

#### Defined in

[src/types.ts:249](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L249)

___

### D3NodeOptions

Ƭ **D3NodeOptions**: `Object`

Default node options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors?` | [`D3NodeOptionsColors`](modules.md#d3nodeoptionscolors) | Default node colors |
| `font?` | { `size?`: `number`  } | - |
| `font.size?` | `number` | Default node size |
| `size?` | `number` | Default node size |

#### Defined in

[src/types.ts:116](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L116)

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

[src/types.ts:66](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L66)

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

[src/types.ts:227](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L227)

___

### D3SimulationOptions

Ƭ **D3SimulationOptions**: `Object`

Simulation options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `force` | { `charge`: `number` ; `x`: `number` ; `y`: `number`  } | d3 force configurations |
| `force.charge` | `number` | d3 forceManyBody strenght configuration |
| `force.x` | `number` | d3 forceX strenght configuration |
| `force.y` | `number` | d3 forceY strenght configuration |
| `static?` | `boolean` | Indicates if the simulation should not be animated **`Remarks`** Use this option if you want to use the simulation to calculate the positions of the nodes but you don't want to render them each 'tick' |

#### Defined in

[src/types.ts:184](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L184)

## Variables

### D3NetworkGraph

• `Const` **D3NetworkGraph**: `DefineComponent`<{}, {}, `any`\>

#### Defined in

[src/shims-vue.d.ts:4](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/shims-vue.d.ts#L4)

## Functions

### useSimulation

▸ **useSimulation**(`nodes`, `links`, `rect`, `options`): `Object`

Composition function used by the D3NetworkGraph component to create a d3 simulation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodes` | `Readonly`<`Ref`<[`D3Node`](interfaces/D3Node.md)[]\>\> | The nodes of the graph |
| `links` | `Readonly`<`Ref`<[`D3Link`](interfaces/D3Link.md)[]\>\> | The links of the graph |
| `rect` | `Readonly`<`Ref`<{ `height`: `number` ; `width`: `number`  }\>\> | The size of the graph |
| `options` | `ComputedRef`<[`D3SimulationOptions`](modules.md#d3simulationoptions)\> | The options of the simulation |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `graph` | { `links`: [`D3Link`](interfaces/D3Link.md)[] ; `nodes`: [`D3Node`](interfaces/D3Node.md)[]  } | The graph |
| `graph.links` | [`D3Link`](interfaces/D3Link.md)[] | - |
| `graph.nodes` | [`D3Node`](interfaces/D3Node.md)[] | - |
| `refresh` | () => `void` | Refresh the simulation |
| `simulation` | `Ref`<`Simulation`<[`D3Node`](interfaces/D3Node.md), [`D3Link`](interfaces/D3Link.md)\>\> | The d3 simulation |

**`Remarks`**

This function can be used to create a d3 simulation for a network graph without components

#### Defined in

[src/useSimulation.ts:26](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/useSimulation.ts#L26)
