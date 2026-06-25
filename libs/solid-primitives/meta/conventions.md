# @no-comply/solid-primitives Conventions

> Generated: 2026-06-25
> By: sub-agent

## Naming Conventions

| Kind             | Convention                                   | Examples                                                        |
| ---------------- | -------------------------------------------- | --------------------------------------------------------------- |
| Functions        | `camelCase`                                  | `createClassList`, `resolveRenderProp`, `shortId`               |
| Types/Interfaces | `PascalCase` (type alias, never `interface`) | `ClassList`, `PointerEventHandlers`, `TagOwnProps`              |
| Type parameters  | Single uppercase letter or descriptive       | `T`, `U`, `V`, `K`, `TParent`, `TSources`                       |
| Constants        | `UPPER_SNAKE_CASE`                           | `OWN_FOCUS_EVENT_HANDLERS`, `PRESS_EVENT_HANDLERS`, `$COMPUTED` |
| Files            | `camelCase.ts`                               | `createClassList.ts`, `dataAttributeName.ts`, `combineProps.ts` |
| Directories      | `kebab-case`                                 | `events-ext`                                                    |

- Exported symbol names mirror file names (one primary export per file).
- Index files use `// @index([...glob])` comment markers for auto-generation.

## File Organization

```
src/
  <module>/
    index.ts          # barrel re-export via @index comment marker
    types.ts           # type-only exports (if module has types)
    constants.ts       # constant values (if module has constants)
    helpers/
      index.ts         # barrel for helpers
      <helper>.ts      # one function per file
      private/
        index.ts
        <internal>.ts
```

- Modules that are only types/constants (`styles`, `ts`) skip `helpers/` and put all exports directly in `index.ts`.
- `resources` has no `types.ts` — types are co-located with implementations.
- Private implementation details live in `helpers/private/` subdirectories with their own index barrel.

## API Design Patterns

### Function-first

All logic is exported as standalone functions — no classes, no objects, no HOCs.

### Reactive wrappers

- Functions accept `AccessorOrValue<T>` to work both inside and outside reactive contexts.
- Functions return `Accessor<T>` when the result is reactive (`createClassList`, `createDataAttributes`).
- `resolveValue(value)` unwraps `AccessorOrValue<T>` to `T`.

### Overloaded signatures

Several functions use TypeScript overloads for ergonomic DX:

- `combineProps` — 5 overloads
- `computedProps` — 2 overloads
- `createChainedResource` — 2 overloads

### Prop composition via Proxy + defineProperties

- `combineProps` uses `Proxy` with lazy resolution for deep-merge of `classList`, `style`, `ref`, and event handlers.
- `computedProps` uses `Object.defineProperties` to attach getter-based computed properties.

### Resource composition

- `createChainedResource` and `createCombinedResource` use deferred Promise pattern inside `createResource`, triggered by `createEffect`.

### Type-safe factories

- `definePropKeys<T>()` uses curried generic to constrain key arrays at the type level with duplicate detection.

### Defensive runtime checks

- `definePropKeys` throws on duplicate keys.
- `mapClassName` logs errors for missing CSS module mappings.
- `computedProps` warns if given a proxy as first arg with two args.

## Typing Conventions

| Convention                  | Details                                                                       |
| --------------------------- | ----------------------------------------------------------------------------- |
| **Prefer type aliases**     | All exported shapes are `type`, never `interface`                             |
| **No runtime enums**        | Enumerations are type unions or const objects                                 |
| **Template literal types**  | `DataAttributeName<T>` uses `` `data-${T}` ``                                 |
| **Readonly tuples**         | `readonly [T \| undefined, ...]` for resolved shorthand types                 |
| **Explicit undefined**      | `T \| undefined` in unions rather than optional `?` on tuple elements         |
| **Utility types**           | `PickRequired<T, K>`, `PickProps<T, K>`, `UnwrapResponsiveProp<T>` (internal) |
| **CSS Modules integration** | Class utilities expect `Record<string, string>` styles map                    |

## Internal vs External Boundaries

- **Public**: All exports from each module's `index.ts` (barrel re-export).
- **Private**: `helpers/private/` subdirectory — never re-exported from public barrels.
- Private helpers consumed internally by `combineProps` and `computedProps` include `$COMPUTED` symbol, `resolveSource`, `getMergedProperty`, `getStyleProperty`, `getHandlerProperty`, `getClassListProperty`, `HandlerProp`.

## Cross-module Import Rules

- Modules may import from sibling modules as needed.
- No circular dependencies detected.
- `events` and `events-ext` import `definePropKeys` from `props` for constant generation.
- `tag` imports from `classes`, `data`, `styles`.
