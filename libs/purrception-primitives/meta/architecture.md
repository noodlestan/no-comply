# `@purrception/primitives` — Architecture

- **Generated**: 2026-06-25
- **By**: sub-agent

## Design Principles

1. **Zero assumptions** — No runtime logic, no framework coupling, no runtime dependencies. Purely structural types.
2. **Composition over inheritance** — Entity shapes are built by intersecting base types (`EntityDataBasePartial` + `DocsData` + `symbols`). Upstream packages extend via intersection.
3. **Generic threading** — Context (`C`) and entity (`T`) types are threaded through the extraction pipeline via generics, preserving type safety across stages.

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

## Dependency Flow

- **Inbound**: `@purrception/source-fs`, `@purrception/lang-ts`, `@purrception/lang-ts-extract`, `@no-comply/meta` all depend on `@purrception/primitives`.
- **Outbound**: None — zero runtime or peer dependencies.
- **Circular deps**: None. This is the bottom layer with no dependents pointing back.

## External Dependencies

None (`"dependencies": {}`).

## Peer Dependencies

None.

## Module Boundaries

The package is a single flat module:

```
src/
  index.ts   — barrel re-export
  types.ts   — all type definitions (~57 lines, 11 exported types)
```

No internal module boundaries exist — all types are co-located in one file. This is appropriate for a shared primitives package.
