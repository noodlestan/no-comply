# purrtrait

> This file extends [no-comply architecture](./nocomply.md).

This document consolidates design principles, layering, dependency flow, and external dependencies across all @purrtrait packages. It serves as a single source of truth for contributors.

## Design Principles

### Core Abstractions

- **Separation of concerns across packages** — AST structure (`@purrception/lang-ts`), layout model (`@purrtrait/code-layout`), and rendering (`@purrtrait/solid-code`) are separate packages. Each layer bridges specific concerns without cross-dependency.

### Layout Computation Patterns

- **Separation of tree construction from formatting** — `computeLayout` builds the syntax tree; `formatLayout` handles line-breaking and indentation. Independent concerns.

- **Plugin-driven dispatch** — Layout delegates entirely to registered `CodeLayoutLanguage` handlers with no knowledge of specific languages.

- **Composition over configuration** — Layout is built by composing small atomic functions (per-expression, per-declaration handlers) rather than a configuration-driven approach.

- **Zero-dependency minimalism** — Pure type definitions and pure functions. No runtime dependencies in layout computation.

### Parsing & Evaluation Patterns

- **Separation of parsing from interpretation** — `parseSource` produces a raw TS AST, `extractProps` transforms the AST into domain models, `evaluateValue` executes models via an injected compiler. Each concern is independent.

- **Thin typed wrappers over raw TS AST** — Rather than building a full custom AST, the library wraps `ts.Node` with lightweight tagged types (`TSXNode`). Keeps the library small and avoids version drift.

- **Dependency inversion for runtime evaluation** — `ICompilerAPI` is an interface; the library does not depend on any specific compiler, letting consumers choose their evaluation backend.

- **Pure data pipeline** — Data flows as plain objects with no mutation or side effects. Example: `string → ts.SourceFile → Record<string, TSXNode> → evaluated values`.

- **Framework-agnosticism** — The extracted `TSXView` model is plain data with no framework-specific constructs. Consumers determine how to render or recompile.

### SolidJS Rendering Patterns

- **Explicit context propagation** — All components consume context via SolidJS `Context` API rather than global state or module-level singletons. Misuse is caught eagerly by `useSolidCodeLayoutContext()`.

- **Dependency injection over configuration** — The `linker` function and `link` component are injectable at the context level, allowing consumers to replace rendering behavior without modifying components.

- **Configuration over convention** — All magic strings (attribute name, placeholder name, prop names) are overridable via `TSXViewOptions`.

### Extensibility

- **Link injection** — Override the `link` component to replace the default `<a>`-based rendering.
- **Linker function** — Supply a `linker: CodeNodeLinker` to dynamically resolve values to URLs.
- **Column configuration** — Adjust `columns` to control line-wrapping width (per-block via `CodeBlock` or globally via context).

- **Language plugins** — Register custom `CodeLayoutLanguage` implementations via `langs` array in context options.

- **Compiler interface** — `evaluateValue` takes an `ICompilerAPI`, letting consumers plug in any compiler implementation (e.g., `@purrpose/client-babel`).

- **Prop extraction interception** — `extractProps` accepts an optional `ignore` callback to filter attributes.

- **New node types** — Adding a new `TSXNodeType` requires a new union member in `TypescriptNode` and a matching `create*` function.

### Key Trade-offs

- **Performance vs flexibility** — Reactive layout computation per render is flexible but recomputes on signal changes.
- **Abstraction vs simplicity** — Multi-layer architecture (`ctx → provider → component`) adds boilerplate but is highly extensible.
- **Bundle size vs DX** — Published source-direct avoids tree-shaking complexity but requires a bundler.

## Layering

- **Foundation to renderers** — `types.ts` at the bottom, `contexts/` for context creation, `compute/` for dispatching to language plugins, `format/` for pure tree-to-lines transformation. Code layout models at the bottom, SolidJS renderers at the top.

- **Independent format layer** — `format/` is fully independent of `contexts/` and `compute/`. Expressions don't import from declarations; subdomains are isolated.

### Internal Module Boundaries

- **`src/private/`**: Low-level JSX renderers (`renderLine`, `renderToken`, `SolidCodeLinkDefault`). Internal only.
- **`src/contexts/`**: Type definitions extending `@purrtrait/code-layout` types; context factory. Public.
- **`src/providers/`**: Context provider component and consumer hook. Public.
- **`src/components/`**: Public SolidJS components. Public.
- **`src/providers/*/private/`**: Per-feature internal utilities. Internal.

### External Monorepo Layering

- **`@purrtrait/code-layout`** — contract: `CodeLayoutLanguage`, `CodeLayoutNode` types.
- **`@purrtrait/lang-ts`** — adapter: maps AST nodes → layout nodes.
- **`@purrception/lang-ts`** — source: lightweight TypeScript AST definitions.

## Dependency Flow

### Internal Module Flow

- `types` ← `contexts` ← `compute`
- `tsCodeLayout` → `layoutCode` → `layoutDeclaration` / `layoutExpression` → specialized handlers → token factories + helpers.
- `nodes` ← `parse` ← `extract` ← `evaluate` (unidirectional bottom-up).
- Internal upward: `private/` → `contexts/` → `providers/` → `components/` → `src/index.ts`.

## External Dependencies

### @purrtrait/code-layout

- **Runtime dependencies**: None. Zero runtime dependencies.
- **Peer dependencies**: None.

### @purrtrait/lang-ts

- **Runtime dependencies**: None.
- **Peer dependencies**: None.

### @purrtrait/client-tsx

- **Runtime dependencies**: None. Zero runtime dependencies.
- **Peer dependencies**: `typescript` `^5.9.3` — TS compiler API for parsing (`ts.createSourceFile`, `ts.isXxx` guards, `ts.createPrinter`).

### @purrtrait/solid-code

- **Runtime dependencies**: `@purrtrait/code-layout` `0.0.11` — Layout computation and shared types. `@purrtrait/lang-ts` `0.0.11` — TypeScript language support (transitive).
- **Peer dependencies**: `solid-js` `^1.9.5` — SolidJS runtime (JSX, components, context, signals).

### @purrtrait/view-tsx

- **Runtime dependencies**: `@purrtrait/client-tsx` — TSX source parsing, AST node types, AST printing.
- **Peer dependencies**: `typescript` `^5.9.3` — Compiler API used internally for AST traversal and construction.
