# @no-comply/solid-primitives Architecture

> Generated: 2026-06-25
> By: sub-agent

## Design Principles

1. **Explicit over implicit** — No global state, no context providers, no singletons. Functions require all inputs explicitly (e.g., CSS modules map is always passed to class utilities).

2. **Reactive by default** — Functions accept `AccessorOrValue<T>` and return `Accessor<T>` when the result may change. Works seamlessly both inside and outside SolidJS reactive contexts.

3. **Composition over configuration** — Complex prop objects are built by composing small functions (`combineProps` + `computedProps`) rather than via large configuration objects or class inheritance.

## Layering

```
Tag / Styles              ← composite types built on lower modules
    ↑
Events / Events-Ext       ← standalone type definitions (no internal deps beyond definePropKeys)
    ↑
Classes / Data / Id / Resources  ← domain-specific utilities
    ↑
Props / Ts                ← foundational utilities
    ↑
solid-js (peer dep)       ← only external dependency
```

### Detailed module layers

| Layer          | Modules                              | Role                                                   |
| -------------- | ------------------------------------ | ------------------------------------------------------ |
| **Foundation** | `props`, `ts`                        | Reactive prop composition, type utilities              |
| **Domain**     | `classes`, `data`, `id`, `resources` | CSS, data-attributes, ID generation, resource chaining |
| **Types**      | `events`, `events-ext`               | DOM event handler type definitions                     |
| **Composite**  | `tag`, `styles`                      | Higher-level component prop types                      |

## Dependency Flow

```
props  ──────────→ classes, events, events-ext  (via AccessorOrValue, definePropKeys)
ts     ──────────→ (consumed by all modules)
classes ─────────→ tag
data   ──────────→ tag
styles ──────────→ tag
solid-js ────────→ props, classes, data, resources
```

- `props` depends only on `solid-js` + its own `private/` helpers
- `classes` depends on `props` (`AccessorOrValue`)
- `data` depends on `solid-js` only
- `events` / `events-ext` depend on `props` (`definePropKeys`)
- `resources` depends on `solid-js` only
- `tag` depends on `classes`, `data`, `styles`, `solid-js/components`
- `styles` / `ts` — zero internal dependencies
- `id` depends on `window.crypto` (browser API)

No circular dependencies detected.

## External Dependencies

| Dependency | Type | Version |
| ---------- | ---- | ------- |
| `solid-js` | Peer | ^1.9.5  |

## Internal Dependency Graph

```
                    tag
                  ↙  ↓  ↘
           classes data styles
               ↑           ↑
           props           ts
               ↑
           events events-ext
               ↑
        definePropKeys (from props)

resources  id  data
   ↓        ↓
solid-js  window.crypto
```

## Coupling

- **Loose coupling**: Most modules can be used independently. Dependencies are one-directional and shallow.
- **Leaky boundary on `definePropKeys`**: Both `events` and `events-ext` use `definePropKeys` from `props` — cross-module utility reuse, not domain coupling.
- **Self-contained private state**: `props/helpers/private/` contains internal-only helpers never exposed to consumers.

## Build

- **Format**: ESM-only (output in `dist/esm/`)
- **Bundler**: Vite with `vite-plugin-solid`, `vite-plugin-solid-svg`, `vite-plugin-top-level-await`
- **Testing**: Vitest configured (no spec files currently)
- **Meta-extraction**: Custom `extract` script dumps entity metadata to `dist/meta.json`
