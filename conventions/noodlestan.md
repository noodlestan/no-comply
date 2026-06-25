# noodlestan code conventions

## Introduction

This document consolidates naming, file organization, API design, and typing conventions across all project types in the noodlestan monorepo. It covers @no-comply SolidJS libraries, metadata extraction packages (@purrception, @no-comply/meta, @no-comply/meta-extract), code layout and rendering packages (@purrtrait), in-browser compilation packages (@purrpose), the standard-ui-demo application, and the build toolchain. Contributors should refer to this guide as the single source of truth for writing idiomatic code across the monorepo.

## General

Conventions shared across all project types.

### API & Types

- **Type over interface**: all type definitions use `type` aliases; no `interface` or `enum` declarations (`CompiledCode`, `CodeLayoutToken`, `TypeExpressionNode`)
- **Union types over enums**: use string literal unions and discriminated unions instead of TypeScript `enum` (`kind: 'function' | 'class'`, `DebugOption = boolean | string | undefined`)
- **Intersection types for composition**: use `&` rather than `extends` for combining types; avoid inheritance chains
- **No classes**: all public APIs are plain functions or factory functions returning object literals; no `class`, `new`, or constructor functions
- **Explicit type imports**: use `import type { X }` or `import { type X }` for all type-only imports, enforced by `verbatimModuleSyntax`
- **Generics with constraints and defaults**: generics constrained with `extends` and defaulted with `=` (`T extends EntityDataBase`, `evaluateValue<T>`)
- **Factory function pattern**: all public APIs are `create*` factory functions returning typed objects (`createProgram`, `createSolidCodeLayoutContext`, `createCompiler`, `createButton`)
- **Options-as-object pattern**: accept configuration via a single options object rather than positional arguments
- **Discriminated unions**: use a `kind` or `type` string discriminator for exhaustive type narrowing
- **Type guards**: use `is` return-type syntax for narrowing (`node is Type`, `dec is ComponentEntityData`)
- **No `any` in public surfaces**: all generics properly constrained; `object` used for generic node parameters; `as` casts allowed only where necessary
- **Explicit return types**: all public functions and handlers have annotated return types (`CodeLayoutNode[]`, `CompilerPreset`, `Accessor<T>`)
- **Immutability**: functions return new objects and arrays via spread; never mutate inputs or context
- **Context object pattern**: bundle related state or configuration into a context object threaded through a pipeline, carrying dependencies and config rather than threading individual parameters
- **Switch dispatch**: dispatch to specialized handlers via a switch on a `kind` discriminator
- **Composition**: handlers compose by calling other handlers; higher-level logic delegates to lower-level helpers
- **Thin wrappers**: extractors and factories are thin compositions of lower-level helpers with no additional logic

### Modules and Files

- **One export per file**: each file exports a single primary function, type, or component; exceptions are type-grouping files and barrel files
- **Barrel re-exports**: every directory has an `index.ts` re-exporting all public symbols using `// @index` auto-generation comment markers
- **`private/` directories**: internal implementation lives in `private/` subdirectories and is never re-exported from public barrels; `parts/` and `functions/` are also treated as internal
- **`helpers/` directories**: shared utilities separated from core implementation, often re-exported via barrel
- **Types in separate files**: type definitions live in `types.ts` files adjacent to implementation, separated from runtime logic
- **Files named after primary export**: source filenames match their primary export name (`createCompiler.ts` → `createCompiler`, `CodeBlock.tsx` → `CodeBlock`)
- **Thin CLI layer**: `bin/` files import, compose, and invoke; no logic lives there

### Naming

- **Types**: PascalCase with descriptive suffixes (`TypeExpressionNode`, `CodeBlockProps`, `SolidCodeLayoutContext`)
- **Functions**: camelCase named after primary action and target (`resolveExpression`, `computeLayout`, `createCompiler`)
- **Constants**: UPPER_SNAKE_CASE for public constants (`BUILTIN_TYPES`, `TARGET_ATTRIBUTE_NAME`, `FORCED_DELAY`)
- **Factory functions**: `create*` prefix (`createDirectoryExtractContext`, `createSolidCodeLayoutContext`, `createCompiler`, `createAriaAlert`)
- **Components**: PascalCase (`CodeBlock`, `Button`, `AppServicesProvider`)
- **Variables**: camelCase
- **Generic type parameters**: single uppercase letters or descriptive names (`T`, `U`, `K`, `P`, `F`, `C`, `L`)
- **Prop types**: PascalCase with `Props` suffix (`CodeBlockProps`, `ButtonProps`)
- **Barrel files**: always `index.ts`
- **All named exports**: no default exports

