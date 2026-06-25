# no-comply libs

This document consolidates naming, file organization, API design, and typing conventions across all @no-comply SolidJS libraries. It serves as a single source of reference for contributors.

## API & Types

### API Design Patterns

- **Function-first architecture**: all logic as standalone functions — no classes, no HOCs, no object factories. Controllers return reactive object literals, not class instances.
- **Factory pattern**: all public APIs are `create*` factory functions — `createAriaAlert`, `createFlexBase`, `createButton`, `createDebugContextTree`
- **Props-in, API-out**: input is a plain Props object; output is a reactive API whose properties are `Accessor` values generated via `computedProps`
- **AccessorOrValue pattern**: functions accept `AccessorOrValue<T>` to work both inside and outside reactive contexts; `resolveValue(v)` unwraps to `T`
- **Accessor return**: functions return `Accessor<T>` when the result is reactive, never a raw signal
- **Props composition**: `combineProps` uses `Proxy` with lazy resolution for deep-merge of `classList`, `style`, `ref`, and event handlers; `computedProps` uses `Object.defineProperties` for getter-based computed properties
- **Prop splitting**: `splitProps(props, PROP_KEYS_LIST)` separates domain props from DOM pass-through props
- **Prop key constants**: `definePropKeys<Type>()([...])` creates typed constant arrays with duplicate detection, used for runtime prop filtering and `splitProps`
- **TypeScript overloads**: for ergonomic DX — `combineProps` (5 overloads), `computedProps` (2), `createChainedResource` (2), accessibility controllers (static vs dynamic role)
- **Composition via delegation**: higher-level controllers compose lower-level ones internally; output merging via `combineProps`
- **createExposable pattern** (composables, standard-ui): creates a reactive proxy allowing child entities to share props without prop drilling — `const [locals, expose, compose] = createExposable(id, props)`
- **Key-based exposure**: `exposeAPI(expose, keys, api)` registers specific API keys (`'$root'`, `['$root', '$label']`) for collection by parent composables via `compose`
- **Dollar-prefixed spreadable props**: all spreadable prop object keys use `$` prefix — `$root`, `$label`, `$anchor`, `$target`, `$description` — signaling DOM prop bundles
- **Controller return shape**: every controller returns at minimum `{ $root }`; shape may include `$label?`, `$anchor?`, `$target?`, `context`, `contextValue`, `update?`, `reset?`
- **Mixin return shape**: uniform `{ $root: { classList: ClassList, style: Styles } }`
- **Reactive class generation**: `createClassList(styles, () => ({ ... }))` from `@no-comply/solid-primitives` for reactive CSS class lists
- **Responsive prop system**: props accept scalar or `ResponsiveProp<T>` (`T | T[]`); `responsiveBooleanClassList` and `responsiveVariantClassList` handle breakpoint-aware class generation
- **Provider + Hook pattern** (solid-contexts): each feature exports a `<Name>Provider` component that provides context, and a `use<Name>()` hook that reads it and throws a descriptive error if missing
- **Optional hooks** (solid-contexts): `use<Name>Maybe()` returns `T | undefined` for contexts that may not have a provider
- **Discriminated unions for variant types**: typed unions discriminated by a `type` field — `Setting` uses `'boolean' | 'number' | 'range' | 'string' | 'options' | 'params' | 'color-name'`
- **Service injection** (solid-contexts): services created externally via `create<Name>Service(options?)` and passed as props to providers
- **Zero-config components** (dev-tools): public components accept no props — state is wired via SolidJS context
- **Slot-based composition** (dev-tools): `TreeListBase` accepts a `components` prop for custom item renderers and expand buttons
- **Reactive data pipeline** (dev-tools): `ContextNode` → transformer (`createMemo`) → `Accessor<TreeNode>` → render
- **Accessibility built-in** (dev-tools): every interactive component uses `createAriaRegion` from `@no-comply/solid-accessibility`
- **No JSX output** (accessibility): pure reactive prop factories, not SolidJS components
- **eslint-disable solid/reactivity on providers** (solid-contexts): intentional — provider is a pass-through that should not track reactive dependencies
- **Short alias exports** (solid-contexts): `resolveIconValue` re-exported as `i`, `resolveLabelValue` as `l` for JSX convenience
- **Defensive runtime checks**: `definePropKeys` throws on duplicate keys, `mapClassName` logs errors for missing CSS module mappings, `computedProps` warns on misused proxy arguments

### Typing Conventions

