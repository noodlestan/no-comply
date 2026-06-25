# @purrception/source-fs — Conventions

Generated: Thu, 25 Jun 2026
By: sub-agent

## Naming Conventions

- **PascalCase** for types and interfaces: `DirectoryExtractContext`, `FilesystemExtractContext`, `DirectoryExtractAPI`
- **camelCase** for functions and variables: `createDirectoryExtractContext`, `extractEntitiesFromFileSystem`, `debounceMs`
- **`create*` prefix** for factory/constructor functions that build context objects
- **`*Options` suffix** for options/configuration objects (e.g., `DebouncedWatcherOptions`, `DirectoryExtractorOptions`)
- **`extract*` prefix** for extraction functions (`extractEntitiesFromFileSystem`)
- **`process*` prefix** for processing functions (`processRootDir`, `processPaths`)
- **Types file**: each module directory has a sibling `types.ts` for type definitions
- **Index barrel files**: each directory has an `index.ts` that re-exports all non-private members

## File Organization Patterns

- **Module-per-concept**: each subdirectory under `src/` represents a distinct architectural concern (contexts, extractors, helpers, processors, watcher)
- **Private modules**: internal implementation lives under a `private/` subdirectory, excluded from barrel re-exports (e.g., `processors/private/processDirectory.ts`)
- **Types co-location**: types are defined in `types.ts` files adjacent to implementation
- **Barrel pattern**: every directory has an `index.ts` generated via `// @index` comment convention (tooling from `@no-comply` monorepo)
- **One export per file**: each implementation file exports a single function (with rare exceptions)

## API Design Patterns

- **Factory functions over classes**: all exposed APIs are functions returning plain objects. No `class` or `new` usage.
- **Options-as-object pattern**: all configuration is passed as single options objects rather than positional arguments
- **Async throughout**: all extraction, file reading, and matching operations are `async`
- **Default values with `??`**: defaults applied with nullish coalescing (`skipSubDirs ?? false`, `defaults ?? {}`)
- **Strategy pattern**: `DirectoryExtractAPI` interface enables polymorphic extractor dispatch
- **Collector pattern**: processors accumulate `AnonymousEntityProcessor` functions, executed in parallel via `Promise.all`
- **No singletons, no global state**: all state is explicitly created and passed through the pipeline
- **3-phase extractor pipeline**: `match` → `resolve` → `extract`, each independently implementable

## Typing Conventions

- **Explicit generic constraints**: e.g., `P extends EntityDataBasePartial`, `T extends EntityDataBase`
- **Type imports with `type` keyword**: `import type { ... }` for all type-only imports
- **No `any` usage**: all generics are properly constrained
- **`type` over `interface`**: uses `type` consistently for type definitions
- **Dependency injection through types**: generics flow through the pipeline — `P` (partial metadata), `F` (file map), `T` (entity result)
- **No enums**: string literals and discriminated unions preferred
