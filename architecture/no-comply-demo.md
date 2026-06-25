# no-comply demo

> This file extends [no-comply architecture](./nocomply.md).

This document consolidates design principles, layering, dependency flow, and external dependencies across @no-comply demo-scope packages (`standard-ui-demo`, `build-tools`, `meta`, `meta-extract`). It serves as a single source of truth for contributors.

## Design Principles

### Convention over Configuration

- **Convention over configuration** — Sensible esbuild presets (CJS/ESM); auto-infers externals from `package.json` (build-tools)

### Type Safety

- **Reactive primitives** — SolidJS `Accessor<T>` pattern for all reactive values; no mutable state (standard-ui-demo)

### Static and Minimal Dependencies

- **Minimal dependencies** — Only one runtime dependency (`@purrception/lang-ts`) for meta; `esbuild` is used at runtime but not listed as a peer for build-tools; consumers are expected to provide it (meta, build-tools)

### Trade-offs

- **No data fetching** — Simple architecture, offline-capable, but not dynamic (standard-ui-demo)
- **Static meta JSON at build time** — Fast runtime, no server needed, but requires rebuild for content changes.

- **In-browser TSX compiler** — Enables live playground but bundles large TypeScript/Babel dependencies.

- **Heavy monorepo dependency** — Tight coupling to `@no-comply/*` ecosystem; hard to reuse outside.

- **CSS Modules + SCSS globals** — Scoped styles with shared design tokens, but adds build complexity.

- **Private context pattern** — Clear API boundaries, but boilerplate-heavy (context + provider + hook + factory).

### Application Architecture

- **Context-based dependency injection** — SolidJS `Context` for all service injection; guarded hooks (`useXxx`) enforce provider wrapping.

- **Static build-time composition** — Meta JSON, theme data, examples bundled at build time; no runtime data fetching.

- **Factory pattern for services** — All services are factory functions (`createAppNavigation`, `createAppStatus`, `createTSXCompilerModule`, `createAppServices`) returning typed plain objects.

### Build Pipeline Patterns

- **Convention over configuration** — Sensible esbuild presets (CJS/ESM); auto-infers externals from `package.json`.

- **Factory-based composition** — `createBuild` composes configs, helpers, and plugins; no class hierarchies. Build tooling is isolated from consumer packages.

### Meta Entity Patterns

- **Entity composition via intersection types** — `NoComplyEntityPartial & EntityDataBase & {...}` shapes built by intersecting base types.

- **3-level indexing** — `src/private/indexEntities` transforms `NoComplyEntityData[]` into a 3-level Map (`package` > `type` > `name`).

- **Service layer** — `createNoComplyMetaService` factory returns `NoComplyMetaAPI` public query interface.

### Extraction Pipeline Patterns

- **Separation of match, resolve, extract** — Each concern is isolated in its own module within `private/`, making the pipeline testable and overridable.

- **Uniform factory interface** — All 7 entity extractors share the same `DirectoryExtractorFactory` signature.

- **Convention over configuration** — Directory structure encodes entity type and module membership; no config files needed.

- **Downward dependency flow** — `meta-extract` depends on all four upstream packages (`@purrception/primitives`, `@purrception/source-fs`, `@purrception/lang-ts-extract`, `@no-comply/meta`), and nothing depends on `meta-extract`.

## Layering

### Application Layers

- **Entry and App layers (standard-ui-demo)** — Entry layer renders `<App>` inside `<SystemContextProvider>`. App layer contains Router, navigation, screens, templates, components, content, dialogs. Infrastructure layer wires libs → app through providers and services. Foundation layer holds static data, utilities, environment config, and global styles.

- **Build pipeline layers** — CLI entry → Core factory → Configs (esbuild presets) → Helpers (filesystem and package resolution) → Plugins (esbuild lifecycle hooks).

- **Meta entity layers** — Layer 0: External primitives. Layer 1: External lang types. Layer 2: Entity definitions. Layer 3: Private indexer. Layer 4: Service layer.

### Extraction Pipeline Layers (meta-extract)

- **Layer 0 — External primitives** — `@purrception/primitives` provides base entity types
- **Layer 1 — External extraction infra** — `@purrception/source-fs` provides `defineDirectoryExtractor` and `DirectoryExtractContext`; `@purrception/lang-ts-extract` provides `createProgram` and AST extraction methods
- **Layer 2 — Entity types** — `@no-comply/meta` provides NoComply entity type definitions (types only)
- **Layer 3 — Concrete extractors** — `@no-comply/meta-extract` implements 7 entity extractors, each with `private/` subdir containing `entityExtractor.ts`, `entityMatcher.ts`, and `fileResolver.ts`
- **Heuristics and utils** — `src/heuristics/` wraps `resolveEntityFiles` and `resolveEntityPartial`; `src/utils/helpers/` provides 7 file finder functions

