# @no-comply/solid-primitives Conventions

> This file extends [no-comply libs conventions](../../../conventions/no-comply-libs.md).

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

### Resource composition

- `createChainedResource` and `createCombinedResource` use deferred Promise pattern inside `createResource`, triggered by `createEffect`.

### Prop composition via Proxy + defineProperties

- `combineProps` uses `Proxy` with lazy resolution for deep-merge of `classList`, `style`, `ref`, and event handlers.
- `computedProps` uses `Object.defineProperties` to attach getter-based computed properties.

## Internal vs External Boundaries

- **Public**: All exports from each module's `index.ts` (barrel re-export).
- **Private**: `helpers/private/` subdirectory — never re-exported from public barrels.
- Private helpers consumed internally by `combineProps` and `computedProps` include `$COMPUTED` symbol, `resolveSource`, `getMergedProperty`, `getStyleProperty`, `getHandlerProperty`, `getClassListProperty`, `HandlerProp`.

## Cross-module Import Rules

- Modules may import from sibling modules as needed.
- No circular dependencies detected.
- `events` and `events-ext` import `definePropKeys` from `props` for constant generation.
- `tag` imports from `classes`, `data`, `styles`.
