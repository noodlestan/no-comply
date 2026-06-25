# no-comply demo

> This file extends [noodlestan conventions](./noodlestan.md).

This document consolidates naming, file organization, API design, and typing conventions across @no-comply demo-scope packages: standard-ui-demo, build-tools, meta, and meta-extract. It serves as a single source of truth for contributors.

## API & Types

### API Design Patterns

- **Service factory pattern**: All public surfaces are factory functions returning typed objects — no classes, no constructors. Factories accept optional `options?` for configurable overrides.
- **Context provider pattern (standard-ui-demo)**: Context defined in `private/`, guarded hook in public, provider component composes factory and context. Example: `AppServicesProvider`, `MetaProvider`.
- **Maybe/Option pattern (meta)**: Every lookup has a safe variant returning `undefined` and a throwing variant. Example: `getEntityMaybe` / `getEntity`.
- **Generic filter pattern (meta)**: API functions accept a `Filter` union — array of names (whitelist) or predicate function.
- **Defensive copying (meta)**: `getEntities()` returns `[...entities]` spread copy to prevent mutation.
- **Fail-fast on duplicates (meta)**: `indexEntities` throws on duplicate entity keys.
- **Consistent error message format (meta)**: Error messages follow the patterns `"Could not resolve ..."`, `"Unknown entity ..."`, `"Invalid entity"`, or `"Duplicate entity ..."`.
- **Partial application / currying (build-tools)**: CLI wrappers use curried factories: `const cjs = options => createBuild(options, cjsConfig)`.
- **Config merging with layering (build-tools)**: Inferred externals → defaults → user options (later wins, deduped via Set).
- **Plugin composition (build-tools)**: User plugins + default plugins + auto-appended `emitTypesPlugin`.
- **Strategy pattern (meta-extract)**: Each entity uses a match/resolve/extract triad forming a substitutable strategy.
- **Optional override pattern (meta-extract)**: Matcher, resolver, and decorator default to private implementations but can be overridden via factory `options`.
- **Consistent factory signature (meta-extract)**: All factory functions follow the same `createXEntityExtractor` structure delegating to `defineDirectoryExtractor`.
- **Type-generic pipeline (meta-extract)**: Type parameters `P`, `F`, `T` flow through the match → resolve → extract chain.

### Typing Conventions

- **No classes**: All type definitions use plain object types or type aliases, never classes. (standard-ui-demo, meta, meta-extract)
- **No TypeScript (build-tools)**: The build-tools package uses plain JavaScript (`.mjs`). Typing is implicit through object shapes passed to esbuild.
- **Intersection types**: Entity types use intersection (`&`) composition over deep inheritance. Example: `type XEntityData = XEntityPartial & NoComplyEntityData`. (meta, meta-extract)
- **Type discrimination**: Entities use a literal `type` field (string literal union, not enum) for discriminated union checks. Example: `dec.type === 'component'`.
- **Generic usage**: `NoComplyMetaAPI<T>` for type-safe retrieval. Generics used sparingly elsewhere; concrete types preferred. (standard-ui-demo, meta)
- **Generic threading (meta-extract)**: Type parameters flow from `@purrception/primitives` → `@no-comply/meta` → `@no-comply/meta-extract`.
- **Type predicate guards (meta)**: Entity guards are proper TypeScript `is` type predicates. Example: `dec is ComponentEntityData`.
- **Pure `type` aliases (meta-extract)**: No `interface`, `class`, or `enum` — only `type` aliases.
- **Component Props (standard-ui-demo)**: PascalCase with `Props` suffix. Example: `UIRootProviderProps`.
- **Context types (standard-ui-demo)**: Defined in `private/` and consumed via guarded hooks.
- **SolidJS `Accessor` (standard-ui-demo)**: `Accessor<T>` for all reactive values.
- **File-specific types (meta-extract)**: Each entity has companion `*EntityFiles` type. Optional file requirements marked with `?`.
- **External type reuse (meta)**: Core primitives from `@purrception/primitives` are extended, not redefined.

## Modules and Files

### File Organization

- **Feature directory (standard-ui-demo)**: Each feature contains `index.ts` (barrel), `FeatureName.tsx` (component), `types.ts`, `constants.ts`, `helpers/`, `parts/` (sub-components), `private/` (internal), and `*.module.scss` (styles).
- **Entity-per-directory (meta)**: Each entity type in `src/entities/<EntityName>/` with `index.ts`, `types.ts`, and `helpers/` containing type guards and helpers.
- **Per-entity with factory and private/ (meta-extract)**: Each entity directory has a thin `create*EntityExtractor.ts` factory and a `private/` subdirectory with extractor, matcher, and resolver modules.
- **One concern per directory (build-tools)**: Directories separated by architectural role (`config/`, `helpers/`, `plugins/`).
- **One export per file (build-tools)**: Each file exports a single function or factory (except `emitTypesPlugin.mjs` which exports two closely related functions).
- **Thin CLI layer (build-tools)**: `bin/` files import, compose, and invoke — no logic lives there.
- **Barrel exports**: Every directory has `index.ts` re-exporting submodules via `// @index` directive comments. (standard-ui-demo, meta, meta-extract)
- **`private/` subdirectory**: Internal implementation placed in `private/` and not re-exported by the barrel. (standard-ui-demo, meta, meta-extract)
- **`helpers/` subdirectory**: Utility functions separated from core implementation. (standard-ui-demo, meta, meta-extract)
- **Cross-cutting utilities (meta-extract)**: Shared helpers go in `utils/helpers/`.
- **Heuristics layer (meta-extract)**: Thin wrapper functions that delegate to callbacks.
- **Separation of concerns**: Types (`types.ts`) separated from implementation logic. (meta, meta-extract)

