# @purrception/lang-ts-extract — Architecture

> Generated: 2026-06-25
> By: sub-agent

## Design Principles

1. **Thin transformation layer** — Each function does one AST-to-model conversion with no side effects. Extractors are pure compositions of lower-level helpers.
2. **Lazy computation** — `exportsMap()` and `importsMap()` on `ProgramFileAPI` are memoized closures computed on first access, not at creation time.
3. **Ignore-by-convention** — The `@ignore` JSDoc tag is the standard mechanism to exclude declarations from extraction output.

## Layering

```
                   ┌─────────────────────────┐
                   │     ProgramAPI           │
                   │  (aggregate orchestrator) │
                   └──────────┬──────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                   ▼
   ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐
   │  extractors/  │  │   program/   │  │      jsdoc/      │
   │  (high-level  │  │  (TS program │  │ (JSDoc parsing)  │
   │   extraction) │  │   creation)  │  │                  │
   └───────┬───────┘  └──────┬───────┘  └──────────────────┘
           │                 │
           ▼                 ▼
   ┌──────────────┐  ┌──────────────┐
   │ program-node/ │  │ program/     │
   │ (decl→model)  │  │ helpers/     │
   └───────┬───────┘  │ (AST walks)  │
           │          └──────────────┘
           ▼
   ┌──────────────┐
   │ program-node/ │
   │ helpers/      │
   │ (type expr    │
   │  extractors)  │
   └──────────────┘
```

### Layer descriptions

| Layer          | Directory                               | Responsibility                                                                                                          |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Program**    | `src/program/`                          | Creates TypeScript programs via compiler API; provides `ProgramFileAPI` (per-file) and `ProgramAPI` (aggregate)         |
| **Extraction** | `src/extractors/` + `src/program-node/` | Transforms raw TS AST nodes into Purrception domain models (FunctionDeclaration, ComponentDeclaration, TypeDeclaration) |
| **JSDoc**      | `src/jsdoc/`                            | Extracts JSDoc metadata from TS nodes; consumed by extraction layer                                                     |

## Dependency Flow

```
extractors/  ──→  program-node/  ──→  program/ (types)
     │                                   ↑
     └───────────────── jsdoc/ ──────────┘
```

- `extractors/` imports `program-node/` (transformers) and `program/` (types only)
- `program-node/` imports `jsdoc/` (JSDoc extraction) and `program/` (types only)
- `program/` imports `jsdoc/` (file-level docs)
- No circular dependencies

## External Dependencies

| Dependency                         | Usage                                                                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `typescript` (^5.9.3)              | Compiler API: `ts.createProgram`, `ts.createCompilerHost`, `ts.TypeChecker`, `ts.SourceFile`, `ts.is*()` type guards    |
| `@purrception/primitives` (0.0.11) | Base types: `ImportedSymbol`                                                                                            |
| `@purrception/lang-ts` (0.0.11)    | Domain types: `FunctionDeclaration`, `ComponentDeclaration`, `TypeDeclaration`, `JsDocData`, `TypeExpressionNode`, etc. |

## Peer Dependencies

None declared.

## Internal Module Boundaries

| Directory                  | Visibility                                                                        |
| -------------------------- | --------------------------------------------------------------------------------- |
| `src/extractors/private/`  | Internal: component detection heuristics (isComponentType, isJSXReturnType, etc.) |
| `src/jsdoc/private/`       | Internal: low-level JSDoc tag extractors                                          |
| All other `src/*/` barrels | Public (re-exported through `src/index.ts`)                                       |