### Extensibility

- **Plugin via Provider** — Wrap a new provider around existing ones to add capabilities.

- **Theme via Data** — Add entries to `THEMES` static array.

- **Screens via Routes** — New routes added in `src/app/navigation/Routes.tsx`.

- **Meta via JSON** — Add more `@no-comply/*` meta JSON imports in `MetaProvider`.

## Dependency Flow

### General Flow

- **No cross-layer skip** — Screens do not directly import services in standard-ui-demo; all access is through context

### Standard UI Demo

- **Providers depend on services** — `AppServicesProvider` calls `createAppNavigation`, `createAppStatus`
- **Screens depend on providers** — Via `useMeta()`, `useAppServices()` hooks
- **Services depend on app navigation** — `createAppNavigation` imports `routeFor`

### Build Tools

- **Unidirectional internal** — `bin/` → `build/` → `config/`, `helpers/`, `plugins/`
- **Acceptable exception** — `config/esm.mjs` imports `plugins/copyStaticFiles.mjs`, a slight upward dependency from config to plugin (both are leaf modules)

### Meta

- **Internal flow** — `src/entities/` → `src/private/indexEntities.ts` → `src/createNoComplyMetaService.ts` → `src/index.ts`
- **External flow** — `@purrception/primitives` → `@purrception/lang-ts` → `@no-comply/meta` (all dependencies flow inward-to-outward)

## External Dependencies

### Runtime Dependencies

- **`@no-comply/meta`** — Meta service types and `createNoComplyMetaService` (standard-ui-demo); entity type definitions (meta-extract)
- **`@no-comply/solid-accessibility`** — A11y primitives and patterns (standard-ui-demo)
- **`@no-comply/solid-composables`** — Reusable SolidJS composable utilities (standard-ui-demo)
- **`@no-comply/solid-contexts`** — Context providers (Theme, Mode, Surface) (standard-ui-demo)
- **`@no-comply/solid-dev-tools`** — Development tooling (standard-ui-demo)
- **`@no-comply/solid-primitives`** — SolidJS primitive utilities (standard-ui-demo)
- **`@no-comply/standard-ui`** — Themeable component library (standard-ui-demo)
- **`@purrception/primitives`** — Base entity types (`EntityDataBase`, `EntityDataBasePartial`) (meta, meta-extract)
- **`@purrception/lang-ts`** — TypeScript AST types and JsDoc helpers; only runtime dependency of meta (meta)
- **`@purrception/lang-ts-extract`** — TS AST parsing and extraction (meta-extract)
- **`@purrception/source-fs`** — Filesystem traversal and extractor framework (meta-extract)
- **`@purrpose/client-babel` + `-preset-solidjs`** — In-browser JSX/TSX compilation (standard-ui-demo)
- **`@purrtrait/code-layout`** — Code layout models (standard-ui-demo)
- **`@purrtrait/lang-ts`** — TS language support for purrtrait (standard-ui-demo)
- **`@purrtrait/client-tsx`** — In-browser TS/TSX parsing (standard-ui-demo)
- **`@purrtrait/solid-code`** — SolidJS code renderers (standard-ui-demo)
- **`@purrtrait/view-tsx`** — Editable TSX code models (standard-ui-demo)
- **`solid-js`** — Reactive UI framework (standard-ui-demo); peer dependency for meta
- **`@solidjs/router`** — Client-side routing (standard-ui-demo)
- **`lucide-solid`** — Icon library (standard-ui-demo)
- **`solid-services`** — Service utilities (standard-ui-demo)
- **`solidjs-use`** — Composition utilities (standard-ui-demo)
- **`esbuild`** — Core bundler used by the factory; implicit runtime peer, not listed as a peer in build-tools (build-tools)

### Dev Dependencies

- **`vite`** — Build tool and dev server (standard-ui-demo)
- **`vite-plugin-solid`** — SolidJS Vite integration (standard-ui-demo)
- **`vite-plugin-solid-svg`** — SVG import support (standard-ui-demo)
- **`vite-plugin-top-level-await`** — Top-level await in build (standard-ui-demo)
- **`csstype`** — CSS type definitions (standard-ui-demo)
- **`typescript`** — TypeScript compiler (standard-ui-demo)
- **`esbuild-plugin-file-path-extensions`** — ESM `.mjs` extension resolution plugin (build-tools)
- **`ts-node`** — Used for TypeScript declaration generation via `emitTypesPlugin` (build-tools)

### Peer Dependencies

- **`solid-js` for meta** — Referenced in types for Solid-aware metadata; not directly imported in source
- **`esbuild` for build-tools** — Used at runtime but not listed as a peer; consumers are expected to provide it
- **None for meta-extract** — No peer dependencies declared
- **None for standard-ui-demo** — No peer dependencies declared