### Others

- **Tabs**: for indentation (inherited from monorepo Prettier config)
- **Semicolons**: none
- **Quotes**: single quotes

## SolidJS UI Libraries

Libraries for building SolidJS component UIs: `@no-comply/solid-primitives`, `@no-comply/solid-accessibility`, `@no-comply/solid-contexts`, `@no-comply/solid-composables`, `@no-comply/solid-dev-tools`, `@no-comply/standard-ui`.

### Component & Mixin Patterns

- **Function-first architecture**: all logic as standalone functions; controllers return reactive object literals via `create*` factories
- **Props-in, API-out**: input is a plain Props object; output is a reactive API whose properties are `Accessor` values generated via `computedProps`
- **AccessorOrValue pattern**: functions accept `AccessorOrValue<T>` to work both inside and outside reactive contexts; `resolveValue(v)` unwraps to `T`
- **Accessor return**: functions return `Accessor<T>` when the result is reactive, never a raw signal
- **Props composition**: `combineProps` uses `Proxy` with lazy resolution for deep-merge; `computedProps` uses `Object.defineProperties` for getter-based computed properties
- **Prop splitting**: `splitProps(props, PROP_KEYS_LIST)` separates domain props from DOM pass-through props
- **Prop key constants**: `definePropKeys<Type>()([...])` creates typed constant arrays with duplicate detection
- **TypeScript overloads**: for ergonomic DX (`combineProps` with 5 overloads, `createChainedResource` with 2)
- **Composition via delegation**: higher-level controllers compose lower-level ones internally; output merging via `combineProps`
- **createExposable pattern**: creates a reactive proxy allowing child entities to share props without prop drilling (`const [locals, expose, compose] = createExposable(id, props)`)
- **Key-based exposure**: `exposeAPI(expose, keys, api)` registers specific API keys for collection by parent composables via `compose`
- **Dollar-prefixed spreadable props**: spreadable prop object keys use `$` prefix (`$root`, `$label`, `$anchor`) signaling DOM prop bundles
- **Controller return shape**: every controller returns at minimum `{ $root }`; may include `$label?`, `$anchor?`, `$target?`, `context`, `contextValue`, `update?`, `reset?`
- **Mixin return shape**: uniform `{ $root: { classList, style } }`
- **Discriminated unions for variants**: typed unions discriminated by a `type` field (`Setting` uses `'boolean' | 'number' | 'range' | 'string' | 'options' | 'params' | 'color-name'`)
- **Provider + Hook pattern**: each feature exports a `<Name>Provider` component that provides context, and a `use<Name>()` hook that reads it and throws a descriptive error if missing
- **Optional hooks**: `use<Name>Maybe()` returns `T | undefined` for contexts that may not have a provider
- **Service injection**: services created externally via `create<Name>Service(options?)` and passed as props to providers
- **Zero-config components**: public components accept no props; state is wired via SolidJS context
- **Slot-based composition**: components accept a `components` prop for custom item renderers and expand buttons
- **Reactive class generation**: `createClassList` for reactive CSS class lists
- **Responsive prop system**: props accept scalar or `ResponsiveProp<T>`; `responsiveBooleanClassList` and `responsiveVariantClassList` handle breakpoint-aware class generation
- **No JSX output**: accessibility controllers are pure reactive prop factories, not SolidJS components
- **Short alias exports**: frequently used resolvers re-exported as single-letter names (`resolveIconValue` as `i`, `resolveLabelValue` as `l`)
- **Component pattern**: every component follows `ClosedTagProps` intersection with domain props, `splitProps` to isolate domain props, factory call returning `{ $root }`, `combineProps` to merge intrinsic and computed props, `Dynamic` for element rendering
- **Mixin pattern**: every mixin starts with `createExposable($TOKEN, props)`, optionally composes child mixins via `compose`, computes styles with `createClassList`, merges roots with `combineProps`, exposes via `exposeAPI`

### API & Types

