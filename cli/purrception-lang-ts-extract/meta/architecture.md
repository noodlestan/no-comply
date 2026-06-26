# @purrception/lang-ts-extract — Architecture

> This file extends [purrception architecture](../../../architecture/purrception.md).

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

## File Modules

```
src/
├── extractors/
│   ├── <name>.ts                      // extractComponents, extractFunctions, extractImports, extractTypes
│   └── private/                       // extractComponentProps, isJSXReturnType, isComponentType, isParentComponentType, extractComponentFromFunctionDeclaration
├── jsdoc/
│   ├── <name>.ts                      // extractFunctionJsDoc, extractNodeJsDoc, getFileJsDoc, hasJsDocIgnore
│   └── private/                       // getFirstJsDocNode, extractParamTags, extractTags, extractTemplateTags, extractReturnsTag, extractDescription
├── program/
│   ├── createProgram.ts               # Creates ProgramAPI from context + file list
│   ├── createProgramFile.ts           # Creates ProgramFileAPI for a single source file
│   ├── createProgramFilesContext.ts   # Factory for ProgramFilesContext (path + readFile)
│   ├── types.ts                       # Type definitions: ProgramAPI, ProgramFileAPI, ProgramFilesContext
│   └── helpers/
│       └── <name>.ts                  // getExportMap, getImportMap, getProgramFunctions, getProgramTypes
└── program-node/
    ├── extract<Name>FromDeclaration.ts // Function, Type
    └── helpers/
        ├── addChildrenToComponentProps.ts
        ├── extract<TypeExpression>.ts  // extractArray, extractConditional, extractFunctionParams, extractFunctionReturns, extractFunctionType, extractInfer, extractInterface, extractIntersection, extractLiteral, extractMapped, extractNodeGenerics, extractObjectLiteralType, extractOmit, extractOperator, extractPick, extractTemplateLiteral, extractTuple, extractTypeExpression, extractTypeRef, extractUnion, extractVariableFunctionType, and 5 more
        ├── extractExportedName.ts
        ├── isExportedDeclaration.ts
        └── throwUnsupportedNodeError.ts
```
