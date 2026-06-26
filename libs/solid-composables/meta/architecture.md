# @no-comply/solid-composables — Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

**Generated:** 2026-06-26 04:08:59 CEST
**By:** opencode/mimo-v2-pro-max

## Project Context

The `@no-comply/solid-composables` package provides composable UI building blocks for SolidJS applications. It contributes vertical-slice domain modules that combine controllers, mixins, components, and providers into self-contained feature sets. Each module encapsulates a specific UI domain (menus, popovers, focus management, etc.) and exposes a public API through barrel exports.

The package consumes foundational libraries from sibling packages (`@no-comply/solid-primitives`, `@no-comply/solid-accessibility`, `@no-comply/solid-contexts`) and provides reusable UI primitives to higher-level packages like `@no-comply/standard-ui`. API categories include:

- **Controllers** — Factory functions that return spreadable prop objects for components
- **Mixins** — CSS class generation and DOM prop utilities
- **Components** — SolidJS JSX wrappers that wire controllers and mixins together
- **Providers** — Context providers for shared state across component trees
- **Helpers** — Pure utility functions for specific domains

## Design Principles

### Vertical Slice Architecture

- **Self-contained domain modules** — Each domain (e.g., `menu/`, `popover/`) is a vertical slice containing entities across all layers (components, controllers, mixins, helpers, contexts, providers). Modules are independently importable and tree-shakeable.

- **Layer separation within slices** — While entities are co-located, they maintain clear layer boundaries: Layer 3 (components/providers) depends on Layer 2 (controllers/contexts) which depends on Layer 1 (mixins/helpers/primitives). No upward dependencies within a slice.

### Composition Over Inheritance

- **Controller factories return props** — Controllers are factory functions that return plain objects of spreadable props (`$root`) for JSX spread syntax. No classes, no inheritance chains.

- **Mixin composition** — CSS class generation is built by composing small mixin functions rather than large configuration objects. Mixins are pure functions that accept props and return class lists.

- **Composable prop objects** — Built by composing small functions (`combineProps` + `computedProps`) rather than large configuration objects or class inheritance.

### Explicit Context Over Invisible State

- **Context threading** — All dependencies are threaded through context objects or function parameters. No global state, no singletons. Context flows sideways through function parameters.

- **Provider isolation** — Each domain module may define its own context providers. Providers are internal to the module and not exposed in the public API unless explicitly re-exported.

### Accessibility First

- **Safe defaults** — Every attribute has a default that ensures accessibility even without explicit configuration.

- **Semantic HTML preference** — Omit `role` when a native element already conveys the role; only add `role` on non-semantic elements.

- **Compile-time ARIA validation** — Extensive union types, literal types, generic overloads, and intersections catch ARIA misuse at compile time.

### Module Boundaries

- **Index barrel with codegen** — Root `index.ts` uses `// @index` codegen that explicitly skips `private/` directories.

- **Encapsulation via private directories** — Internal implementation details hidden behind barrel exports. `private/` directories are never re-exported. Domains never import from other domains' `private/` directories.

- **Prop isolation** — `definePropKeys` + `splitProps` ensure components only process domain-specific props; all other props pass through intact to the underlying DOM element.

## Structure

```
src/
├── index.ts                              — Re-exports all 19 domain modules
├── action/                               — controllers + mixins
├── content/                              — components + controllers + mixins
├── focus/                                — components + controllers + helpers + mixins
├── layout/                               — components + constants + helpers + mixins + types
├── menu/                                 — controllers + providers + types
├── organisms/                            — List + TreeList sub-modules (all layers)
├── typography/                           — mixins
└── ... (11 more domain modules)
```

Each domain module follows a consistent internal structure: `controllers/<entity>/`, `mixins/<entity>/`, `components/<entity>/`, `providers/<entity>/`, `contexts/<entity>/`, optional `helpers/`, `constants.ts`, `types.ts`, and `private/` for internal implementation.

## Main patterns

### Controllers

- **Spreadable prop factories** — Controllers like `createMenu`, `createPopover`, `createFocusable` return objects with `$root` property containing spreadable props for JSX.
- **State encapsulation** — Controllers hold all reactive state and side effects internally. Input props are plain objects; all reactivity is internal to the controller.
- **Typed service interfaces** — Every service is defined by a typed `*API` interface. Consumers depend on interfaces, not implementations.

### Mixins

- **CSS class generators** — Mixins like `createFlexMixin`, `createFocusableMixin` generate CSS class lists based on props and state.
- **DOM prop utilities** — Mixins provide normalized DOM attributes (aria-*, data-*, event handlers) for components.
- **Composable** — Mixins can be combined to create complex component behaviors without inheritance.

### Components

- **Thin JSX wrappers** — Components like `FlexBase`, `PopoverBase`, `ModalPortal` are minimal JSX that wire controllers and mixins together.
- **Prop spreading** — Components spread controller output (`$root`) onto native elements, passing through unprocessed props.
- **Provider integration** — Components may wrap content in context providers for shared state.

### Providers

- **Context factories** — Providers like `createMenuContext`, `createPopoverContext` create SolidJS context values and consumer hooks.
- **Internal state sharing** — Providers enable parent-child coordination within a domain without prop drilling.

### Helpers

- **Pure utility functions** — Domain-specific helpers like `getFocusableElements`, `isExternalURL`, `responsiveBooleanClasses` provide pure logic without reactivity.
- **Shared across modules** — Some helpers (e.g., responsive utilities) are used across multiple domain modules.

## Layers

Import direction flows strictly downward: Layer 3 → Layer 2 → Layer 1 → Foundation.

- **Layer 3: Components/Providers/Hooks** — JSX rendering, context wiring, user-facing APIs
- **Layer 2: Controllers/Contexts** — State management, side effects, composition logic
- **Layer 1: Mixins/Helpers/Primitives** — CSS class generation, DOM props, pure utilities
- **Foundation: @no-comply/solid-* siblings** — Primitives, contexts, accessibility, and SolidJS itself

Within each vertical slice, dependencies flow downward. Cross-module dependencies are allowed but must follow the same direction (higher-layer modules may import from lower-layer modules in other domains).

## External dependencies

### Runtime Dependencies

- **@solid-primitives/set** — Set utilities for reactive set operations
- **@solid-primitives/resize-observer** — Resize observation for responsive components

### Peer Dependencies

- **solid-js** — Reactive UI framework (peer dependency)
- **@no-comply/solid-primitives** — Foundational reactive utilities
- **@no-comply/solid-accessibility** — ARIA attributes and keyboard interaction
- **@no-comply/solid-contexts** — Context management and service injection

### Tradeoffs

- **Vertical slices vs horizontal layers** — Chose vertical slices for independent importability and clear domain boundaries, accepting some duplication across modules.
- **Controller factories vs class components** — Chose factories for tree-shaking and functional composition, accepting more verbose prop spreading.
- **Private directories vs separate packages** — Chose private directories for co-location and reduced package overhead, accepting potential boundary leakage.