# @no-comply/solid-primitives Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

> Generated: 2026-06-26
> By: opencode

## Project Context

`@no-comply/solid-primitives` provides foundational utilities and type definitions for all SolidJS UI libraries in the no-comply ecosystem. It sits at the bottom of the dependency chain — consumed by `solid-accessibility`, `solid-contexts`, `solid-composables`, and `standard-ui`. The package is pure TypeScript with no runtime dependencies beyond its `solid-js` peer dependency.

The library exposes composable prop functions for building and merging prop objects, typed DOM event handler definitions for standard and extended events, CSS class helpers, data-attribute builders, ID generation utilities, resource chaining helpers, and higher-level component prop types (`Tag`, `Styles`). All APIs are designed for use inside and outside SolidJS reactive contexts through the `AccessorOrValue` pattern.

## Design Principles

### Composition over inheritance

All utilities are pure functions returning plain objects. `combineProps` and `computedProps` compose prop objects by merging multiple sources, not by extending class hierarchies. The `AccessorOrValue<T>` pattern lets functions work with both static values and reactive accessors.

### Explicit prop boundaries

`definePropKeys` + `splitProps` enforce domain isolation — each module only processes the props it owns. Cross-module utility reuse (e.g., `events` and `events-ext` both using `definePropKeys` from `props`) is explicit and one-directional.

### Type-first design

Every module exposes strongly-typed interfaces (`PointerEventHandlers`, `ClassListInput`, `DataAttributes`, `TagOwnProps`) as its primary contract. Runtime helpers support the types; types are never an afterthought.

### Minimal surface area

Each module does one thing well. `events` defines DOM event handler types. `classes` manages CSS class lists. `data` builds data-attributes. No module crosses domain boundaries. Modules are independently importable and tree-shakeable.

## Structure

```
src/
├── props/         — prop composition, accessors, shorthand splitting
├── classes/       — CSS class list types + helpers
├── data/          — data-attribute types + builders
├── events/        — standard DOM event handler types (14 handlers)
├── events-ext/    — press, extended-press, context menu types
├── id/            — UUID + short ID generation
├── resources/     — chained + combined resource helpers
├── styles/        — inline style object type
├── tag/           — TagOwnProps, OpenTagProps, ClosedTagProps
└── ts/            — PickRequired utility type
```

## Main patterns

### Prop composition (`props`)

The foundational module. Exports `combineProps`, `computedProps`, `definePropKeys`, `pickProps`, `omitPropKeys`, `resolveValue`, `resolveRenderProp`, and shorthand splitters (`splitAxisShorthand`, `splitSideShorthand`). Used by nearly every other module. Internal proxy merging helpers live in `private/`.

### Event handler types (`events`, `events-ext`)

Typed object shapes for DOM event handlers. `events` covers standard DOM events (pointer, keyboard, focus, input, clipboard, scroll, drag, form, animation, transition, page). `events-ext` adds `PressEventHandlers` and `ExtendedPressEventHandlers` for press interactions. Both modules depend only on `props` for `definePropKeys`.

### Domain utilities (`classes`, `data`, `id`)

Small, focused helpers: `createClassList` + `mapClassName` for CSS class manipulation, `createDataAttributes` for typed `data-*` attributes, `uuid` + `shortId` for ID generation. Each is self-contained with no cross-module dependencies.

### Resource helpers (`resources`)

`createChainedResource` chains a resource off another resource's resolution. `createCombinedResource` combines multiple resources into one tuple resource. Depends on SolidJS `@solid-primitives` patterns.

### Component prop types (`tag`, `styles`)

Higher-level types composing lower modules: `TagOwnProps` uses `ClassList`, `DataAttributes`, and `Styles`. `OpenTagProps` and `ClosedTagProps` build on `TagOwnProps` for open/closed element patterns.

## Layers

Imports flow strictly downward. `tag` and `styles` are composite types built on top of `classes`, `data`, and `props`. `events` and `events-ext` depend on `props` (for `definePropKeys`) but not on `classes`, `data`, or `styles`. `classes`, `data`, `id`, and `resources` are standalone domain utilities depending only on `props` and `solid-js`. `props` and `ts` are the foundation with no internal dependencies. No circular dependencies exist.

## External dependencies

- **solid-js** (`^1.9.5`) — Sole peer dependency. Used for JSX types, reactive primitives (`Accessor`, `Component`), and `Dynamic` component in `tag`.
- **@purrception/source-fs** (`^0.0.11`) — Dev dependency only, used by the meta-extraction `extract` script.
- **@no-comply/meta-extract** (`^0.0.11`) — Dev dependency only, used for metadata generation during build.

### Tradeoffs

- **Pure types over runtime validation** — Event handler types and prop types are compile-time only. No runtime schema validation — type safety comes from TypeScript generics and discriminated unions.
- **Flat module structure** — Each domain is a single directory with at most a few helpers. Keeps import paths short and module boundaries clear, at the cost of deeper nesting for complex helpers.
- **Private helpers for internal reuse** — `props/helpers/private/` contains proxy merging logic shared by `combineProps` and `computedProps`, hidden from consumers to reduce API surface.