- **Type over interface**: all exported shapes use `type` alias — no `interface` or `enum` declarations
- **Union types over runtime enums**: enumerations are string literal unions or const objects, never TypeScript `enum`
- **Intersection types for composition**: types are composed via `&` rather than class inheritance; `Omit` + intersection overrides base fields
- **Accessor for reactive reads**: signals exposed as `Accessor<T>`, never raw `Signal<T>`
- **String literal types for discriminators**: literal types for variant discriminators — `type: 'mode'`, `type: 'dark' | 'light'`
- **as const assertions**: applied to emitted static attribute objects
- **definePropKeys for typed arrays**: `definePropKeys<Type>()([...])` curried generic for typed constant arrays with duplicate key detection
- **Generic type parameters**: for role narrowing (`T extends AriaRoleName`), polymorphic element types (`T extends keyof JSX.IntrinsicElements`), and container constraints
- **Utility types**: `PickRequired<T, K>`, `PickProps<T, K>`, `ClosedTagProps<T>`, `UnwrapResponsiveProp<T>`, `AnyProps`
- **No any in public surfaces**: all props and APIs explicitly typed; no `any` in public signatures
- **Import type syntax**: use `import { type X }` or `import type { X }` for type-only imports and exports
- **Template literal types**: `${Base}${Suffix}` patterns — `DataAttributeName<T>` expands to `` `data-${T}` ``
- **Readonly tuples**: `readonly [T | undefined, ...]` for resolved shorthand types, with explicit `T | undefined` over optional `?`
- **CSS Modules integration**: class utilities expect `Record<string, string>` styles map
- **Registration tokens**: domain-scoped string constants — `'component:standard:button'`
- **Cross-package type reuse**: event handler types from `@no-comply/solid-primitives`, ARIA types from `@no-comply/solid-accessibility`, context/domain types from `@no-comply/solid-contexts` and `@no-comply/solid-composables`

## Modules and Files

### File Organization

- **One concept, one directory**: each public entity, component, or mixin has its own subdirectory with a consistent internal structure
- **Index-as-barrel**: every directory has an `index.ts` re-exporting its public files; top-level `src/index.ts` aggregates module barrels
- **Barrel codegen**: barrel files use `// @index([...glob])` comment markers for auto-generation, configured to skip `private/`, `parts/`, and `functions/` directories
- **Private directories**: `private/` at any level contains implementation details never re-exported from public barrels; `parts/` and `functions/` are also treated as internal
- **Common module files**: each module may contain `types.ts` (type-only exports), `constants.ts` (constant values), and `index.ts` (barrel)
- **Entity directory pattern**:
  ```
  <Entity>/
    index.ts            — barrel re-export
    types.ts            — Props + API types
    constants.ts        — prop keys, registration tokens
    create<Name>.ts     — factory function
    <Name>.tsx          — optional SolidJS component
    <Name>.module.scss  — optional CSS Module
  ```
- **Component subdirectory** (standard-ui, dev-tools): `.tsx` component, `create*.ts` factory, `types.ts`, `constants.ts`, `index.ts`, optional `.module.scss`
- **Mixin subdirectory** (standard-ui, composables): same structure with `create{Name}Mixin.ts` and `{Name}Mixin.module.scss`
- **SCSS in separate tree** (accessibility): SCSS mixins live in `scss/mixins/`, not co-located with controllers
- **Service/Provider split** (solid-contexts): pure-logic services in `services/`, SolidJS provider components in `providers/`
- **Feature-based grouping** (dev-tools): `components/` (UI shells), `panels/` (feature panels), `providers/` (side-effects), `styles/` (global stylesheets)
- **Internal shared utilities**: cross-module helpers in `src/private/` (solid-contexts) or `helpers/private/` (solid-primitives)
- **Import ordering**: third-party libraries → `@no-comply/*` packages → relative imports (siblings → parent → deeper)
- **No circular dependencies**: modules may import from sibling modules as needed; specific cross-dependencies include `events`/`events-ext` importing `definePropKeys` from `props`, and `tag` importing from `classes`, `data`, `styles`

## Naming

### Naming Conventions

- **Functions**: `camelCase` — `resolveRenderProp`, `shortId`, `combineProps`
- **Factory functions**: `create` prefix — `createAriaAlert`, `createFlexBase`, `createButton`, `createDebugContextTree`
- **Mixin factories**: `create{Name}Mixin` — `createFlexMixin`, `createActionMixin`
- **Service factories**: `create<Name>Service` — `createSystemContextService`
- **Components**: `PascalCase` — `Button`, `CodeBlock`, `DebugDrawer`, `TreeListItemDetails`
- **Provider components**: `<Name>Provider` — `SystemContextProvider`, `LocaleProvider`
- **Consumer hooks**: `use<Name>()` returning typed context; optional `use<Name>Maybe()` returning `T | undefined`
- **Context objects**: `<Name>Context` or `<Name>CTX` — `SystemContext`, `LocaleCTX`
- **Types**: `PascalCase` as `type` alias only, no `interface` or `enum` — `ClassList`, `ButtonProps`, `FlexBaseAPI`, `AriaAlertProps`
- **Type suffixes**: `API`, `Props`, `Options`, `Value`, `Map` — `ExposeServiceAPI`, `NavigationServiceOptions`
- **Type parameters**: single uppercase letter or descriptive — `T`, `U`, `K`, `TParent`, `TSources`
- **Constants**: `UPPER_SNAKE_CASE` — `OWN_FOCUS_EVENT_HANDLERS`, `EXPOSED_DATA_PROPS`, `BUTTON_PROPS`
- **Exposable tokens (dollar-prefixed constants)**: `$UPPER_SNAKE` — `$FLEX_BASE`, `$BUTTON`, `$COMPUTED`, `$MENU`
- **Return keys (spreadable prop bundles)**: `$`-prefix — `$root`, `$label`, `$description`, `$anchor`, `$target`
- **Source files**: `camelCase.ts` matching the primary export name — `createClassList.ts`, `createAriaRegion.ts`, `DebugDrawer.tsx`
- **Style module files**: `{Name}.module.scss` or `{Name}Mixin.module.scss` — `Button.module.scss`, `FlexMixin.module.scss`
- **Directories**: `kebab-case` for structural/domain directories, `PascalCase` for entity/component directories
- **Barrel files**: always `index.ts`
- **Internal directories**: lowercase — `private/`, `parts/`, `functions/`
- **All named exports**: no default exports
- **Exported symbols mirror file names**: one primary export per file
- **Index files**: auto-generated via `// @index([...glob])` comment markers
- **SCSS class names**: `PascalCase` with BEM-like modifier suffixes — `.Action`, `.Button`, `variant-primary`, `size-m`, `-Toggle`
- **Reducer helpers**: `reduce<Thing>` — `reduceContextVariantVars`
- **Theme context tokens** (standard-ui): `STANDARD_UI_` prefix — `STANDARD_UI_MODE_DARK`, `STANDARD_UI_SURFACE_CARD`

