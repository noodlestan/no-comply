# @purrtrait/code-layout — Architecture

> This file extends [purrtrait architecture](../../../architecture/purrtrait.md).

Generated: 2026-06-26
By: opencode

## Project Context

`@purrtrait/code-layout` provides the foundational type system and layout computation pipeline for code rendering across the @purrtrait ecosystem. It defines the vocabulary for representing code as structured layout trees and transforms those trees into formatted lines.

**Consumes**: Nothing — zero runtime and peer dependencies.

**Provides**: To downstream packages like `@purrtrait/lang-ts` and `@purrtrait/solid-code`:
- Core domain types (`CodeLayoutToken`, `CodeLayoutGroup`, `CodeLayoutBlock`, `CodeLayoutNode`)
- Language plugin interface (`CodeLayoutLanguage`)
- Layout computation dispatch (`computeLayout`)
- Layout formatting (`formatLayout`)
- Context creation for layout configuration

**API categories**: Types, Contexts, Compute, Format.

## Design Principles

### Layout Computation Patterns

- **Separation of tree construction from formatting** — `computeLayout` builds the syntax tree; `formatLayout` handles line-breaking and indentation. Independent concerns with no cross-imports.

- **Plugin-driven dispatch** — Layout delegates entirely to registered `CodeLayoutLanguage` handlers with no knowledge of specific languages. The compute layer is a thin dispatcher.

- **Composition over configuration** — Layout is built by composing small atomic functions rather than a configuration-driven approach. Language handlers compose their own internal helpers.

- **Zero-dependency minimalism** — Pure type definitions and pure functions. No runtime dependencies. The entire library is self-contained types + two pure functions.

### Type System Patterns

- **Discriminated union node tree** — All layout nodes use a `type` string discriminator (`token`, `group`, `block`) enabling exhaustive pattern matching in consumers.

- **Generic token kinds** — `CodeLayoutToken<T>` is generic over its `kind`, allowing type-safe token creation while maintaining a unified `CodeLayoutNode` union.

- **Immutable transformations** — `formatLayout` produces new `CodeLayoutLine[]` objects via spread; no in-place mutation of input nodes.

## Structure

```
src/
├── types.ts                    # Core domain types: tokens, groups, blocks, lines
├── contexts/CodeLayout/        # Context options, value, and linker type definitions
│   ├── types.ts                # CodeLayoutContextOptions, CodeLayoutContextValue
│   └── createCodeLayoutContext.ts
├── compute/helpers/
│   └── computeLayout.ts        # Dispatches AST nodes to registered language plugins
└── format/helpers/
    └── formatLayout.ts         # Recursive try-inline formatter producing CodeLayoutLine[]
```

A small library with four focused modules. `helpers/` directories contain a single implementation each — no nested expansions needed.

## Main Patterns

- **Types** — Domain vocabulary: `CodeLayoutToken`, `CodeLayoutGroup`, `CodeLayoutBlock`, `CodeLayoutNode` (discriminated union), `CodeLayoutLanguage` (plugin interface), `CodeLayoutLine` (formatted output).

- **Contexts** — `createCodeLayoutContext` factory accepts options (`langs`, `columns`, `linker`) and returns a `CodeLayoutContextValue` with sensible defaults. The `CodeNodeLinker` type enables URL resolution for tokens.

- **Compute** — `computeLayout(ctx, lang, node)` is a thin dispatcher that finds the registered language handler and invokes its `layout` method. Throws if no handler is registered.

- **Format** — `formatLayout(nodes, cols, indent)` is a recursive formatter that attempts to inline groups into single lines, breaking only when column width is exceeded. Produces `CodeLayoutLine[]` with indentation metadata.

## Layers

- **Foundation → Configuration → Orchestration → Rendering** — Strictly acyclic downward flow.

- `types.ts` is the single foundation; both `contexts/` and `format/` depend only on it.

- `compute/` depends on `types/` and `contexts/` — it needs the context value to dispatch to language handlers.

- `format/` is fully independent of `contexts/` and `compute/`. It receives raw `CodeLayoutNode[]` and produces `CodeLayoutLine[]` with no context awareness.

- No circular dependencies. No upward imports.

## External dependencies

- **Runtime dependencies**: None. Zero runtime dependencies.
- **Peer dependencies**: None.

### Tradeoffs

- **Plugin flexibility vs type safety** — Language handlers receive generic `object | string` nodes, trading specific AST typing for universal applicability.
- **Recursive formatting vs iterative** — `formatLayout` uses recursive tree traversal for clarity, accepting stack depth as a tradeoff.
- **Immutable output vs performance** — Produces new line objects per call; no caching or memoization of layout results.
