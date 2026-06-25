# purrception

> This file extends [noodlestan conventions](./noodlestan.md).

This document consolidates naming, file organization, API design, and typing conventions across all @purrception packages. It serves as a single source of truth for contributors.

## API & Types

### API Design Patterns

- **Factory functions over classes**: all public APIs are plain factory functions returning objects; no `class` or `new` (`createProgram`, `createDirectoryExtractContext`, `createPrimitiveNode`)
- **Discriminated unions as primary abstraction**: `TypeExpressionNode`, `Declaration`, and `DeclarationKind` use a `kind: string` discriminator
- **Type guards for narrowing**: every discriminated union member has a corresponding `is*` type guard; TS `ts.is*()` guards narrow `FunctionLikeDeclaration` unions
- **Context object pattern**: context objects bundle related state threaded through the pipeline (`ResolveTypeContext` bundles entity metadata, import resolution, parameter substitutions, and circular-reference tracking)
- **Immutable transformations**: resolvers return new objects via spread; no mutation
- **Switch dispatch**: `resolveExpression` dispatches to specialized resolvers via a switch on `kind`
- **Partial-to-full pipeline**: `EntityDataBasePartial` serves as unstamped input, `EntityDecorator<T>` transforms it, consumers receive `EntityExtractResult<T, C>`
- **3-phase extractor pipeline**: `match` → `resolve` → `extract`, each independently implementable
- **Options-as-object pattern**: all configuration is passed as single options objects rather than positional arguments
- **Default values with `??`**: defaults applied with nullish coalescing (`skipSubDirs ?? false`)
- **Strategy pattern**: `DirectoryExtractAPI` interface enables polymorphic extractor dispatch
- **Collector pattern**: processors accumulate functions executed in parallel via `Promise.all`
- **No singletons, no global state**: all state is explicitly created and passed through the pipeline
- **Filter chain**: extraction chains use `.map().filter(Boolean)` to map to domain types and filter out `undefined`
- **Narrow returns**: functions that may not match return `| undefined` (`extractComponentFromFunctionDeclaration`), with callers filtering via `.filter()`
- **Lazy evaluation**: memoized closures defer computation (`if (!map) { map = ... }`)
- **Dependency injection**: context objects provide functions like `readFile` so consumers are decoupled from the filesystem
- **Async throughout**: all extraction, file reading, and matching operations are `async`
- **Type-only surfaces**: some packages define their entire API surface as type aliases with no functions, classes, or runtime logic
- **Fail early**: unsupported nodes produce an error with node kind, file path, line number, and source snippet
- **Silent skip**: functions that cannot extract return `undefined` instead of throwing; unknown references and invalid expressions produce `console.warn` and return the original node
- **Circular references**: throw `Error`
- **Duplicate import detection**: `extractImportedSymbols` throws on duplicate import keys with diagnostic logging
- **Thin wrappers**: most extractors are thin compositions of lower-level helpers with no additional logic
- **Maybe/Option pattern**: every lookup has a safe variant returning `undefined` and a throwing variant (`getEntityMaybe` / `getEntity`)
- **Generic filter pattern**: API functions accept a `Filter` union — array of names (whitelist) or predicate function
- **Defensive copying**: `getEntities()` returns `[...entities]` spread copy to prevent mutation
- **Consistent error message format**: error messages follow patterns like `"Could not resolve ..."`, `"Unknown entity ..."`, `"Duplicate entity ..."`
- **Optional override pattern**: matcher, resolver, and decorator default to private implementations but can be overridden via factory `options`
- **Consistent factory signature**: all factory functions follow the same `createXEntityExtractor` structure delegating to `defineDirectoryExtractor`
- **Type-generic pipeline**: type parameters `P` (Partial), `F` (Files), `T` (Data) flow through the match → resolve → extract chain

### Typing Conventions

- **`type` over `interface`**: all type definitions use `type` aliases; zero interfaces in the codebase
- **Intersection types for composition**: use `&` rather than `extends` for combining types
- **Generics with constraints and defaults**: generics constrained with `extends` and defaulted with `=` (`T extends EntityDataBase`, `C extends object`, `L extends string`)
- **No enums**: use string literal unions and discriminated unions instead
- **No namespaces, no classes**: purely structural type aliases
- **Explicit type imports**: `import type { ... }` for all type-only imports
- **Optional fields**: liberally marked with `?` (`description?`, `tags?`, `generic?`)
- **`Record<string, T>` for dictionaries**: use `Record<string, ObjectLiteralTypeMember>` for object members
- **`Readonly` modifier**: used sparingly on object member signatures
- **No `any`**: all generics are properly constrained
- **No index signatures**: use explicit intersection-based extension instead
- **`private` field naming**: use a JS-private-like naming pattern on field declarations, not TS `private` or `#private`
- **Dependency injection through generics**: generic type parameters flow through the pipeline (`P` for partial metadata, `F` for file map, `T` for entity result)

