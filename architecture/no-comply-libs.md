# no-comply libs

> This file extends [no-comply architecture](./nocomply.md).

This document consolidates design principles, layering, dependency flow, and external dependencies across all @no-comply SolidJS libraries. It serves as a single source of truth for contributors.

## Design Principles

### Explicit Over Implicit

- **Explicit service creation** — Services are explicitly created and injected as props.

### Reactive by Default

- **Minimal reactivity surface** — APIs expose read-only `Accessor<T>`. State mutations happen through explicit method calls.

### Separation of Concerns

- **Data transformation from presentation** — Data transformation (`functions/`) is separated from rendering (`parts/`).

### Tree-Shakeable by Default

- **sideEffects: false** — Each feature module is independently importable. `sideEffects: false` in `package.json`.

### Component & Mixin Patterns

- **Controllers return props, not components** — Factories return objects of spreadable props (`$root`) for SolidJS JSX spread syntax.

- **Composable prop objects** — Built by composing small functions (`combineProps` + `computedProps`) rather than large configuration objects or class inheritance.

- **Props as data, not behavior** — Input props are plain objects. All reactivity is internal to the controller.

- **Factories separate from rendering** — Service factory functions (pure logic) are separated from SolidJS provider components (rendering). Controllers hold state and behaviour; wrappers only handle JSX.

### Accessibility Patterns

- **Safe defaults** — Every attribute has a default that ensures accessibility even without explicit configuration.

- **Semantic HTML preference** — Omit `role` when a native element already conveys the role; only add `role` on non-semantic elements.

- **Compile-time ARIA validation** — Extensive union types, literal types, generic overloads, and intersections catch ARIA misuse at compile time.

- **Accessibility-first** — Every interactive component uses `createAriaRegion` for ARIA labeling. All interactive patterns integrate `@no-comply/solid-accessibility` for ARIA attributes and keyboard interaction.

### Reactive & API Patterns

- **AccessorOrValue pattern** — Functions accept `AccessorOrValue<T>` and return `Accessor<T>` when results may change, working inside and outside SolidJS reactive contexts.

- **Typed service interfaces** — Every service is defined by a typed `*API` interface. Consumers depend on interfaces, not implementations.

- **createExposable proxy system** — Child entities contribute to a parent's `$root` output without explicit prop drilling.

- **Prop isolation** — `definePropKeys` + `splitProps` ensure components only process domain-specific props; all other props pass through intact to the underlying DOM element.

### Module Boundaries

- **Index barrel with codegen** — Root `index.ts` uses `// @index` codegen that explicitly skips `private/` directories.

- **Vertical slice pattern (solid-composables)** — Each domain module (e.g. `menu/`, `popover/`) is a vertical slice containing entities across all three layers, co-located in a single directory tree.

- **Module structure convention (solid-contexts)** — Every feature module follows `index.ts` (barrel), `types.ts` (optional), `contexts/` (SolidJS createContext/useContext), `providers/` (Provider components + consumer hooks), `services/` (factory functions), `helpers/` (pure utilities), `private/` (internal implementation).

- **Domain layout (standard-ui)** — Each domain has `index.ts` (barrel re-exports), optional `components/`, `mixins/`, `contexts/`, `providers/`, `controllers/`, `private/`.

### Theming & Styling

- **CSS Modules for scoping** — Component styles encapsulated in `.module.scss` files.

- **CSS custom properties for theming** — Theme expressed as CSS custom properties on `[data-theme-standard]` attribute for runtime dark/light switching without JS.

- **Icon system agnostic** — Icons use `lucide-solid` as peer dep; the `Icon` component accepts any icon component conforming to the expected shape.

## Layering

### Package Layering

- **Four-layer stack (solid-primitives)** — Foundation (`props`, `ts`), domain (`classes`, `data`, `id`, `resources`), types (`events`, `events-ext`), composite (`tag`, `styles`).

- **Controller stack (solid-accessibility)** — Base controllers (`label`, `live`, `busy`) are independent. Meta controller (`region`) composes base controllers. Specialized controllers (`alert`, `dialog`, `tree`, etc.) compose region plus label plus live.

- **Core → Feature direction (solid-contexts)** — Core infrastructure (`context tree`, `controller`, `container`, `system`) has no feature dependencies. Feature services (`locale`, `navigation`, `settings`, `shortcuts`, `modals`, `icons`, `labels`, `focus`, `expose`) may import core types but not vice versa.

- **Three-layer composables (solid-composables)** — Layer 3: Components/Providers/Hooks (JSX rendering, context wiring). Layer 2: Controllers/Contexts (state, side effects, composition). Layer 1: Mixins/Helpers/Primitives (CSS class generation, DOM props, utilities).

- **Presentational layer (standard-ui)** — Components + Mixins + Theme SCSS + CSS vars sit at the top, depending on composables → contexts → accessibility → primitives → solid-js/lucide-solid.

### Component and Primitives Layers

- **Type layer (solid-accessibility)** — Pure type definitions for attributes, roles, and tags. Zero runtime value; consumed by controllers.
- **Shared utilities (solid-accessibility)** — `@no-comply/solid-primitives` provides `computedProps`, `combineProps`, `definePropKeys`, `shortId`.

### Feature and Service Layers

