# `@purrception/primitives` — Architecture

> This file extends [purrception architecture](../../../architecture/purrception.md).

## Project Context

`@purrception/primitives` is the foundational type package of the @purrception ecosystem. It defines all shared structural types — entities, symbols, documentation metadata, and extraction pipeline contracts — that every other @purrception package depends on. It has zero runtime dependencies and zero outbound imports.

Consumed by: `@purrception/lang-ts`, `@purrception/lang-ts-extract`, `@purrception/source-fs`. Also consumed by `@no-comply/meta` for domain-specific entity extensions.

API categories: entity base types, symbol representation, extraction pipeline contracts, documentation metadata.

## Design Principles

### Zero assumptions

No runtime logic, no framework coupling, no runtime dependencies. This package is purely structural types — no classes, no functions with behavior, no side effects. Every downstream package builds upon these types without inheriting any behavior.

### Foundation at bottom

This package sits at the absolute bottom of the @purrception dependency tree. No outbound dependencies. No outbound imports from other packages. All downstream packages depend on it; it depends on nothing. This makes circular dependencies structurally impossible.

### Single flat module

Appropriate for a types-only package. No internal module boundaries — all types co-located in one file (`types.ts`), re-exported through a barrel (`index.ts`).

## Structure

```
src/
  index.ts    — barrel re-export
  types.ts    — all type definitions (11 exported types)
```

No `helpers/`, no `private/`, no internal layering. The entire package is two files.

## Main patterns

- **Entity types** — `EntityDataBase`, `EntityDataBasePartial`, `EntityExtractContext`, `EntityExtractResult`. The core shapes that represent extracted code entities, threaded through the entire extraction pipeline via generics.

- **Symbol types** — `ImportedSymbol`, `DeclaredSymbol`, `LanguageDeclaredSymbol<L>`. Represent code symbols (imports, declarations) with generic language parameterization.

- **Documentation metadata** — `DocsData`, `DocsTags`. JSDoc tag representations attached to declarations.

- **Pipeline contracts** — `AnonymousEntityProcessor`, `EntityDecorator<T>`. Function signatures defining how entities flow through extraction and decoration stages.

## Layers

Single flat module. No internal layering — all types are peers within `types.ts`. Import direction is strictly outward: `index.ts` → `types.ts`. No circular dependencies possible.

## External dependencies

**Runtime dependencies:** None.

**Peer dependencies:** None.

**Dev dependencies:** `@no-comply/build-tools` (build), `@types/node` (type definitions).

### Tradeoffs

- **Flat structure** — Simplicity for a 57-line types file. No abstraction overhead. Appropriate at this scale.
- **No generics on entity base** — `EntityDataBase` is concrete (not generic), making downstream type extension rely on intersection (`&`) rather than parameterization. Deliberate: keeps the base type simple and predictable.
