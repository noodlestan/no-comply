# @no-comply/solid-composables — Architecture

**Generated:** 2026-06-25  
**By:** sub-agent

## Design Principles

1. **Props-in, props-out** — Every composable receives props and returns reactive DOM prop bundles (`$root`), enabling declarative composition without imperative wiring.
2. **Separation of behavior from presentation** — Controllers handle logic/state; mixins handle CSS class/style generation; components handle JSX rendering. Each layer can be used independently.
3. **Composition over inheritance** — The `createExposable` / `exposeAPI` / `compose` system allows any number of entities to share the same reactive props proxy, avoiding prop drilling and deep component hierarchies.
4. **Accessibility as a first-class concern** — All interactive patterns integrate `@no-comply/solid-accessibility` for ARIA attributes and keyboard interaction.

## Layering

```
Layer 3: Components / Providers / Hooks   — JSX rendering, context wiring
  e.g. FlexBase, MenuContextProvider, useMenu
      ↓ depends on
Layer 2: Controllers / Contexts           — State, side effects, composition
  e.g. createMenu, createPopoverContext, createPlacement
      ↓ depends on
Layer 1: Mixins / Helpers / Primitives    — CSS class generation, DOM props, utilities
  e.g. createFlexMixin, resolveGapShorthand, responsiveBooleanClassList
      ↓ depends on
Foundation: @no-comply/solid-* siblings   — Primitives, contexts, accessibility
```

Each domain module (e.g. `menu/`, `popover/`) is a **vertical slice** containing entities across all three layers, co-located in a single directory tree.

## Dependency Flow

```
solid-composables
  ├── @no-comply/solid-contexts       (createExposable, compose, ContextNodeProvider)
  ├── @no-comply/solid-accessibility  (aria types, LayoutTagName)
  ├── @no-comply/solid-primitives     (combineProps, createClassList, ResponsiveProp)
  ├── @solid-primitives/set           (Set utilities)
  ├── @solid-primitives/resize-observer
  ├── solid-js ^1.9.5                (peer: signals, components, context)
  └── lucide-solid ^0.453.0          (peer: icon component)
```

**Internal cross-module dependencies** (within the same package):

- `popover/` imports from `focus/` (createFocusOut)
- `menu/` integrates with accessibility types
- `navigation/` imports from `action/` (createPressable)
- `organisms/` builds on `layout/` and `responsive/` patterns
- Any module can use `responsive/` helpers

**No circular dependencies** exist between sibling modules at the public boundary. Internal `private/` directories may have tight coupling within a module.

## Extensibility Model

New composable entities are built by:

1. Composing existing mixins to get CSS class generation
2. Composing existing controllers to get behavior
3. Creating a component wrapper (`.tsx`) that wires them together
4. Optionally creating a Provider for context sharing

The `createExposable(id, props)` → `[locals, expose, compose]` proxy system is the core extensibility mechanism. It allows child entities to contribute to a parent's `$root` output without explicit prop drilling.

## Module Boundaries

19 domain modules under `src/`, each self-contained:

| Module     | Layers Present                                       |
| ---------- | ---------------------------------------------------- |
| action     | controllers, mixins                                  |
| content    | components, controllers, mixins                      |
| error      | components                                           |
| feedback   | controllers                                          |
| focus      | components, controllers, helpers, mixins             |
| form       | controllers, mixins                                  |
| icon       | controllers, mixins                                  |
| input      | contexts, controllers, providers                     |
| layout     | components, constants, helpers, mixins, types        |
| menu       | controllers, providers, types                        |
| modal      | components, controllers, mixins                      |
| navigation | controllers, helpers, mixins                         |
| organisms  | List + TreeList sub-modules (all layers)             |
| placement  | constants, controllers, types                        |
| popover    | components, contexts, controllers, mixins, providers |
| responsive | components, controllers, helpers, types              |
| surface    | components, controllers, mixins                      |
| typography | mixins                                               |

Each module's `index.ts` re-exports its sub-entities. `private/` directories inside modules contain internal implementation not part of the public API.

## Build Architecture

- **Build tool:** Vite v8 with `vite-plugin-solid`, `vite-plugin-solid-svg`, `vite-plugin-top-level-await`
- **Output:** Single ESM bundle at `dist/esm/index.js`
- **CSS:** SCSS Modules (`*.module.scss`) compiled by Vite; global SCSS variables injected via `additionalData`
- **Entry:** `src/index.ts` → `dist/esm/index.js`
- **Tests:** Vitest v4

## External Dependencies

| Package                             | Scope                                     |
| ----------------------------------- | ----------------------------------------- |
| `@no-comply/solid-contexts`         | Runtime — composable proxy system         |
| `@no-comply/solid-accessibility`    | Runtime — ARIA types and attributes       |
| `@no-comply/solid-primitives`       | Runtime — shared primitives and utilities |
| `@solid-primitives/set`             | Runtime — Set utilities                   |
| `@solid-primitives/resize-observer` | Runtime — resize observation              |

## Peer Dependencies

| Package        | Version    |
| -------------- | ---------- |
| `solid-js`     | `^1.9.5`   |
| `lucide-solid` | `^0.453.0` |

## Meta Extraction

A custom `scripts/extract.ts` script uses `@no-comply/meta-extract` + `@purrception/source-fs` with 5 extractors: `module`, `component`, `controller`, `mixin`, `provider`. Output is `dist/meta.json`.
