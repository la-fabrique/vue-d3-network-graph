[vue-d3-network-graph](../../README.md) / [Exports](../modules.md) / D3Node

# Interface: D3Node

Represents a node in the graph

## Hierarchy

- `SimulationNodeDatum`

  ↳ **`D3Node`**

## Table of contents

### Properties

- [color](D3Node.md#color)
- [cssClass](D3Node.md#cssclass)
- [fx](D3Node.md#fx)
- [fy](D3Node.md#fy)
- [group](D3Node.md#group)
- [height](D3Node.md#height)
- [id](D3Node.md#id)
- [index](D3Node.md#index)
- [innerSVG](D3Node.md#innersvg)
- [name](D3Node.md#name)
- [size](D3Node.md#size)
- [vx](D3Node.md#vx)
- [vy](D3Node.md#vy)
- [width](D3Node.md#width)
- [x](D3Node.md#x)
- [y](D3Node.md#y)

## Properties

### color

• `Optional` **color**: `string`

Node color, e.g. red, #aa00bb,

#### Defined in

[src/types.ts:18](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L18)

___

### cssClass

• `Optional` **cssClass**: `string`[]

Node css class names

#### Defined in

[src/types.ts:22](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L22)

___

### fx

• `Optional` **fx**: ``null`` \| `number`

Node’s fixed x-position (if position was fixed)

#### Inherited from

SimulationNodeDatum.fx

#### Defined in

node_modules/@types/d3-force/index.d.ts:52

___

### fy

• `Optional` **fy**: ``null`` \| `number`

Node’s fixed y-position (if position was fixed)

#### Inherited from

SimulationNodeDatum.fy

#### Defined in

node_modules/@types/d3-force/index.d.ts:56

___

### group

• `Optional` **group**: `number`

#### Defined in

[src/types.ts:42](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L42)

___

### height

• `Optional` **height**: `number`

Node height

#### Defined in

[src/types.ts:34](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L34)

___

### id

• `Optional` **id**: `number`

Node id. If not provided uses array index

#### Defined in

[src/types.ts:10](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L10)

___

### index

• `Optional` **index**: `number`

Node’s zero-based index into nodes array. This property is set during the initialization process of a simulation.

#### Inherited from

SimulationNodeDatum.index

#### Defined in

node_modules/@types/d3-force/index.d.ts:32

___

### innerSVG

• `Optional` **innerSVG**: `Object`

Node svg image

#### Type declaration

| Name | Type |
| :------ | :------ |
| `innerHtml` | `string` |
| `viewBox` | `string` |

#### Defined in

[src/types.ts:38](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L38)

___

### name

• `Optional` **name**: `string`

Node name. If not provided uses: 'node [node_id]'

#### Defined in

[src/types.ts:14](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L14)

___

### size

• `Optional` **size**: `number`

Node size

#### Defined in

[src/types.ts:26](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L26)

___

### vx

• `Optional` **vx**: `number`

Node’s current x-velocity

#### Inherited from

SimulationNodeDatum.vx

#### Defined in

node_modules/@types/d3-force/index.d.ts:44

___

### vy

• `Optional` **vy**: `number`

Node’s current y-velocity

#### Inherited from

SimulationNodeDatum.vy

#### Defined in

node_modules/@types/d3-force/index.d.ts:48

___

### width

• `Optional` **width**: `number`

Node width

#### Defined in

[src/types.ts:30](https://github.com/la-fabrique/vue-d3-network-graph/blob/9b0a429/src/types.ts#L30)

___

### x

• `Optional` **x**: `number`

Node’s current x-position

#### Inherited from

SimulationNodeDatum.x

#### Defined in

node_modules/@types/d3-force/index.d.ts:36

___

### y

• `Optional` **y**: `number`

Node’s current y-position

#### Inherited from

SimulationNodeDatum.y

#### Defined in

node_modules/@types/d3-force/index.d.ts:40
