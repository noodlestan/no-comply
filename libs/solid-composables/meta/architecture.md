# @no-comply/solid-composables — Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

**Generated:** 2026-06-25
**By:** sub-agent

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
