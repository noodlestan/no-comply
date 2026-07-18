# Artificial Language Module

## Purpose

This module defines the artificial language used to describe and generate context resources. It provides the foundational vocabulary, syntax, and semantics for declaring structured context value types – think: data primitives and "classes".

## Architecture

The language is built on a self-describing bootstrap model where the meta-model and its instances co-define each other.

### Bootstrap Cycle

```
ValueType: Primitive describes → Primitive: Record, List, Map, Enum, Identifier, ...
Primitive: Record provides semantics for → ValueType: Primitive (and all other ValueTypes)
```

Neither exists independently; together they form the bootstrap layer. This circular dependency is intentional and necessary for a self-describing system.

### Verification

The bootstrap consistency is verified by:

1. Taking the `ValueType: Primitive` definition
2. Showing that each primitive (`Record`, `List`, `Map`, `Enum`, `Identifier`, etc.) matches its schema
3. Showing that each primitive's attributes map back to `PrimitiveName`, `PrimitiveParams`, `PrimitiveAttributes`, etc.

This verification process lives in `./_processes/verify-bootstrap__process__art.md` and is executed as part of Phase 6.

### Components

1. **ValueType: Primitive** - Meta-model describing interpreter-defined primitives
2. **Primitives** - Built-in primitives (Record, List, Map, Enum, Identifier, etc.)
3. **Bootstrap** - ValueType: Primitive describes primitives; primitives provide semantics for ValueType: Primitive

## Directory Structure

```
_artificials/language/
├── _index__art.md           # Module entry point
├── README.md                # This file
├── _wip.md                  # Work in progress and planning
├── grammar/                 # Grammar definitions (future)
│   └── _index__art.md
└── primitives/              # Primitive definitions
    ├── _value-types/        # ValueType definitions
    │   ├── _primitive__value-type__art.md
    │   ├── _primitive-name__value-type__art.md
    │   └── ...
    └── _primitives/         # Primitive definitions
        ├── _record__primitive__art.md
        ├── _list__primitive__art.md
        └── ...
```

## File Naming Convention

Files follow the pattern: `_{name}__{type}__art.md`

Where:

- `{name}` - kebab-case identifier
- `{type}` - resource type (value-type, primitive, etc.)
- `art` - artificial language marker

## Dependencies

- `.agents/domains/_artificials/definitions/index.md` - Core definitions
- `.agents/domains/_artificials/grammars/index.md` - Grammar rules

## Usage

This module is used by:

<!-- WIP -->
