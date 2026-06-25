# purrception

> This file extends [no-comply architecture](./nocomply.md).

This document consolidates design principles, layering, dependency flow, and external dependencies across all @purrception packages. It serves as a single source of truth for contributors.

## Design Principles

### Core Abstractions

- **Zero assumptions**: No runtime logic, no framework coupling, no runtime dependencies in `@purrception/primitives` — purely structural types.

### Pipeline Patterns

- **3-phase pipeline per extractor** — `match` → `resolve` → `extract`. Each phase is independently implementable by consumers. The `skipSubDirs` flag lets extractors opt out of recursive directory traversal.

- **Thin transformation layer** — Each function performs one AST-to-model conversion with no side effects. Extractors are pure compositions of lower-level helpers.

- **Lazy computation** — `exportsMap()` and `importsMap()` on `ProgramFileAPI` are memoized closures computed on first access, not at creation time.

- **Ignore-by-convention** — The `@ignore` JSDoc tag is the standard mechanism to exclude declarations from extraction output.

### Type System Patterns

- **Discriminated unions** — All type representations use a `kind` string discriminator enabling switch-based dispatch. Example: `TypeExpressionNode`.

- **Separation of data from behavior** — Types defined in `types.ts` files; operations in separate function modules.

- **Generic threading** — Context (`C`) and entity (`T`) types are threaded through the extraction pipeline via generics, preserving type safety across stages.

### Filesystem Patterns

- **Recursive descent with extension points** — The directory walker is generic; extractors plug in at each directory node via `DirectoryExtractAPI`.

- **Separation of reading from interpretation** — The context layer handles IO (`readFile`, `hasFile`, `readDir`). Extractors handle semantic interpretation.

- **Type-safe pipeline** — Generics (`<P, F, T>`) flow from matching through file resolution to extraction, preserving type information end-to-end.

- **In-memory file cache** — Avoids redundant reads but uses memory per extraction run.

### Extensibility

- **New operators**: Add case in `resolveOperator` → add resolver in `operators/`.

- **Plugin via array** — Consumers register extractors as a `DirectoryExtractAPI[]` array. Each extractor independently matches, resolves files, and extracts entities from a directory.

- **New type expression kinds** — Add to `TypeExpressionKind` union → define type → add case in `resolveExpression` switch → write resolver.

- **New declaration kinds** — Add to `DeclarationKind` union → define type → add type guard.

## Layering

### Module Structure

- **Primitives as single flat module** — `src/index.ts` barrel re-export and `src/types.ts` with all type definitions. No internal module boundaries; all types co-located.

- **Strictly layered internals** — `lang-ts` has 5 internal layers (`constants` → `jsdoc` → `node` → `declaration` → `resolve`). `source-fs` has 7 layers from primitives through context factories to watching.

- **lang-ts-extract**: 3 layers — `ProgramAPI` (aggregate orchestrator) → `extractors/` + `program-node/` (transformation) → `jsdoc/` (JSDoc parsing). Internal directories `src/extractors/private/` and `src/jsdoc/private/` contain implementation details.

### Trade-offs

- **18 type expression kinds** (lang-ts): Covers the vast majority of TS types without modeling every possible AST node.
- **Switch-based dispatcher** (lang-ts): Simple and explicit, but harder to extend externally.
- **Immutable spreads + recursion** (lang-ts): Safer and predictable; potential performance cost for deeply nested types.
- **Recursive directory walk** (source-fs): Simple and predictable, but may be slow for very deep trees — `skipSubDirs` mitigates.
- **All matchers run on every directory** (source-fs): Maximizes flexibility but could be optimized with path-based pre-filtering.
- **In-memory file cache** (source-fs): Avoids redundant reads but uses memory per extraction run.
- **`Promise.all` for all processors** (source-fs): Parallel execution benefits performance but may overwhelm file handles on large codebases.

## Dependency Flow

### Intra-package Flow

- **lang-ts**: Strictly acyclic downward — `constants` → `jsdoc` → `node` → `declaration` → `resolve`. No module depends on a module at the same or higher layer.
- **lang-ts-extract**: `extractors/` → `program-node/` → `program/` (types). `jsdoc/` feeds into `program/` and `program-node/`. No circular dependencies.
- **source-fs**: `contexts/` → `processors/` → `extractors/`. `helpers/` consumed by `extractors/`. `watcher/` is self-contained and optional.

### Inter-package Flow

- **lang-ts** depends on `@purrception/primitives` via `declaration` and `resolve` layers.
- **lang-ts-extract** depends on `@purrception/primitives` and `@purrception/lang-ts`.
- **source-fs** depends on `@purrception/primitives` only.

## External Dependencies

### Runtime Dependencies

- **typescript** (`^5.9.3`): Used by `lang-ts-extract` — compiler API (`ts.createProgram`, `ts.createCompilerHost`, `ts.TypeChecker`, `ts.SourceFile`, `ts.is*()` type guards).
- **@purrception/primitives** (`0.0.11`): Used by `lang-ts`, `lang-ts-extract`, `source-fs` — base types (`EntityDataBase`, `EntityExtractResult`, `LanguageDeclaredSymbol`, `DeclaredSymbol`, `ImportedSymbol`).
- **@purrception/lang-ts** (`0.0.11`): Used by `lang-ts-extract` — domain types (`FunctionDeclaration`, `ComponentDeclaration`, `TypeDeclaration`, `JsDocData`, `TypeExpressionNode`).
- **chokidar**: Used by `source-fs` watcher module for filesystem watching.
- **perfect-debounce**: Used by `source-fs` watcher module for coalescing rapid file-change events.

### Peer Dependencies

None across all packages.

### Dev Dependencies

- **@no-comply/build-tools**: Custom monorepo build tooling (used by `source-fs`).
- **@types/node**: Node.js type definitions (used by `source-fs`).