- **Accessor for reactive reads**: signals exposed as `Accessor<T>`, never raw `Signal<T>`
- **String literal types for discriminators**: literal types for variant discriminators (`type: 'mode'`, `type: 'dark' | 'light'`)
- **`as const` assertions**: applied to emitted static attribute objects
- **`definePropKeys` for typed arrays**: curried generic for typed constant arrays with duplicate key detection
- **Utility types**: `PickRequired<T, K>`, `PickProps<T, K>`, `ClosedTagProps<T>`, `UnwrapResponsiveProp<T>`
- **Template literal types**: `${Base}${Suffix}` patterns (`DataAttributeName<T>` expands to `` `data-${T}` ``)
- **Readonly tuples**: `readonly [T | undefined, ...]` for resolved shorthand types
- **CSS Modules integration**: class utilities expect `Record<string, string>` styles map
- **Registration tokens**: domain-scoped string constants (`'component:standard:button'`)
- **Cross-package type reuse**: event handler types from solid-primitives, ARIA types from solid-accessibility, context types from solid-contexts and solid-composables
- **Generic threading**: type parameters flow from `@purrception/primitives` to `@no-comply/meta` to `@no-comply/meta-extract` for extraction pipelines
- **Defensive runtime checks**: `definePropKeys` throws on duplicate keys, `mapClassName` logs errors for missing CSS module mappings, `computedProps` warns on misused proxy arguments

### Modules and Files

- **One concept, one directory**: each public entity, component, or mixin has its own subdirectory with a consistent internal structure
- **Entity directory pattern**: `<Entity>/index.ts`, `types.ts`, `constants.ts`, `create<Name>.ts`, `<Name>.tsx`, `<Name>.module.scss`
- **Mixin subdirectory**: same structure with `create{Name}Mixin.ts` and `{Name}Mixin.module.scss`
- **Component subdirectory**: `.tsx` component, `create*.ts` factory, `types.ts`, `constants.ts`, `index.ts`, optional `.module.scss`
- **Service/Provider split**: pure-logic services in `services/`, SolidJS provider components in `providers/`
- **Feature-based grouping**: `components/` for UI shells, `panels/` for feature panels, `providers/` for side-effects, `styles/` for global stylesheets
- **SCSS in separate tree**: SCSS mixins live in `scss/mixins/`, not co-located with controllers
- **Common module files**: each module may contain `types.ts`, `constants.ts`, and `index.ts`
- **Import ordering**: third-party libraries first, then `@no-comply/*` packages, then relative imports (siblings, parent, deeper)
- **No circular dependencies**: modules may import from sibling modules as needed

### Naming

- **Mixin factories**: `create{Name}Mixin` (`createFlexMixin`, `createActionMixin`)
- **Service factories**: `create<Name>Service` (`createSystemContextService`)
- **Provider components**: `<Name>Provider` (`SystemContextProvider`, `LocaleProvider`)
- **Consumer hooks**: `use<Name>()` returning typed context; optional `use<Name>Maybe()` returning `T | undefined`
- **Context objects**: `<Name>Context` or `<Name>CTX` (`SystemContext`, `LocaleCTX`)
- **Type suffixes**: `API`, `Options`, `Value`, `Map` for service and configuration types (`ExposeServiceAPI`, `NavigationServiceOptions`)
- **Exposable tokens**: `$UPPER_SNAKE` (`$FLEX_BASE`, `$BUTTON`, `$COMPUTED`)
- **Return keys**: `$`-prefix for spreadable prop bundles (`$root`, `$label`, `$description`, `$anchor`)
- **Source files**: camelCase matching the primary export name (`createClassList.ts`, `createAriaRegion.ts`, `DebugDrawer.tsx`)
- **Style module files**: `{Name}.module.scss` or `{Name}Mixin.module.scss` (`Button.module.scss`, `FlexMixin.module.scss`)
- **Directories**: kebab-case for structural and domain directories, PascalCase for entity and component directories
- **SCSS class names**: PascalCase with BEM-like modifier suffixes (`.Action`, `.Button`, `variant-primary`, `size-m`)
- **Reducer helpers**: `reduce<Thing>` (`reduceContextVariantVars`)
- **Theme context tokens**: `STANDARD_UI_` prefix (`STANDARD_UI_MODE_DARK`, `STANDARD_UI_SURFACE_CARD`)

### CSS and Styling

