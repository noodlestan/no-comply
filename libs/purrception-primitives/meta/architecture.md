# `@purrception/primitives` — Architecture

> This file extends [purrception architecture](../../../architecture/purrception.md).

- **Generated**: 2026-06-25
- **By**: sub-agent

## Layering

```
┌──────────────────────────────────────────────────┐
│  @no-comply/meta                                 │
│  Domain-specific entities (Component, Context…)   │
│  Extends EntityDataBase via intersection          │
└──────────────┬───────────────────────────────────┘
               │ depends on
┌──────────────▼───────────────────────────────────┐
│  @purrception/source-fs                          │
│  Filesystem traversal & orchestration            │
│  Consumes EntityDataBase, EntityExtractContext…   │
└──────────────┬───────────────────────────────────┘
               │ depends on
┌──────────────▼───────────────────────────────────┐
│  @purrception/lang-ts / @purrception/lang-ts-ext │
│  TS AST parsing — consumes DeclaredSymbol etc.   │
└──────────────┬───────────────────────────────────┘
               │ depends on
┌──────────────▼───────────────────────────────────┐
│  @purrception/primitives   ◄── YOU ARE HERE      │
│  Shared types (EntityDataBase, ExtractContext…)   │
│  Zero dependencies                                │
└──────────────────────────────────────────────────┘
```

## Module Boundaries

The package is a single flat module:

```
src/
  index.ts   — barrel re-export
  types.ts   — all type definitions (~57 lines, 11 exported types)
```

No internal module boundaries exist — all types are co-located in one file. This is appropriate for a shared primitives package.