- **Container layer (solid-contexts)** — High-level context composition (`mode`, `surface`, `theme`, `selection`, `form`) built on core.

## Dependency Flow

### Cross-Package Flow

- **Strictly downward (standard-ui)** — standard-ui imports from `solid-composables` → `solid-contexts` → `solid-accessibility` → `solid-primitives`. No reverse imports.

- **Inward → outward (solid-accessibility)** — Type modules are consumed by controllers; controllers compose each other bottom-up. Controllers import from `@no-comply/solid-primitives` for reactivity primitives; never import from `solid-js` directly.

- **No reverse imports (solid-contexts)** — Core has no feature dependencies. Dependencies flow one-directional: core → feature → external.

- **props is foundational (solid-primitives)** — `props` depends only on `solid-js` and its own `private/` helpers. All other modules depend downward.

### Internal Cross-Module Dependencies (solid-composables)

- **popover → focus** — `popover/` imports `createFocusOut` from `focus/`.
- **menu → accessibility** — `menu/` integrates with accessibility types.
- **navigation → action** — `navigation/` imports `createPressable` from `action/`.
- **organisms → layout, responsive** — `organisms/` builds on `layout/` and `responsive/` patterns.
- **Any module → responsive** — Any module can use `responsive/` helpers.

### Cross-Domain References (standard-ui)

- **Typography → action** — Typography mixins are used in action mixins (e.g., `ActionLabel` in `ButtonMixin`).
- **Layout → organisms** — Layout components are used in organisms (e.g., `Flex` used by `TreeListItemDetails`).
- **Higher → lower domains** — Cross-domain references only go from higher-level domains (organisms, action, menu) to lower-level ones (typography, layout, surface).

### Internal Dependency Graph (solid-primitives)

- **No circular dependencies detected** — `tag` depends on `classes`, `data`, `styles`. `classes` depends on `props`. `events`/`events-ext` depend on `props` (`definePropKeys`). `resources` and `id` are standalone. `styles` and `ts` are standalone.

### Coupling

- **Loose coupling (solid-primitives)** — Most modules can be used independently. Dependencies are one-directional and shallow.
- **Leaky boundary on definePropKeys (solid-primitives)** — Both `events` and `events-ext` use `definePropKeys` from `props`. Cross-module utility reuse, not domain coupling.
- **Self-contained private state (solid-primitives)** — `props/helpers/private/` contains internal-only helpers never exposed to consumers.

## External Dependencies

### Peer Dependencies

- **i18next** — `^24.2.3` used by solid-contexts (locale module for internationalization).
- **html-parse-string** — `^0.0.9` used by solid-contexts (HTML parsing for translation interpolation).

### Runtime Dependencies

- **solid-contexts** — `@solid-primitives/map` (`ReactiveMap` for reactive key-value stores), `@solid-primitives/refs` (ref utilities), `@solid-primitives/set` (reactive Set), `solid-services` (service injection pattern), `ts-deepmerge` (deep object merging).
- **solid-composables** — `@solid-primitives/set` (Set utilities), `@solid-primitives/resize-observer` (resize observation).

### Leaf Packages

- **solid-dev-tools** — Depends on 5 sibling @no-comply libraries (`solid-contexts`, `solid-accessibility`, `solid-primitives`, `solid-composables`, `standard-ui`) and 2 peer deps, but no other monorepo packages depend on it.

### Module Boundaries

- **Internal vs external (solid-contexts)** — `src/private/` contains low-level internal utilities. Root `index.ts` re-exports only public API.
- **19 domain modules (solid-composables)** — Each self-contained with optional layers: components, controllers, mixins, helpers, contexts, providers, types, constants. Module index re-exports sub-entities.

### Extensibility

- **Context variant system (solid-contexts)** — Consumers define new variants by extending `ContextVariant`.
- **Settings extensibility (solid-contexts)** — `addSettings`/`addGroups` at runtime.
- **New composable entities (solid-composables)** — Compose existing mixins for CSS class generation, compose existing controllers for behavior, create a component wrapper (`.tsx`) that wires them together, optionally create a Provider for context sharing.
- **Service injection (solid-contexts)** — Applications provide custom service implementations via props.

- **Provider nesting (solid-contexts)** — Multiple providers of the same type can be nested (SolidJS context inheritance).

- **Controller hierarchy (solid-contexts)** — Controllers nest arbitrarily with parent/child lifecycle.

- **Mixin composition (standard-ui)** — Consumers recombine existing mixins to create custom components without extending classes.

- **Exposable/context system (standard-ui)** — Components expose their API through SolidJS context for parent-child coordination.

### Build

- **ESM-only output** — All packages output ESM only to `dist/esm/`.
- **Vite with solid plugin** — Vite with `vite-plugin-solid`, `vite-plugin-solid-svg`, `vite-plugin-top-level-await`.
- **SCSS Modules** — `*.module.scss` files compiled by Vite; global SCSS variables injected via `additionalData`.
- **Vitest** — Test runner configured (no spec files currently in solid-primitives).
- **Type checking** — `tsc --noEmit` for type checking.
- **Meta extraction** — Custom `extract` script dumps entity metadata to `dist/meta.json` using `@no-comply/meta-extract` + `@purrception/source-fs`. solid-composables uses 5 extractors: `module`, `component`, `controller`, `mixin`, `provider`.
