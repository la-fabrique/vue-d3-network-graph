[vue-d3-network-graph](../README.md) / [Exports](../modules.md) / D3Link

# Interface: D3Link

Represents a link in the graph

## Hierarchy

- `SimulationLinkDatum`<[`D3Node`](D3Node.md)\>

  ↳ **`D3Link`**

## Table of contents

### Properties

- [color](D3Link.md#color)
- [id](D3Link.md#id)
- [index](D3Link.md#index)
- [name](D3Link.md#name)
- [source](D3Link.md#source)
- [target](D3Link.md#target)

## Properties

### color

• `Optional` **color**: `string`

Link color (stroke), e.g. red, #aa00bb,

#### Defined in

[src/types.ts:60](https://github.com/la-fabrique/vue-d3-network-graph/blob/6da98f3/src/types.ts#L60)

___

### id

• `Optional` **id**: `string`

Link id. If not provided uses array index

#### Defined in

[src/types.ts:52](https://github.com/la-fabrique/vue-d3-network-graph/blob/6da98f3/src/types.ts#L52)

___

### index

• `Optional` **index**: `number`

The zero-based index into the links array. Internally generated when calling ForceLink.links(...)

#### Inherited from

SimulationLinkDatum.index

#### Defined in

node_modules/@types/d3-force/index.d.ts:90

___

### name

• `Optional` **name**: `string`

Link name. If not provided uses: 'link [link_id]'

#### Defined in

[src/types.ts:56](https://github.com/la-fabrique/vue-d3-network-graph/blob/6da98f3/src/types.ts#L56)

___

### source

• **source**: `string` \| `number` \| [`D3Node`](D3Node.md)

Link’s source node.
For convenience, a link’s source and target properties may be initialized using numeric or string identifiers rather than object references; see link.id.
When the link force is initialized (or re-initialized, as when the nodes or links change), any link.source or link.target property which is not an object
is replaced by an object reference to the corresponding node with the given identifier.
After initialization, the source property represents the source node object.

#### Inherited from

SimulationLinkDatum.source

#### Defined in

node_modules/@types/d3-force/index.d.ts:78

___

### target

• **target**: `string` \| `number` \| [`D3Node`](D3Node.md)

Link’s source link
For convenience, a link’s source and target properties may be initialized using numeric or string identifiers rather than object references; see link.id.
When the link force is initialized (or re-initialized, as when the nodes or links change), any link.source or link.target property which is not an object
is replaced by an object reference to the corresponding node with the given identifier.
After initialization, the target property represents the target node object.

#### Inherited from

SimulationLinkDatum.target

#### Defined in

node_modules/@types/d3-force/index.d.ts:86
