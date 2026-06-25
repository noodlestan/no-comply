# @purrception/lang-ts-extract — Architecture

> This file extends [purrception architecture](../../../architecture/purrception.md).

> Generated: 2026-06-25
> By: sub-agent

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

## Internal Module Boundaries

| Directory                  | Visibility                                                                        |
| -------------------------- | --------------------------------------------------------------------------------- |
| `src/extractors/private/`  | Internal: component detection heuristics (isComponentType, isJSXReturnType, etc.) |
| `src/jsdoc/private/`       | Internal: low-level JSDoc tag extractors                                          |
| All other `src/*/` barrels | Public (re-exported through `src/index.ts`)                                       |
