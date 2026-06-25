# Conventions — `@no-comply/meta-extract`

**Date:** 2026-06-25
**By:** sub-agent

---

## Naming Conventions

- **Factory functions**: `create*EntityExtractor` — PascalCase entity type prefixed with `create`, suffixed with `EntityExtractor`
- **Entity types**: PascalCase with entity prefix: `ComponentEntityPartial`, `ComponentEntityFiles`, `ComponentEntityData`
- **Private modules**: camelCase all-lowercase: `entityExtractor`, `entityMatcher`, `fileResolver`
- **File finders**: `find*File(s)` — camelCase with `find` prefix
- **Barrels**: `index.ts` with `// @index` comment directive
- **Type parameters**: `P` (Partial), `F` (Files), `T` (Data) — consistently used across generic signatures

---

## File Organization Patterns

- **Entity directory structure**: Each entity type in its own directory under `entities/`, with a `private/` subdirectory containing internal implementation
- **Separation of concerns per entity**:
  - `create*EntityExtractor.ts` — thin factory that wires matcher/resolver/extractor together
  - `private/entityExtractor.ts` — extraction logic
  - `private/entityMatcher.ts` — directory matching logic
  - `private/fileResolver.ts` — file resolution logic
- **Cross-cutting utilities**: Shared helpers go in `utils/helpers/`
- **Heuristics layer**: Thin wrappers (`resolveEntityFiles`, `resolveEntityPartial`) that delegate to callbacks

---

## API Design Patterns

- **Factory pattern**: All public API surfaces are factory functions accepting `options?` with optional `matcher`, `resolver`, `decorator` overrides
- **Type-generic pipeline**: Heavily parameterized with generics `P`, `F`, `T` flowing through match → resolve → extract chain
- **Consistent signature**: All 7 factory functions follow the same structure:

```
const createXEntityExtractor: DirectoryExtractorFactory<P, F, T> = (options = {}) => {
  return defineDirectoryExtractor({
    match: options.matcher ?? entityMatcher,
    resolve: options?.resolver ?? fileResolver,
    extract: entityExtractor,
    skipSubDirs: true,  // false for Module
  });
};
```

- **Optional override pattern**: Each matcher/resolver defaults to the private implementation but can be overridden via options
- **Strategy pattern**: Match/resolve/extract triad forms a substitutable strategy per entity or per call

---

## Typing Conventions

- **Pure `type` aliases**: No `interface`, no `class`, no `enum` — only `type` aliases
- **Intersection types**: Entity types composed via `&`: `type XEntityData = XEntityPartial & NoComplyEntityData & { ... }`
- **Generic threading**: Type parameters flow from `@purrception/primitives` → `@purrception/source-fs` → `@no-comply/meta` → `@no-comply/meta-extract`
- **File-specific types**: Each entity has companion `*EntityFiles` type defining expected files
- **Optional file requirements**: Marked with `?` (e.g., `ContextEntityFiles.types?: string`, `ModuleEntityFiles.types?: string`)

---

## Composition Patterns

- **Match → Resolve → Extract**: Three-phase pipeline for each entity
  1. `match`: Directory-level regex check for entity type
  2. `resolve`: Given matched directory, determine files to read
  3. `extract`: Parse files and return structured entity data
- **Thin factory wrapping `defineDirectoryExtractor`**: All entities delegate to the same helper from `@purrception/source-fs`
- **Context passing**: `DirectoryExtractContext` threaded through pipeline, wrapped in `EntityExtractContext` for output
