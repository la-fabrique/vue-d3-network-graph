# API

## Components 
### D3NetworkGraph

**props**

| Name     | Type                                    | Default   | Description                                                                                                                                  |
| -------- | --------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| nodes    | Array<[D3Node](modules.md#d3node)> | []        | Array of nodes                                                                                                                               |
| links    | Array<[D3Link](modules.md#d3link)> | []        | Array of links                                                                                                                               |
| options? | [D3Options](modules.md#d3options)  | undefined | [Links](modules.md#d3linkoptions), [nodes](modules.md#d3nodeoptions), [layout](modules.md#d3layoutoptions) and [simulation](modules.md#d3simulationoptions) Options |

**events**

| Name         | Type                                           | Description                                         |
| ------------ | ---------------------------------------------- | --------------------------------------------------- |
| 'node-click' | [function](modules.md#d3neworkgraphemits) | Callback function called when a node is clicked     |
| 'link-click' | [function](modules.md#d3neworkgraphemits) | Callback function called when a node is mouseovered |


## Events

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

## Node types

### D3Link

Ƭ **D3Link**: `Object`

Represents a link in the graph

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` \| `number` | Node source id |
| `target` | `string` \| `number` | Node target id |
| `id?` | `number` \| `string` | Unique link id. If not provided uses array index |
| `name?` | `string` | Link name |
| `labels?` | `string`[] | Link labels |
| `class?` | `string`[] | Link css class names |
| `twoWay?` | `boolean` | Is two-way link (bidirectional) |

___

### D3Node

Ƭ **D3Node**: `Object`

Represents a node in the graph

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` \| `string` | Unique node id. If not provided uses array index |
| `name?` | `string` | Node name |
| `labels?` | `string`[] | Node labels |
| `class?` | `string`[] | Node css class names, |
| `size?` | [`D3NodeSize`](modules.md#d3nodesize) | Node size |
| `innerSVG?` | { `viewBox`: `string` ; `innerHtml`: `string`  } | Node svg image |
| `innerSVG.viewBox` | `string` | - |
| `innerSVG.innerHtml` | `string` | - |
| `group?` | `number` | Group id |
| `position?` | { `x?`: `number` ; `y?`: `number`  } | Initial fixed position |
| `position.x?` | `number` | - |
| `position.y?` | `number` | - |

___

### D3NodeSize

Ƭ **D3NodeSize**: `number` \| { `width`: `number` ; `height`: `number`  }

Represents a node size

## Options types

### D3Options

Ƭ **D3Options**: `Object`

Graph options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `links?` | [`D3LinkOptions`](modules.md#d3linkoptions) | Default link options |
| `nodes?` | [`D3NodeOptions`](modules.md#d3nodeoptions) | Default node options |
| `simulation?` | [`D3SimulationOptions`](modules.md#d3simulationoptions) | Simulation options |
| `layout?` | [`D3LayoutOptions`](modules.md#d3layoutoptions) | Layout options |

___

### D3NodeOptions

Ƭ **D3NodeOptions**: `Object`

Default node options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Default node size **`Default Value`** `25` |
| `font?` | { `size?`: `number`  } | - |
| `font.size?` | `number` | Default node size **`Default Value`** `12` |

___

### D3LinkOptions

Ƭ **D3LinkOptions**: `Object`

Default link options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | Default link width **`Default Value`** `1` |
| `font?` | { `size?`: `number`  } | - |
| `font.size?` | `number` | Default link font size **`Default Value`** `12` |

___

### D3SimulationOptions

Ƭ **D3SimulationOptions**: `Object`

Simulation options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `force` | { `x?`: `number` ; `y?`: `number` ; `charge?`: `number` ; `collide?`: `number`  } | d3 force configurations |
| `force.x?` | `number` | d3 forceX strenght between 0 and 1 **`Default Value`** `0.1` |
| `force.y?` | `number` | d3 forceY strenght between 0 and 1 **`Default Value`** `0.1` |
| `force.charge?` | `number` | d3 forceManyBody strenght smaller than 0 **`Default Value`** `-300` |
| `force.collide?` | `number` | d3 forceCollide radius **`Default Value`** `45` |

___

### D3LayoutOptions

Ƭ **D3LayoutOptions**: `Object`

Layout options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `draggable?` | `boolean` | Indicates if the nodes should be draggable **`Default Value`** `false` |
| `directed?` | `boolean` | Indicate if the graph is directed. Edge arrow will be displayed **`Default Value`** `false` |
| `static?` | `boolean` | Indicates if the simulation should not be animated **`Remarks`** Use this option if you want to use the simulation to calculate the positions of the nodes but you don't want to render them each 'tick' **`Default Value`** `false` |
| `theme?` | `Theme` | Css Theme **`Default Value`** `teal` |
| `dark?` | `boolean` | Indicate if is dark mode enabled |