- **CSS Modules**: component- and mixin-scoped styles via `*.module.scss` files
- **Global SCSS**: shared variables and mixins in `scss/globals.scss` or injected via Vite `additionalData`; global breakpoints defined as SCSS maps
- **CSS Custom Properties**: theme-driven styling via `--variable-name` pattern
- **CSS Layers**: `@layer reset, composables, theme, lib` for standard-ui; debug styles scoped under `@layer dev-tools`
- **Responsive classes**: breakpoint-aware class generation via variant maps and breakpoint suffixes
- **Color system**: color-name plus scale (`ocean-400`, `olive-400`)
- **Mode system**: `data-theme-standard` attribute with dark and light variants
- **Mixin outputs**: CSS custom properties (`--__flex-flex`, `--__top`, `--__left`) for composable styling
- **Debug overlay**: `data-debug` attribute as scope selector for debug overlay styles

### Error Handling

- **Defensive hooks**: every `use*()` throws a descriptive error if used outside its provider; optional `use<Name>Maybe()` returns `undefined`
- **Runtime validation**: `definePropKeys` throws on duplicate keys, `mapClassName` logs errors for missing CSS module mappings
- **TypeScript as validation layer**: no explicit runtime input validation in factories; TypeScript strict mode and well-typed APIs catch errors at compile time
- **No runtime error boundaries**: no explicit error boundaries in packages; relies on SolidJS default behaviour and `ErrorBoundary` in consumer apps

## Metadata Extraction

Packages for extracting structured metadata from codebases: `@purrception/primitives`, `@purrception/lang-ts`, `@purrception/lang-ts-extract`, `@purrception/source-fs`, `@no-comply/meta`, `@no-comply/meta-extract`.

### Pipeline Patterns

- **3-phase extractor pipeline**: each entity extraction follows `match` → `resolve` → `extract`, each independently implementable
- **Partial-to-full pipeline**: `EntityDataBasePartial` serves as unstamped input, `EntityDecorator<T>` transforms it, consumers receive `EntityExtractResult<T, C>`
- **Strategy pattern**: `DirectoryExtractAPI` interface enables polymorphic extractor dispatch; each entity uses a match/resolve/extract triad
- **Collector pattern**: processors accumulate functions executed in parallel via `Promise.all`
- **Filter chain**: extraction chains use `.map().filter(Boolean)` to map to domain types and filter out `undefined`
- **Narrow returns**: functions that may not match return `| undefined`, with callers filtering via `.filter(Boolean)`
- **Lazy evaluation**: memoized closures defer computation (`if (!map) { map = ... }`)
- **Dependency injection**: context objects provide functions like `readFile` so consumers are decoupled from the filesystem
- **Async throughout**: all extraction, file reading, and matching operations are `async`
- **Type-only surfaces**: some packages define their entire API surface as type aliases with no runtime logic
- **Fail early**: unsupported nodes produce an error with node kind, file path, line number, and source snippet
- **Silent skip**: functions that cannot extract return `undefined` instead of throwing; unknown references produce `console.warn` and return the original node
- **Circular references**: throw `Error`
- **Duplicate detection**: `extractImportedSymbols` throws on duplicate import keys; `indexEntities` throws on duplicate entity keys
- **Maybe/Option pattern**: every lookup has a safe variant returning `undefined` and a throwing variant (`getEntityMaybe` / `getEntity`)
- **Generic filter pattern**: API functions accept a `Filter` union — array of names (whitelist) or predicate function
- **Defensive copying**: `getEntities()` returns `[...entities]` spread copy to prevent mutation
- **Consistent error message format**: error messages follow patterns like `"Could not resolve ..."`, `"Unknown entity ..."`, `"Duplicate entity ..."`
- **Optional override pattern**: matcher, resolver, and decorator default to private implementations but can be overridden via factory `options`
- **Consistent factory signature**: all factory functions follow the same `createXEntityExtractor` structure delegating to `defineDirectoryExtractor`
- **Type-generic pipeline**: type parameters `P` (Partial), `F` (Files), `T` (Data) flow through the match → resolve → extract chain
- **No singletons, no global state**: all state is explicitly created and passed through the pipeline

### Modules and Files

- **Module-per-concept**: each conceptual domain has a top-level directory under `src/` (`declaration/`, `jsdoc/`, `node/`, `resolve/`, `contexts/`, `extractors/`)
- **One file per AST node kind**: TypeScript AST node extractors each have their own file (`extractUnionTypeNode.ts`, `extractObjectLiteralTypeNode.ts`)
- **Recursive index pattern**: parent modules re-export from children (`src/index.ts` → `src/declaration/index.ts` → `src/declaration/helpers/index.ts`)
- **Sub-resolver isolation**: complex logic decomposed into subdirectories (`kinds/`, `normalize/`, `operators/`)
- **Entity-per-directory**: each entity type in `src/entities/<EntityName>/` with `index.ts`, `types.ts`, and `helpers/`
- **Per-entity with factory and private**: each entity directory has a thin `create*EntityExtractor.ts` factory and a `private/` subdirectory with extractor, matcher, and resolver modules
- **Cross-cutting utilities**: shared helpers go in `utils/helpers/`
- **Heuristics layer**: thin wrapper functions that delegate to callbacks

