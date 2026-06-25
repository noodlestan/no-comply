# @purrtrait/client-tsx — Architecture

**Generated:** 2026-06-25
**By:** sub-agent

## Design Principles

1. **Separation of parsing from interpretation.** `parseSource` produces a raw TS AST. `extractProps` transforms the AST into domain models. `evaluateValue` executes models via an injected compiler. Each concern is independent.

2. **Thin typed wrappers over raw TS AST.** Rather than building a full custom AST, the library wraps `ts.Node` with lightweight tagged types (`TSXNode`). This keeps the library small and avoids version drift from custom AST implementations.

3. **Dependency inversion for runtime evaluation.** `ICompilerAPI` is an interface — the library does not depend on any specific compiler (Babel, SWC, etc.), letting consumers choose their evaluation backend.

4. **Pure data pipeline.** Data flows as plain objects. No mutation, no side effects. The flow is `string → ts.SourceFile → Record<string, TSXNode> → evaluated values`.

---

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

---

## Extensibility

- **Strategy pattern via compiler interface**: `evaluateValue` takes an `ICompilerAPI` — consumers plug in any compiler implementation (e.g., `@purrpose/client-babel`).
- **New node types**: Adding a new `TSXNodeType` requires a new union member in `TypescriptNode` and a matching `create*` function.
- **Prop extraction interception**: `extractProps` accepts an optional `ignore` callback to filter attributes.

---

## External Dependencies

### Peer Dependencies

| Package      | Version  | Purpose                                                                                    |
| ------------ | -------- | ------------------------------------------------------------------------------------------ |
| `typescript` | `^5.9.3` | TS compiler API for parsing (`ts.createSourceFile`, `ts.isXxx` guards, `ts.createPrinter`) |

### No Runtime Dependencies

Zero runtime dependencies (`"dependencies": {}`).
