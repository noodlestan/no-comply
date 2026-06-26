# @no-comply/solid-accessibility — Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

_Generated: 2026-06-26 | by: opencode/mimo-v2.5-free_

## Project Context

`@no-comply/solid-accessibility` provides ARIA types, role definitions, and controller factories for SolidJS applications and component libraries. It is the accessibility foundation consumed by `solid-composables`, `solid-contexts`, and `standard-ui`.

**Consumes:** `@no-comply/solid-primitives` (reactivity utilities: `combineProps`, `computedProps`, `definePropKeys`, `shortId`). `solid-js` as peer dependency.

**Provides to:** Upstream @no-comply packages and any SolidJS application needing structured ARIA attributes and keyboard interaction patterns.

**API categories:**
- **Type modules** — Pure type definitions for ARIA attributes, roles, and HTML tags. Zero runtime value.
- **Controller factories** — Functions returning spreadable ARIA prop objects for specific widget patterns (alert, dialog, menu, tree, etc.).
- **SCSS mixins** — Visually-hidden CSS for screen-reader-only content.

## Design Principles

### Composition Over Inheritance

- **Controller stacking** — Controllers compose bottom-up: base controllers (`label`, `live`, `busy`) are independent; the meta controller (`region`) composes base controllers; specialized controllers (`alert`, `dialog`, `tree`, etc.) compose `region` plus `label` plus `live`. No class hierarchies.

- **Spreadable prop objects** — Every controller returns `{ $root, $label, $description, ... }` plain objects designed for JSX spread syntax. Composition happens via `combineProps`, not class extension.

### Safe Defaults

- **Accessible without configuration** — Every attribute has a default that ensures accessibility even without explicit consumer input. `aria-live`, `aria-atomic`, `role` are set to sensible values by default.

- **Semantic HTML preference** — Controllers omit `role` when a native element already conveys the role. `role` is only added on non-semantic wrapper elements.

### Compile-Time Safety

- **Type-first ARIA validation** — Union types, literal types, generic overloads, and intersections catch ARIA misuse at compile time. The type layer (`attributes/`, `role/`, `tag/`) enforces valid combinations before runtime.

### Separation of Types and Behavior

- **Zero-cost type layer** — `attributes/`, `role/`, `tag/` are pure type definitions with no runtime footprint. Controllers consume these types but never import runtime values from them.

## Structure

```
src/
├── attributes/                            — ARIA attribute value type aliases
├── role/                                  — ARIA role name union types
├── tag/                                   — HTML tag name union types per role
├── controllers/
│   └── <entity>/                          — alert, busy, dialog, and 18 more
│       ├── types.ts                       — AriaXxxProps, AriaXxxAPI
│       ├── constants.ts                   — ARIA_XXX_PROPS
│       └── createAria<Name>.ts            — createAria<Name> factory
├── scss/mixins/
│   └── visibility.scss                    — visually-hidden CSS mixin
└── index.ts                               — barrel re-exports
```

The `<entity>` placeholder covers 21 controller directories. Each follows the same internal structure: `types.ts` defines props and API interfaces, `constants.ts` exports prop key arrays, and `createAria<Name>.ts` implements the factory function.

## Main patterns

### Base Controllers

`label`, `live`, `busy` — independent, no controller dependencies. Provide fundamental ARIA attributes (`aria-label`, `aria-live`, `aria-busy`) as composable prop objects.

### Meta Controller

`region` — composes `label` and adds `role="region"` semantics. Serves as the composition point for specialized controllers that need region semantics plus labeling.

### Specialized Controllers

`alert`, `status`, `dialog`, `log`, `tree`, `treeitem`, `switch`, `group`, `form`, `feedback` — compose `region` plus `label` plus `live` for widget-specific ARIA patterns. Each adds role-specific attributes and behavior.

### Standalone Controllers

`pressable`, `separator`, `menu`, `menuitem`, `list`, `listitem`, `radiogroup` — may compose `label` but not `region`. Self-contained for simpler widget patterns.

## Layers

Import direction flows strictly downward: controllers depend on types, types have no dependencies. Controllers compose each other bottom-up (base → meta → specialized). Shared utilities from `solid-primitives` are consumed only by controllers, never by type modules. No circular dependencies exist between layers.

## External dependencies

- **solid-js** (`^1.9.5`) — Peer dependency. Provides reactivity primitives and JSX. Controllers never import `solid-js` directly; they consume it through `solid-primitives`.
- **@no-comply/solid-primitives** (`0.0.11`) — Runtime dependency. Provides `combineProps`, `computedProps`, `definePropKeys`, `shortId`.

### Tradeoffs

- **Controllers return props, not components** — what: factories produce spreadable objects, not JSX. why: maximizes composition flexibility; consumers decide rendering.
- **Zero-cost type layer** — what: `attributes/`, `role/`, `tag/` are type-only. why: no bundle impact for compile-time safety.
- **Controller stacking over flat APIs** — what: specialized controllers compose meta → base. why: avoids duplication; each layer adds only what it needs.
