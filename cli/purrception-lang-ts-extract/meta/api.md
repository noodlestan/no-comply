# @purrception/lang-ts-extract — API

> Generated: 2026-06-25
> By: sub-agent

## Entry Point

```
import { … } from '@purrception/lang-ts-extract';
```

Source root: `src/index.ts` — re-exports four module groups.

---

## Exports Summary

### `src/extractors/` — High-level program extraction

| Export                         | Signature                                                  | Description                                                  |
| ------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------ |
| `extractComponentsFromProgram` | `(program: ProgramFileAPI) => ComponentDeclaration[]`      | Extracts SolidJS component declarations from a compiled file |
| `extractFunctionsFromProgram`  | `(program: ProgramFileAPI) => FunctionDeclaration[]`       | Extracts all exported function-like declarations             |
| `extractTypesFromProgram`      | `(program: ProgramFileAPI) => TypeDeclaration[]`           | Extracts type aliases and interfaces                         |
| `extractImportsFromProgram`    | `(program: ProgramFileAPI) => Map<string, ImportedSymbol>` | Extracts import statements                                   |

### `src/program/` — Program creation & per-file API

| Export                      | Kind          | Description                                                                                                                        |
| --------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `createProgram`             | async factory | Creates a `ProgramAPI` from a context + file list                                                                                  |
| `createProgramFile`         | async factory | Creates a `ProgramFileAPI` for a single file                                                                                       |
| `createProgramFilesContext` | factory       | Creates a `ProgramFilesContext` from path + readFile                                                                               |
| `ProgramFilesContext`       | type          | `{ path: string; readFile: (filename: string) => Promise<string> }`                                                                |
| `ProgramFileAPI`            | type          | Per-file API: sourceFile, checker, docs(), types(), functions(), exportsMap(), importsMap()                                        |
| `ProgramAPI`                | type          | Aggregate API: files, extractDocs, extractComponents, extractFunctions, extractTypes, extractImportedSymbols, indexDeclaredSymbols |
| `getExportMap`              | helper        | Resolves exported name → ts.Node                                                                                                   |
| `getImportMap`              | helper        | Resolves import specifier → ImportedSymbol                                                                                         |
| `getProgramFunctions`       | helper        | Walks source file for FunctionLikeDeclaration nodes                                                                                |
| `getProgramTypes`           | helper        | Walks source file for type alias / interface declarations                                                                          |

### `src/program-node/` — Declaration-to-domain-model transformers

| Export                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extractFunctionFromDeclaration(programFile, declaration)` | Transforms a FunctionLikeDeclaration → FunctionDeclaration or undefined                                                                                                                                                                                                                                                                                                                                                                  |
| `extractTypeFromDeclaration(programFile, declaration)`     | Transforms a type alias / interface → TypeDeclaration                                                                                                                                                                                                                                                                                                                                                                                    |
| 25+ helpers                                                | `extractTypeExpression`, `extractTypeRef`, `extractFunctionParams`, `extractFunctionReturns`, `extractInterfaceDeclaration`, `extractNodeGenerics`, `extractVariableFunctionType`, `isExportedDeclaration`, `extractExportedName`, plus type-expression extractors: array, tuple, union, intersection, conditional, mapped, infer, pick, omit, operator, literal, template-literal, object-literal, function-type, and member extractors |

### `src/jsdoc/` — JSDoc extraction

| Export                       | Description                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| `extractFunctionJsDoc(node)` | Extracts FunctionJsDocData (description, paramTags, returnsTag, templateTags, tags) |
| `extractNodeJsDoc(node)`     | Extracts JsDocData (description, templateTags, tags)                                |
| `getFileJsDoc(sourceFile)`   | Extracts file-level JSDoc                                                           |
| `hasJsDocIgnore(node)`       | Checks for `@ignore` JSDoc tag                                                      |

---

## Main API — `ProgramAPI`

Created via `createProgram(ctx, files)`.

```ts
const program = await createProgram(
  createProgramFilesContext('/root', readFile),
  { 'src/index.ts': 'src/index.ts' },
);

program.extractComponents();       // ComponentDeclaration[]
program.extractFunctions();        // FunctionDeclaration[]
program.extractTypes();            // TypeDeclaration[]
program.extractImportedSymbols();  // Record<string, ImportedSymbol>
program.indexDeclaredSymbols(...); // Record<string, Declaration>
program.extractDocs('src/index.ts'); // JsDocData | undefined
```

---

## Internal / Private

The following modules live under `private/` subdirectories and are **not** part of the public API:

- `src/extractors/private/` — Component detection heuristics (`isComponentType`, `isParentComponentType`, `isJSXReturnType`, `extractComponentProps`, `extractComponentFromFunctionDeclaration`)
- `src/jsdoc/private/` — Low-level JSDoc tag extractors (`extractTags`, `extractParamTags`, `extractReturnsTag`, `extractTemplateTags`, `extractDescription`, `getFirstJsDocNode`)