## Others

### Component Pattern

- **Consistent structure**: every component follows the same skeleton — `ClosedTagProps` intersection with domain props, `splitProps` to isolate domain props, factory call returning `{ $root }`, `combineProps` to merge intrinsic and computed props, `Dynamic` for element rendering
- **Props intersection**: `ClosedTagProps` (intrinsic DOM props) intersected with domain-specific props — `ButtonProps = PressableProps & ButtonMixinProps`, `ClosedTagProps & ComponentSpecificProps`
- **splitProps**: isolates domain props; remaining props pass through to the DOM element — `const [locals, $others] = splitProps(props, COMPONENT_PROPS)`
- **Factory call**: `create*()` returns a `{ $root }` API object — `const { $root } = createComponentLogic(locals)`
- **combineProps**: merges the factory's `$root` with intrinsic props from `splitProps` — `const $ = combineProps($others, $root)`
- **Dynamic**: renders the appropriate HTML element defaulting to `div` or a semantic element — `return <Dynamic {...$} />`

### Mixin Pattern

- **Consistent structure**: every mixin starts with `createExposable($TOKEN, props)` for reactive prop sharing, optionally composes child mixins via `compose`, computes styles with `createClassList`, merges roots with `combineProps`, and exposes via `exposeAPI`
- **createExposable**: creates exposable state with `compose` for collecting child mixin outputs — `const [locals, expose, compose] = createExposable($TOKEN, props)`
- **createClassList**: builds conditional class strings from SCSS module styles — `createClassList(styles, () => ['ClassName', 'variant-${variant()}'])`
- **combineProps**: merges child mixin roots with computed style props — `combineProps($childRoot, $styleRoot)`
- **exposeAPI**: registers the mixin API through SolidJS context for parent collection — `exposeAPI(expose, '$root', { $root: combineProps($childRoot, $styleRoot), extraAccessor: () => value })`

### CSS and Styling

- **CSS Modules**: component- and mixin-scoped styles via `*.module.scss` files
- **Global SCSS**: shared variables and mixins in `scss/globals.scss` or injected via `additionalData` in Vite config; global breakpoints defined as SCSS maps
- **CSS Custom Properties**: theme-driven styling via `--variable-name` pattern; standard-ui and dev-tools use custom properties for theming
- **CSS Layers**: `@layer reset, composables, theme, lib` for standard-ui; dev-tools scopes debug styles under `@layer dev-tools`
- **Responsive classes**: breakpoint-aware class generation via variant maps and breakpoint suffixes
- **SCSS class naming**: PascalCase class names (`.Action`, `.Button`) with BEM-like modifier suffixes (`variant-primary`, `size-m`, `-Toggle`)
- **Color system** (standard-ui): color-name plus scale — `ocean-400`, `olive-400`
- **Mode system** (standard-ui): `data-theme-standard` attribute with dark/light variants
- **Mixin outputs**: CSS custom properties (`--__flex-flex`, `--__top`, `--__left`) for composable styling
- **Debug overlay** (dev-tools): `data-debug` attribute as scope selector for debug overlay styles

### Error Handling

- **Defensive hooks** (solid-contexts): every `use*()` throws a descriptive error if used outside its provider; optional `use<Name>Maybe()` returns `undefined` instead of throwing
- **Runtime validation** (solid-primitives): `definePropKeys` throws on duplicate keys, `mapClassName` logs errors for missing CSS module mappings, `computedProps` warns on misused proxy arguments
- **TypeScript as validation layer**: no explicit runtime input validation in factories — TypeScript strict mode and well-typed APIs catch errors at compile time
- **No runtime error boundaries** (standard-ui): no explicit error boundaries in the package; relies on SolidJS default behaviour and `ErrorBoundary` in consumer apps
- **Missing context** (composables, standard-ui): controllers do not throw for missing context; `use{Name}Maybe` returns `undefined`