### Naming

- **`extract*` prefix**: extraction functions (`extractFunctionsFromProgram`, `extractEntitiesFromFileSystem`)
- **`process*` prefix**: processing functions (`processRootDir`, `processPaths`)
- **`*Options` suffix**: configuration objects (`DirectoryExtractorOptions`, `DebouncedWatcherOptions`)
- **Prefix groups**: `Entity*` for pipeline types, `Docs*` for documentation metadata, `*Symbol` for symbol tracking
- **Internal fields**: underscore prefix for transient or internal fields (`_source`)
- **Accessors**: `get*` prefix (`getEntities`, `getEntityMaybe`)
- **Type guards**: `is*` prefix (`isNoComplyComponent`, `isNoComplyContext`)
- **Existence checks**: `has*` prefix (`hasPackage`, `packageHasModule`)
- **Resolvers**: `resolve*` prefix (`resolveComponentDeclaration`)
- **Indexers**: `index*` prefix (`indexEntities`)
- **Type discriminators**: lowercase singular (`'component'`, `'context'`, `'module'`)
- **Type parameters**: single uppercase letters — `P` (Partial), `F` (Files), `T` (Data)
- **Private modules**: lowercase camelCase (`entityExtractor`, `entityMatcher`)
- **File finders**: `find*File(s)` prefix (`findEntityFiles`)
- **Source files**: kebab-case (`create-no-comply-meta-service.ts`)
- **Entity directories**: PascalCase (`Component/`, `Context/`, `Controller/`)

## Code Layout & Rendering

Packages for visualizing and rendering codebase metadata: `@purrtrait/code-layout`, `@purrtrait/lang-ts`, `@purrtrait/client-tsx`, `@purrtrait/solid-code`, `@purrtrait/view-tsx`.

### Rendering & Layout Patterns

- **Pure functions**: all functionality is exposed as standalone functions, not classes or methods; no state
- **Plugin / registry pattern**: languages are registered via `CodeLayoutLanguage[]`, enabling extensibility without modifying core
- **Pipeline**: transformation follows AST node → expression/declaration handler → token factories → `CodeLayoutNode[]` tree
- **Options object with Partial merging**: public functions accept `Partial<T>` options and merge with built-in defaults (`createOptions()`, `SolidCodeLayoutContextOptions`)
- **Typed wrapper pattern**: thin tagged types wrap raw `ts.Node` for semantic narrowing without runtime overhead (`TSXNode`)
- **Callback-based transformation**: transformation callbacks keep libraries framework-agnostic (`PropEvaluator`)
- **Convention over configuration**: sensible defaults provided (`columns: 60`, empty `langs`, no-op linker)
- **Default implementations**: fallback implementations supplied when no custom component is provided (`SolidCodeLinkDefault`)
- **Configurable names**: magic strings (attribute names, placeholder names, prop names) are overridable via options
- **Sync-only API**: no async or promise-based interfaces
- **Type-driven design**: types defined first, then functions consume them; no runtime type checks
- **Error handling**: fatal errors throw `Error` with descriptive messages; non-fatal issues log to `console.error` and skip

### Modules and Files

- **Domain-based directories**: source split by domain (`components/`, `contexts/`, `providers/`, `compute/`, `format/`, `expressions/`, `declarations/`)
- **Feature subdirectories**: each feature has its own subdirectory with `index.ts`, `types.ts`, and implementation files (`CodeBlock/index.ts`, `CodeBlock/types.ts`, `CodeBlock/CodeBlock.tsx`)
- **Layer-based organization**: top-level layers use `helpers/` subdirectory for implementation files
- **Flat internal structure**: inside `private/` and `helpers/`, files are flat with no nested subdirectories
- **Max nesting**: at most two levels deep (`module/private/file.ts`)

### Naming