## Naming

### Naming Conventions

- **Components (standard-ui-demo)**: PascalCase. Example: `AppServicesProvider`, `SidebarNav`.
- **Hooks (standard-ui-demo)**: `use*` prefix. Example: `useAppServices`, `useMeta`.
- **Constants (standard-ui-demo)**: `UPPER_SNAKE_CASE`. Example: `API_BASE_URL`, `FORCED_DELAY`.
- **CSS classes (standard-ui-demo)**: kebab-case. Example: `has-focus`, `screen-title`.
- **Factory functions (all projects)**: `create*` prefix.
- **Factory case (standard-ui-demo, meta)**: camelCase after `create`. Example: `createAppNavigation`, `createNoComplyMetaService`.
- **Factory case (build-tools)**: PascalCase after `create`. Example: `createBuild`, `copyStaticFilesPlugin`.
- **Factory case (meta-extract)**: PascalCase entity type prefixed with `create`, suffixed with `EntityExtractor`. Example: `createComponentEntityExtractor`.
- **Accessors (meta)**: `get*` prefix, camelCase. Example: `getEntities`, `getEntityMaybe`.
- **Type guards (meta)**: `is*` prefix. Example: `isNoComplyComponent`, `isNoComplyContext`.
- **Existence checks (meta)**: `has*` prefix. Example: `hasPackage`, `packageHasModule`.
- **Resolvers (meta)**: `resolve*` prefix, camelCase. Example: `resolveComponentDeclaration`.
- **Indexers (meta)**: `index*` prefix, camelCase. Example: `indexEntities`.
- **Type discriminators (meta)**: lowercase, singular. Example: `'component'`, `'context'`, `'module'`.
- **Type parameters (meta-extract)**: Single uppercase letters — `P` (Partial), `F` (Files), `T` (Data).
- **Private modules (meta-extract)**: Lowercase camelCase. Example: `entityExtractor`, `entityMatcher`.
- **File finders (meta-extract)**: `find*File(s)` prefix, camelCase. Example: `findEntityFiles`.
- **Internal functions (build-tools)**: camelCase. Example: `generateTypes`, `resolvePackageJson`.
- **Config objects (build-tools)**: camelCase. Example: `commonConfig`, `cjsConfig`, `esmConfig`.
- **Esbuild plugin names (build-tools)**: kebab-case. Example: `'emitTypes'`, `'copy-static-files'`.
- **CLI binary names (build-tools)**: kebab-case. Example: `no-comply-build`, `no-comply-watch`.
- **Source files (build-tools)**: kebab-case with `.mjs` extension. Example: `resolve-package-json.mjs`.
- **Source files (meta)**: kebab-case, derived from the exported name. Example: `create-no-comply-meta-service.ts`.
- **Source files (standard-ui-demo)**: PascalCase for components (`App.tsx`), camelCase for utilities (`createAppNavigation.ts`).
- **Entity directories (meta)**: PascalCase. Example: `Component/`, `Context/`, `Controller/`.
- **Generic directories (build-tools)**: kebab-case. Example: `build/`, `config/`, `helpers/`, `plugins/`.

## Others

### Styling Conventions

- **CSS Modules**: `*.module.scss` for component-scoped styles.
- **SCSS**: Global variables and mixins injected via Vite `additionalData`.
- **Class list utility**: `createClassList` from `@no-comply/solid-primitives` for computed class lists.
- **Color scheme**: `@media (prefers-color-scheme: light)` in `index.html` for color scheme base styles.
- **Base styles**: `layers.css` + `reset.css` in `src/styles/`.

### Composition Patterns

- **Three-phase pipeline (meta-extract)**: Each entity extraction follows match → resolve → extract. Match uses directory-level regex checks, resolve determines files to read, extract parses files into structured entity data.
- **Thin factory wrapping (meta-extract)**: All entities delegate to the same `defineDirectoryExtractor` helper from `@purrception/source-fs`.
- **Context threading (meta-extract)**: `DirectoryExtractContext` flows through the pipeline, wrapped in `EntityExtractContext` for output.
