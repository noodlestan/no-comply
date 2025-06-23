# 🐾 Purrception

**Purrception is a layered, extensible entity extraction system** designed to power codebase introspection, metadata extraction, and documentation tooling.

It is deeply type-aware, and highly customizable.

## Layer Overview

| Layer              | Package                   | Responsibility                              |
| ------------------ | ------------------------- | ------------------------------------------- |
| **Core Contracts** | `@purrception/primitives` | Minimal shared types                        |
| **FS Discovery**   | `@purrception/source-fs`  | Filesystem walking, batching, context       |
| **TS AST Parsing** | `@purrception/extract-ts` | Type/function/component metadata extraction |

**Note:** Purrception is entity agnostic. An example implementation for SolidJS-aware extractors and codebase rules can be found in `@no-comply/purrception-entities`

## 💠 `@purrception/primitives`

Defines shared, minimal types for all extractors.

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

### Implements

- `createDirectoryExtractContext`
- `extractEntitiesFromFileSystem`
- Root traversal (`processPaths`, `processRootDir`)
- FS watchers (`createDebouncedWatcher`, `splitContextsToUpdate`, etc.)

## ⚙️ `@purrception/extract-ts`

TypeScript-level AST parsing and type modeling.

### Contracts

- `TypeExpressionData`
- `FunctionData`
- `ComponentData`
- `TypeDeclarationData`

### Extractors

- `extractFunctionsFromFile`
- `extractTypesFromFile`
- `extractComponentsFromFile`

### JSDoc

- `extractDeclarationJsDoc`
- `hasJsDocIgnore`

### Helpers

- Inference utilities like `isComponentType`, `isJSXReturnType`, etc.
- Deep AST analysis tools (`extractMappedTypeNode`, `extractFunctionReturns`, etc.)

## 🧩 `@no-comply/purrception-entities`

Userland package for defining SolidJS-aware entity models and extractors based on project conventions.

### Contracts

- `EntityExtractorFiles`
- `EntityMetaMatcher<P extends EntityDataBase>`
- `EntityFileResolver<F extends EntityExtractorFiles, P extends EntityDataBase>`
- `EntityExtractorOptions<P extends EntityDataBase, F extends EntityExtractorFiles>`

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
