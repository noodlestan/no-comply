# @no-comply/solid-composables — Conventions

**Generated:** 2026-06-25  
**By:** sub-agent

## Naming Conventions

| Element              | Convention                                                        | Example                                 |
| -------------------- | ----------------------------------------------------------------- | --------------------------------------- |
| Domain folders       | `kebab-case`                                                      | `responsive/`, `popover/`               |
| Entity folders       | `PascalCase`                                                      | `FlexBase/`, `MenuContext/`             |
| Source files         | `camelCase`                                                       | `createFlexBase.ts`, `types.ts`         |
| Entity IDs           | `PascalCase`                                                      | `FlexBase`, `MenuContext`               |
| Constants            | `UPPER_SNAKE_CASE` + `$PREFIX`                                    | `$FLEX_BASE`, `$MENU`                   |
| Factory functions    | `camelCase` with `create` prefix                                  | `createFlexBase`, `createFlexMixin`     |
| Controller factories | `create{Name}`                                                    | `createMenu`, `createPopover`           |
| Mixin factories      | `create{Name}Mixin`                                               | `createFlexMixin`, `createSurfaceMixin` |
| API types            | `{Name}API` suffix                                                | `FlexBaseAPI`, `MenuAPI`                |
| Props types          | `{Name}Props` suffix                                              | `FlexBaseProps`, `MenuProps`            |
| SCSS module files    | `{Entity}Mixin.module.scss`                                       | `FlexMixin.module.scss`                 |
| SCSS helper files    | `kebab-case.scss`                                                 | `variants.scss`                         |
| Providers            | `{Name}Provider` component + `use{Name}` / `use{Name}Maybe` hooks | `MenuContextProvider`, `useMenu`        |

## File Organization

### Entity pattern (each entity in its own directory)

```
{EntityName}/
  index.ts          — Re-exports all public files
  create{Name}.ts   — Factory function (controller or mixin)
  types.ts          — Props & API types
  constants.ts      — Entity ID, prop keys
  {Name}.tsx        — Optional: SolidJS component wrapper
```

### Module-level structure

```
{module}/
  index.ts          — Re-exports sub-module directories
  types.ts          — Module-level shared types (optional)
  constants.ts      — Module-level shared constants (optional)
  helpers/          — Pure utility functions
  controllers/      — Controllers (create{Name})
  mixins/           — Mixins (create{Name}Mixin)
  components/       — Components ({Name}.tsx)
  providers/        — Context providers ({Name}Provider.tsx)
  contexts/         — Context definitions (create{Name}Context)
  private/          — Internal implementation (not exported publicly)
```

### Barrel export convention

Every directory has an `index.ts` that re-exports all sub-directories except `private/`, `parts/`, `functions/`. The global pattern is:

```typescript
// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], ...)
```

## API Design Patterns

### 1. Composition via `createExposable`

Every composable starts with:

```typescript
const [locals, expose, compose] = createExposable(id, props);
```

This creates a reactive proxy that allows child composing entities to share props without prop drilling.

### 2. Key-based exposure

```typescript
exposeAPI(expose, keys, api);
```

Registers specific API keys (e.g. `'$root'`, `['$root', '$label']`) to be collected by parent composables via `compose`.

### 3. Prop splitting

Components use `splitProps(props, PROP_KEYS_LIST)` to separate local props from pass-through props:

```typescript
const [local, rest] = splitProps(props, FLEX_BASE_PROPS);
```

### 4. Combine pattern

```typescript
combineProps($rootA, $rootB, ...)
```

Merges multiple `$root`-style prop objects, used to compose lower-level `$root` outputs.

### 5. Reactive class generation

```typescript
createClassList(styles, () => ({ ... }))
```

From `@no-comply/solid-primitives` for reactive CSS class lists.

### 6. Responsive prop system

Props can be scalar or `ResponsiveProp<T>` which pairs with breakpoint arrays:

```typescript
type ResponsiveProp<T> = T | T[];
```

`responsiveBooleanClassList` and `responsiveVariantClassList` handle breakpoint-aware class generation.

### 7. `$`-prefixed spreadable props

All spreadable prop object keys use `$` prefix: `$root`, `$label`, `$anchor`, `$target`. This signals they are DOM prop bundles.

### 8. Mixin return shape (always uniform)

```typescript
{
  $root: {
    classList: ClassList;
    style: Styles;
  }
}
```

### 9. Controller return shape

```typescript
{
  $root: CombinedRootProps;
  $label?: PropObject;
  $anchor?: PropObject;
  $target?: PropObject;
  context: ContextType;
  contextValue: ContextValueType;
  update?: () => void;
  reset?: () => void;
}
```

## Typing Conventions

- Heavy use of **intersection types** (`&`) for type composition
- Types are defined per-entity in `types.ts` files
- API types are derived from composable parts (e.g. `FlexBaseAPI['$root'] & LayoutBaseAPI['$root']`)
- `PickRequired<T, K>` utility used for props with default values
- `ClosedTagProps` used as base for component wrapper props
- Event handler types from `@no-comply/solid-primitives` (e.g. `PressEventHandlers`)
- ARIA types from `@no-comply/solid-accessibility`
- **No `any` in public surfaces** — all props and APIs explicitly typed
- Supports generics for polymorphic element types (`T extends keyof JSX.IntrinsicElements`)

## CSS / SCSS Conventions

- CSS Modules (`*.module.scss`) for component-scoped styles
- Global SCSS variables injected via `additionalData` in vite config
- Global breakpoints defined as SCSS map in `build/globals.scss`
- Mixin outputs use CSS custom properties (`--__flex-flex`, `--__top`, `--__left`)
- Responsive classes driven by variant maps and breakpoint suffixes

## Error Handling

- Controllers do not throw for missing context; instead `use{Name}Maybe` returns `undefined`
- Components use `ErrorBoundary` for error recovery
- No explicit input validation in factories; TypeScript types serve as the validation layer
