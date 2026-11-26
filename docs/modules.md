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

> **D3NeworkGraphEmits** = \{(`event`, `$event`, `node`): `void`; (`event`, `$event`, `link`): `void`; \}

Event exposed by the D3NetworkGraph component

#### Call Signature

> (`event`, `$event`, `node`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"node-click"` |
| `$event` | `TouchEvent` \| `MouseEvent` |
| `node` | [`D3Node`](#d3node) |

##### Returns

`void`

#### Call Signature

> (`event`, `$event`, `link`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"link-click"` |
| `$event` | `TouchEvent` \| `MouseEvent` |
| `link` | [`D3Link`](#d3link) |

##### Returns

`void`

## Node types

### D3Link

> **D3Link** = `object`

Represents a link in the graph

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-source"></a> `source` | `string` \| `number` | Node source id |
| <a id="property-target"></a> `target` | `string` \| `number` | Node target id |
| <a id="property-id"></a> `id?` | `number` \| `string` | Unique link id. If not provided uses array index |
| <a id="property-name"></a> `name?` | `string` | Link name |
| <a id="property-labels"></a> `labels?` | `string`[] | Link labels |
| <a id="property-class"></a> `class?` | `string`[] | Link css class names |
| <a id="property-twoway"></a> `twoWay?` | `boolean` | Is two-way link (bidirectional) |

***

### D3Node

> **D3Node** = `object`

Represents a node in the graph

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-id-1"></a> `id` | `number` \| `string` | Unique node id. If not provided uses array index |
| <a id="property-name-1"></a> `name?` | `string` | Node name |
| <a id="property-labels-1"></a> `labels?` | `string`[] | Node labels |
| <a id="property-class-1"></a> `class?` | `string`[] | Node css class names, |
| <a id="property-size"></a> `size?` | [`D3NodeSize`](#d3nodesize) | Node size |
| <a id="property-innersvg"></a> `innerSVG?` | `object` | Node svg image |
| `innerSVG.viewBox` | `string` | - |
| `innerSVG.innerHtml` | `string` | - |
| <a id="property-group"></a> `group?` | `number` | Group id |
| <a id="property-position"></a> `position?` | `object` | Initial fixed position |
| `position.x?` | `number` | - |
| `position.y?` | `number` | - |

***

### D3NodeSize

> **D3NodeSize** = `number` \| \{ `width`: `number`; `height`: `number`; \}

Represents a node size

#### Union Members

`number`

***

##### Type Literal

\{ `width`: `number`; `height`: `number`; \}

| Name | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | Node width |
| `height` | `number` | Node height |

## Options types

### D3Options

> **D3Options** = `object`

Graph options

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-links"></a> `links?` | [`D3LinkOptions`](#d3linkoptions) | Default link options |
| <a id="property-nodes"></a> `nodes?` | [`D3NodeOptions`](#d3nodeoptions) | Default node options |
| <a id="property-simulation"></a> `simulation?` | [`D3SimulationOptions`](#d3simulationoptions) | Simulation options |
| <a id="property-layout"></a> `layout?` | [`D3LayoutOptions`](#d3layoutoptions) | Layout options |

***

### D3NodeOptions

> **D3NodeOptions** = `object`

Default node options

#### Properties

| Property | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-size-1"></a> `size?` | `number` | `25` | Default node size |
| <a id="property-font"></a> `font?` | `object` | `undefined` | - |
| `font.size?` | `number` | `12` | Default node size |

***

### D3LinkOptions

> **D3LinkOptions** = `object`

Default link options

#### Properties

| Property | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-width"></a> `width` | `number` | `1` | Default link width |
| <a id="property-font-1"></a> `font?` | `object` | `undefined` | - |
| `font.size?` | `number` | `12` | Default link font size |

***

### D3SimulationOptions

> **D3SimulationOptions** = `object`

Simulation options

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-force"></a> `force` | `object` | d3 force configurations |
| `force.x?` | `number` | d3 forceX strenght between 0 and 1 |
| `force.y?` | `number` | d3 forceY strenght between 0 and 1 |
| `force.charge?` | `number` | d3 forceManyBody strenght smaller than 0 |
| `force.collide?` | `number` | d3 forceCollide radius |

***

### D3LayoutOptions

> **D3LayoutOptions** = `object`

Layout options

#### Properties

| Property | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-draggable"></a> `draggable?` | `boolean` | `false` | Indicates if the nodes should be draggable |
| <a id="property-directed"></a> `directed?` | `boolean` | `false` | Indicate if the graph is directed. Edge arrow will be displayed |
| <a id="property-static"></a> `static?` | `boolean` | `false` | Indicates if the simulation should not be animated **Remarks** Use this option if you want to use the simulation to calculate the positions of the nodes but you don't want to render them each 'tick' |
| <a id="property-theme"></a> `theme?` | `Theme` | `teal` | Css Theme |
| <a id="property-dark"></a> `dark?` | `boolean` | `undefined` | Indicate if is dark mode enabled |