- **Expression handlers**: prefix `exp{Kind}` (`expArray`, `expFunction`, `expIntersection`)
- **Declaration handlers**: prefix `layout{Kind}Declaration` (`layoutTypeDeclaration`, `layoutFunctionDeclaration`)
- **Token factories**: suffix `{Kind}Token` (`identifierToken`, `keywordToken`, `typeRefToken`)
- **Domain prefix**: domain-specific types use a domain prefix (`TSX` prefix for TSX view types)

## In-Browser Compilation

Packages for in-browser code compilation: `@purrpose/client-babel`, `@purrpose/client-babel-preset-solidjs`.

### Compiler Patterns

- **Preset-as-config**: `CompilerPreset` bundles babel presets and scope; the return value is pure configuration, not a runtime plugin or class
- **Default + named export**: factory functions are exported both as named and default exports
- **Debug modes**: `undefined` for error-only, `false` for silent, `true` for verbose, `string` for prefixed verbose
- **Error handling**: errors are always thrown; conditionally logged before throw
- **No error handling in presets**: factory presets have no validation, no error states, and no conditional logic
- **Pragmatic escape hatch**: use `@ts-expect-error` with a comment for imports missing type declarations
- **Dynamic scope**: use `Record<string, unknown>` for dynamic scope values
- **File-private types**: internal config types are kept file-private
- **Consume external types**: prefer consuming types from dependencies over defining new ones

### Modules and Files

- **Flat source layout**: `src/` contains the barrel and implementation files only
- **Barrel auto-exclude**: barrel files auto-exclude `private/`, `parts/`, and `functions/` directories
- **Single main entry**: each package has one primary entry point (`createCompiler`) with compositional helpers
- **No test files in package**: test files are not included in the package

### Naming

- **Config files**: kebab-case (`vite.config.mts`)
- **Package naming**: scoped `@purrpose/` with path-style name (`client-babel-preset-solidjs`)

## Demo Application

The demo application and documentation site: `@no-comply/standard-ui-demo`.

### Application Patterns

- **Context provider pattern**: context defined in `private/`, guarded hook in public, provider component composes factory and context (`AppServicesProvider`, `MetaProvider`)
- **SolidJS `Accessor`**: `Accessor<T>` for all reactive values
- **Context types in `private/`**: context types defined in `private/` and consumed via guarded hooks

### Modules and Files

- **Feature directory pattern**: each feature contains `index.ts` (barrel), `FeatureName.tsx` (component), `types.ts`, `constants.ts`, `helpers/`, `parts/` (sub-components), `private/` (internal), and `*.module.scss` (styles)

### Naming

- **Hooks**: `use*` prefix (`useAppServices`, `useMeta`)
- **CSS classes**: kebab-case (`has-focus`, `screen-title`)
- **Source files**: PascalCase for components (`App.tsx`), camelCase for utilities (`createAppNavigation.ts`)

### Styling Conventions

- **CSS Modules**: `*.module.scss` for component-scoped styles
- **SCSS**: global variables and mixins injected via Vite `additionalData`
- **Class list utility**: `createClassList` from `@no-comply/solid-primitives` for computed class lists
- **Color scheme**: `@media (prefers-color-scheme: light)` in `index.html` for color scheme base styles
- **Base styles**: `layers.css` and `reset.css` in `src/styles/`

## Build Tooling

The esbuild-based build system: `@no-comply/build-tools`.

### Build Configuration Patterns

- **Partial application / currying**: CLI wrappers use curried factories (`const cjs = options => createBuild(options, cjsConfig)`)
- **Config merging with layering**: inferred externals → defaults → user options (later wins, deduped via Set)
- **Plugin composition**: user plugins + default plugins + auto-appended `emitTypesPlugin`
- **No TypeScript**: the package uses plain JavaScript (`.mjs`); typing is implicit through object shapes passed to esbuild

### Modules and Files

- **One concern per directory**: directories separated by architectural role (`config/`, `helpers/`, `plugins/`)

### Naming

- **Factory case**: PascalCase after `create` (`createBuild`, `copyStaticFilesPlugin`)
- **Config objects**: camelCase (`commonConfig`, `cjsConfig`, `esmConfig`)
- **Esbuild plugin names**: kebab-case (`'emitTypes'`, `'copy-static-files'`)
- **CLI binary names**: kebab-case (`no-comply-build`, `no-comply-watch`)
- **Source files**: kebab-case with `.mjs` extension (`resolve-package-json.mjs`)
- **Generic directories**: kebab-case (`build/`, `config/`, `helpers/`, `plugins/`)