## Modules and Files

### File Organization

- **Module-per-concept**: each conceptual domain has a top-level directory under `src/` (`declaration/`, `jsdoc/`, `node/`, `resolve/`, `contexts/`, `extractors/`, `processors/`, `watcher/`)
- **One export per file**: each `.ts` file exports a single primary function or type
- **Types in separate files**: type definitions live in `types.ts` files adjacent to implementation, separated from runtime logic
- **Barrel files**: every directory has an `index.ts` re-exporting all non-private members, generated via `// @index` comment directive
- **Recursive index pattern**: parent modules re-export from children (`src/index.ts` → `src/declaration/index.ts` → `src/declaration/helpers/index.ts`)
- **Private modules**: internal implementation lives in a `private/` subdirectory, excluded from barrel re-exports
- **Helper modules**: shared utilities live in `helpers/` subdirectories
- **Sub-resolver isolation**: complex logic further decomposed into subdirectories (`kinds/`, `normalize/`, `operators/`)
- **One file per AST node kind**: TypeScript AST node extractors each have their own file (`extractUnionTypeNode.ts`, `extractObjectLiteralTypeNode.ts`)
- **Entity-per-directory**: each entity type in `src/entities/<EntityName>/` with `index.ts`, `types.ts`, and `helpers/`
- **Per-entity with factory and private**: each entity directory has a thin `create*EntityExtractor.ts` factory and a `private/` subdirectory with extractor, matcher, and resolver modules
- **Cross-cutting utilities**: shared helpers go in `utils/helpers/`
- **Heuristics layer**: thin wrapper functions that delegate to callbacks

## Naming

### Naming Conventions

- **Types**: PascalCase with descriptive suffixes (`TypeExpressionNode`, `ProgramFileAPI`, `DirectoryExtractContext`)
- **Functions**: camelCase named after their primary action and target (`resolveExpression`, `extractFunctionsFromProgram`)
- **Constants**: UPPER_SNAKE_CASE (`BUILTIN_TYPES`, `BUILTIN_GLOBALS`)
- **Files**: camelCase matching the primary export name (`extractFunctionsFromProgram.ts` → `extractFunctionsFromProgram`)
- **`create*` prefix**: factory functions that build context objects (`createDirectoryExtractContext`, `createProgram`)
- **`extract*` prefix**: extraction functions (`extractFunctionsFromProgram`, `extractEntitiesFromFileSystem`)
- **`process*` prefix**: processing functions (`processRootDir`, `processPaths`)
- **`*Options` suffix**: configuration objects (`DirectoryExtractorOptions`, `DebouncedWatcherOptions`)
- **Prefix groups**: `Entity*` for pipeline types, `Docs*` for documentation metadata, `*Symbol` for symbol tracking
- **Generic type parameters**: `T` for entity type, `C` for context type, `L` for language string literal, `F` and `P` in companion packages
- **Internal fields**: underscore prefix for transient or internal fields (`_source`)
- **Accessors**: `get*` prefix (`getEntities`, `getEntityMaybe`)
- **Type guards**: `is*` prefix (`isNoComplyComponent`, `isNoComplyContext`)
- **Existence checks**: `has*` prefix (`hasPackage`, `packageHasModule`)
- **Resolvers**: `resolve*` prefix (`resolveComponentDeclaration`)
- **Indexers**: `index*` prefix (`indexEntities`)
- **Type discriminators**: lowercase singular (`'component'`, `'context'`, `'module'`)
- **Private modules**: lowercase camelCase (`entityExtractor`, `entityMatcher`)
- **File finders**: `find*File(s)` prefix (`findEntityFiles`)
- **Source files**: kebab-case (`create-no-comply-meta-service.ts`)
- **Entity directories**: PascalCase (`Component/`, `Context/`, `Controller/`)

## Others

### Formatting

- **Tabs**: for indentation (inherited from monorepo Prettier config)
- **Semicolons**: none
- **Quotes**: single quotes
