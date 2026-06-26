# @purrtrait/view-tsx — Architecture

> This file extends [purrtrait architecture](../../../architecture/purrtrait.md).

> Generated: 2026-06-26 | by: opencode

## Project Context

**Contribution** — Provides a pure data pipeline for extracting a structured view model (`TSXView`) from TSX source code. Targets elements marked with a specific attribute, replaces them with placeholder components, and returns a structured model for consumers to render or recompile.

**Consumes** — `@purrtrait/client-tsx` for TSX source parsing, AST node types, and AST printing.

**Provides** — `extractTSXView` entry point, prop-evaluation helpers, configuration constants, and TypeScript type definitions for the view model.

## Design Principles

**Pure data pipeline** — `string → ts.SourceFile → TSXView`. Synchronous, side-effect-free transformation. No I/O, no reactivity, no framework coupling.

**Framework-agnosticism** — The extracted `TSXView` model is plain data with no framework-specific constructs. Consumers decide how to render or recompile (SolidJS, React, vanilla).

**Configuration over convention** — All magic strings (target attribute name, placeholder component name, prop keys) are overridable via `TSXViewOptions`. Defaults are exported as constants for reference.

**Separation of parsing from interpretation** — `extractTSXView` produces a structured view model; prop evaluation is delegated to an injected `PropEvaluator` callback. The library never interprets values.

**Encapsulation via private modules** — Internal implementation details hidden behind barrel exports. `private/` directory contains 10 internal modules that are never re-exported.

## Structure

```
src/
├── index.ts                 — barrel re-export
├── constants.ts             — default config values
├── types.ts                 — TSXView, TSXViewTarget, TSXViewOptions, PropEvaluator
├── extractTSXView.ts        — main entry: parse, find targets, replace placeholders, return view
├── helpers/
│   ├── index.ts             — barrel re-export
│   └── viewPropsByTarget.ts — evaluate props for all targets
└── private/
    ├── index.ts             — barrel re-export
    ├── createOptions.ts     — config merging
    └── ...                  — findTargetNodes, replaceTargets, wrapFragment, etc.
```

- `private/` contains 10 internal modules for AST traversal, placeholder generation, and source normalisation
- `helpers/` provides prop-evaluation utilities that depend only on `types.ts`
- `types.ts` defines the core view model types and `PropEvaluator` callback interface

## Main patterns

**Entry-point function** — `extractTSXView` is the single public entry point that orchestrates the entire pipeline.

**Helper utilities** — `viewTargetProps` and `viewPropsByTarget` provide prop evaluation via callback injection.

**Configuration constants** — Default values for target attribute names, placeholder component names, and prop keys.

**Type definitions** — Core view model types (`TSXView`, `TSXViewTarget`, `TSXViewOptions`, `PropEvaluator`).

## Layers

Unidirectional flow: `index.ts` re-exports public API. Public API (`extractTSXView`, `helpers`, `constants`, `types`) depends on `private/` modules. `private/` modules depend on `types.ts`, `constants.ts`, and `@purrtrait/client-tsx`. No circular dependencies exist.

- `index.ts` → `extractTSXView` → `private/*` + `types.ts` + `@purrtrait/client-tsx`
- `helpers/` → `types.ts` only
- `private/*` → `types.ts` + `constants.ts` + `typescript` + `@purrtrait/client-tsx`

## External Dependencies

| Dependency | Type | Purpose |
| --- | --- | --- |
| `@purrtrait/client-tsx` | runtime | TSX source parsing, AST node types, AST printing |
| `typescript` | peer | Compiler API for AST traversal and construction (`ts.Node`, `ts.factory`, `ts.visitEachChild`) |

### Tradeoffs

- **Simplicity vs extensibility** — Single entry point (`extractTSXView`) keeps API simple but limits fine-grained control over pipeline steps
- **Configuration vs convention** — Many configuration options via `TSXViewOptions` provide flexibility but increase setup complexity
- **Accuracy vs performance** — Full TypeScript AST parsing ensures accuracy but is slower than regex-based approaches for large snippets
