# @purrtrait/client-tsx — Architecture

> This file extends [purrtrait architecture](../../../architecture/purrtrait.md).

**Generated:** 2026-06-26
**By:** opencode/mimo-v2.5-free

## Project Context

`@purrtrait/client-tsx` provides in-browser TypeScript/TSX parsing, typed AST node extraction, and runtime evaluation. It bridges raw `ts.SourceFile` output into lightweight domain models (`TSXNode`) that downstream packages (`@purrtrait/view-tsx`, `@purrtrait/solid-code`) consume for rendering and layout.

The package exposes a pure data pipeline: parse source → extract typed nodes → evaluate via an injected compiler. It is framework-agnostic — extracted `TSXView` models are plain data with no UI dependency.

## Design Principles

### Thin typed wrappers over raw TS AST

Rather than building a custom AST, the library wraps `ts.Node` with lightweight tagged types (`TSXNode`). Each node carries a `type` discriminator (`'jsx' | 'handler' | 'expression'`) and a reference to the original `ts.Node`. This keeps the library small and avoids version drift with the TypeScript compiler.

### Pure data pipeline

Data flows as plain objects with no mutation or side effects:

`string → ts.SourceFile → Record<string, TSXNode> → evaluated values`

Each layer produces new objects via spread; no in-place mutation occurs.

### Dependency inversion for runtime evaluation

`ICompilerAPI` is an interface. The library does not depend on any specific compiler, letting consumers inject their evaluation backend (e.g., `@purrpose/client-babel`). The compiler contract is defined locally since depending on `@purrpose/client-babel` directly would create a circular concern.

### Separation of parsing from interpretation

`parseSource` produces a raw TS AST, `extractProps` transforms the AST into domain models, `evaluateValue` executes models via the injected compiler. Each concern is independent and replaceable.

### Composition over configuration

Node creation is driven by small factory functions (`createTSXElementNode`, `createTSXHandlerNode`, `createTSXExpressionNode`) rather than a configuration object. Each factory handles one node type with explicit, composable logic.

### Graceful degradation

Resolution failures produce warnings and return original nodes rather than crashing. The pipeline is resilient to partial input.

## Structure

```
src/
├── nodes/          Value models — types.ts + createTSX*Node factories
├── parse/          Raw TS AST parsing — parseSource.ts
├── extract/        Typed value extraction
│   ├── types.ts + helpers/{extractProps, ...}
│   └── private/    Internal attribute extraction (extract*Attribute)
├── evaluate/       Runtime evaluation bridge
└── ast/            Dead code — duplicate of src/parse/parseSource.ts
```

`helpers/` contains small extraction utilities (e.g., `extractProps.ts`). `private/` in `extract/helpers/` contains internal attribute extraction functions not re-exported.

## Main patterns

### AST Node Factories (`nodes/`)

The `nodes/` module defines the `TSXNode` union type and three factory functions that wrap raw TypeScript AST nodes into typed domain objects. Each factory assigns a `type` discriminator and serializes the node for downstream processing.

### Source Parsing (`parse/`)

`parseSource` takes a TypeScript source string and returns a `ts.SourceFile`. This is the entry point of the pipeline. It depends only on the TypeScript compiler API.

### Typed Extraction (`extract/`)

The `extract/` module transforms raw `ts.SourceFile` into `Record<string, TSXNode>`. Public helpers handle prop extraction and node filtering. Internal `private/` helpers handle attribute-specific extraction (boolean, string, expression, children).

### Runtime Evaluation (`evaluate/`)

`evaluateValue` accepts a `TSXNode` and an injected `ICompilerAPI` to execute the node's serialized code. This layer bridges the domain model to actual runtime behavior, with the compiler as a swappable dependency.

## Layers

- **Layer 0 — `nodes/`**: Value types and factory functions. No dependencies on other internal modules. Foundation for all upstream layers.
- **Layer 1 — `parse/`**: Raw TS AST parsing. Depends on `typescript` compiler API only.
- **Layer 2 — `extract/`**: Typed value extraction. Depends on `nodes/` for return types and constructors.
- **Layer 3 — `evaluate/`**: Runtime evaluation bridge. Depends on `nodes/` for input types and an injected `ICompilerAPI`.

Flow is strictly unidirectional: `nodes` → `parse` → `extract` → `evaluate`. No circular dependencies.

## External dependencies

- **`typescript` `^5.9.3`** (peer) — TS compiler API for parsing (`ts.createSourceFile`), type guards (`ts.isXxx`), and serialization. No runtime dependencies.

### Tradeoffs

- **Compiler API coupling vs AST fidelity** — Wrapping `ts.Node` directly avoids maintaining a parallel AST but couples the library to TypeScript's internal node shapes.
- **Interface duplication vs circular imports** — `ICompilerAPI` duplicates `@purrpose/client-babel`'s contract locally to avoid a dependency cycle, trading DRY for modularity.
- **Dead code (`ast/`)** — The `ast/` directory duplicates `parse/parseSource.ts`. It is identified as dead code but not yet removed.
