# @no-comply/solid-accessibility — Architecture

_Generated: 2026-06-25 | by: sub-agent_

## Design Principles

1. **Props as data, not behavior** — Input props are plain objects. All reactivity is internal to the controller.
2. **Controllers return props, not components** — Factories return objects of spreadable props (`$root`) for SolidJS JSX spread syntax.
3. **Safe defaults** — Every attribute has a default that ensures accessibility even without explicit configuration.
4. **Semantic HTML preference** — Omit `role` when a native element already conveys the role; only add `role` on non-semantic elements.
5. **Type safety as a primary goal** — Extensive union types, literal types, generic overloads, and intersections catch ARIA misuse at compile time.

## Layering

```
┌──────────────────────────────────────────────────────────┐
│                    Controller Layer                        │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Specialized Controllers                              │ │
│  │  alert, status, dialog, log, tree, treeitem, switch, │ │
│  │  group, form, feedback                                │ │
│  │  (compose region ± label ± live)                      │ │
│  └──────────────────────────┬───────────────────────────┘ │
│                             │                              │
│  ┌──────────────────────────▼───────────────────────────┐ │
│  │  Meta Controller                                      │ │
│  │  region (composes label, adds role semantics)         │ │
│  └──────────────────────────┬───────────────────────────┘ │
│                             │                              │
│  ┌──────────────────────────▼───────────────────────────┐ │
│  │  Base Controllers                                     │ │
│  │  label, live, busy                                    │ │
│  │  (independent, no controller deps)                    │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Standalone Controllers                               │ │
│  │  pressable, separator, menu, menuitem, list,          │ │
│  │  listitem, radiogroup                                 │ │
│  │  (may compose label, but not region)                  │ │
│  └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
                           │
┌──────────────────────────▼────────────────────────────────┐
│                    Type Layer                               │
│  attributes/  role/  tag/                                  │
│  (pure type definitions, zero runtime value)               │
└───────────────────────────────────────────────────────────┘
                           │
┌──────────────────────────▼────────────────────────────────┐
│                    Shared Utilities                         │
│  @no-comply/solid-primitives                                │
│  (computedProps, combineProps, definePropKeys, shortId)    │
└───────────────────────────────────────────────────────────┘
                           │
┌──────────────────────────▼────────────────────────────────┐
│                    Runtime                                  │
│  solid-js (peer dependency)                                │
└───────────────────────────────────────────────────────────┘
```

## Dependency Flow

```
attributes ──┐
role ────────┤──► controllers/ ──► @no-comply/solid-primitives ──► solid-js
tag ─────────┘
```

- **No circular dependencies** observed.
- Dependencies flow **inward → outward**: type modules are consumed by controllers; controllers compose each other bottom-up.
- Controllers import from `@no-comply/solid-primitives` for reactivity primitives; never import from `solid-js` directly.

## External Dependencies

| Dependency                    | Type    | Used For                                                     |
| ----------------------------- | ------- | ------------------------------------------------------------ |
| `@no-comply/solid-primitives` | Runtime | `computedProps`, `combineProps`, `definePropKeys`, `shortId` |

## Peer Dependencies

| Dependency | Version  | Used For                                             |
| ---------- | -------- | ---------------------------------------------------- |
| `solid-js` | `^1.9.5` | JSX types (`JSX.AriaAttributes`), reactive accessors |
