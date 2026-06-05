# 🐾 Purrception

**Purrception is a layered, extensible entity extraction system** designed to power codebase introspection, metadata extraction, and documentation tooling.

It is deeply type-aware, and highly customizable.

## Layer Overview

| Package                        | Responsibility                                                                      |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| `@purrception/primitives`      | Minimal shared types                                                                |
| `@purrception/source-fs`       | Traversing, watching, and batching tools for extracting entities from file systems. |
| `@purrception/lang-ts`         | Lightweight Typescript AST                                                          |
| `@purrception/lang-ts-extract` | Extract lightweight Typescript AST from source code                                 |

**Note:** Purrception is entity agnostic. An example implementation for SolidJS-aware extractors and codebase rules can be found in `@no-comply/meta-entities`

## 💠 `@purrception/primitives`

Defines shared, minimal types for extractors.

### Models

No logic or assumptions — purely structural.

- `EntityDataBase` – base entity shape (`type`, `name`, extensible)
- `EntityExtractContext<T>` – context wrapper
- `EntityExtractResult<T>` – output of a processor

## 📂 `@purrception/source-fs`

Filesystem-driven discovery and orchestration.

Knows how to walk the filesystem — not what to extract.

### Contracts

- `DirectoryEntityExtractor<T>`
- `DirectoryEntityProcessor<T>`
- `EntityExtractorFiles`
- `EntityMetaMatcher<P extends EntityDataBase>`
- `EntityFileResolver<F extends EntityExtractorFiles, P extends EntityDataBase>`
- `EntityExtractorOptions<P extends EntityDataBase, F extends EntityExtractorFiles>`

### Implements

- `createDirectoryExtractContext`
- `extractEntitiesFromFileSystem`
- Root traversal (`processPaths`, `processRootDir`)
- FS watchers (`createDebouncedWatcher`, `splitContextsToUpdate`, etc.)

## ⚙️ `@purrception/lang-ts-extract`

TypeScript-level AST parsing and type modeling.

Generates lightweight and portable trees.

### Contracts

- `TypeExpressionNode`
- `FunctionDeclaration`
- `ComponentDeclaration`
- `TypeExpressionDeclaration`

### Extractors

- `extractFunctionsFromFile`
- `extractTypesFromFile`
- `extractComponentsFromFile`

### JSDoc

- `extractNodeJsDoc`
- `extractFunctionJsDoc`
- `hasJsDocIgnore`

### Helpers

- Inference utilities like `isComponentType`, `isJSXReturnType`, etc.
- Deep AST analysis tools (`extractMappedTypeNode`, `extractFunctionReturns`, etc.)

## 🧩 `@no-comply/meta-entities`

Userland package for defining SolidJS-aware entity models and extractors based on project conventions.

### Entities

- `Component`
- `Context`
- `Controller`
- `Mixin`
- `Module`
- `Provider`
- `Service`

### Heuristics

- `resolveEntityPartial`
- `resolveEntityFiles`

#### Helpers

- `findComponentFile`
- `findFactoryFile`
- `findProviderFile`
- `findTypesFile`
- `findHelperFiles`
- `findHookFiles`
