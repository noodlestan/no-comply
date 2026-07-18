# Artificial Structures

## Definitions

## Value Types

### Value Type: Grammar Construct

**Primitive:** Record

**Fields:**

- `id` - kebab case identifier. Example: `example-inline".
- `name` - canonical name. Example: "ExampleInline".
- `category` - Name of the parent block. Examples: "Examples", "Directives", "Statements".
- `purpose` - What this construct offers. Example: "Provide a way to illustrate concepts and instructions next to the source.".
- `description` - Example: "An ExampleInline can be _Suffix_..."
- `schema` - Schematic description of the construct's structure.
- `rules` - Rules for generating the construct.
- `syntax` - Construct syntax in a `art` code block.
- `examples` - Example of applying the construct and its variants according to context.

### Structure: Grammar

> Identifying fields

- `id` - kebab case identification of the grammar. Example: "artificial".
- `name` - canonical name. Example: "artificial".
- `constructs` - flat list of constructors classified with category
