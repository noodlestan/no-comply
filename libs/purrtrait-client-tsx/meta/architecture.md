# @purrtrait/client-tsx — Architecture

> This file extends [purrtrait architecture](../../../architecture/purrtrait.md).

**Generated:** 2026-06-25
**By:** sub-agent

## Layering

```
src/
├── nodes/          Layer 0: Value models (lowest-level data types)
├── parse/          Layer 1: Raw TS AST parsing
├── extract/        Layer 2: Typed value extraction from parsed AST
│   ├── helpers/public    Public extraction utilities
│   └── helpers/private/  Internal extraction helpers (attribute parsing)
└── evaluate/       Layer 3: Runtime evaluation bridge
```

## Dependency Flow

```
nodes  ←── no dependencies on other internal modules
   ↑
  parse  ←── depends on `typescript` only
   ↑
 extract  ←── depends on `nodes` (types + constructors), `typescript`
   ↑
 evaluate  ←── depends on `nodes` (types), compiler interface (injected)
```

- Flow is **unidirectional bottom-up**: `nodes` → `parse`/`extract` → `evaluate`.
- `extract` depends on `nodes` for its return types.
- `evaluate` depends on `nodes` for its input types.
- No circular dependencies.
