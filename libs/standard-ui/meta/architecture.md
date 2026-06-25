# @no-comply/standard-ui — Architecture

> Generated: 2026-06-25
> By: sub-agent

---

## Design Principles

1. **Separation of rendering from logic** — Every component has a `create*()` factory (pure composition) and a thin `.tsx` wrapper for rendering. Factories hold all state and behaviour; wrappers only handle JSX.

2. **Mixin composition over inheritance** — Components are assembled from composable mixin units via `createExposable`/`compose`/`exposeAPI`. No class inheritance; each mixin returns an API object with a `$root` merge target.

3. **Prop isolation** — `definePropKeys` + `splitProps` ensures components only process domain-specific props; all other props pass through intact to the underlying DOM element.

4. **CSS Modules for scoping, CSS custom properties for theming** — Component styles are encapsulated in `.module.scss` files. Theme is expressed as CSS custom properties on `[data-theme-standard]` attribute, enabling runtime dark/light switching without JS.

5. **Tree-shakeable by design** — `"sideEffects": false` in `package.json`. Each module is independently importable from `@no-comply/standard-ui`.

---

## Layering

```
┌──────────────────────────────────────────────┐
│         @no-comply/standard-ui                │  Presentational layer
│  Components + Mixins + Theme SCSS + CSS vars  │  (this package)
│  Depends on ↓                                 │
├──────────────────────────────────────────────┤
│  @no-comply/solid-composables                 │  Headless composables
│  (pressable, focus ring, tree, etc.)          │
├──────────────────────────────────────────────┤
│  @no-comply/solid-contexts                    │  Context system
│  (createExposable, compose, exposeAPI)        │
├──────────────────────────────────────────────┤
│  @no-comply/solid-accessibility               │  Aria patterns
│  (focus management, keyboard navigation)      │
├──────────────────────────────────────────────┤
│  @no-comply/solid-primitives                  │  Low-level utilities
│  (combineProps, createClassList,              │
│   definePropKeys, ClosedTagProps)             │
├──────────────────────────────────────────────┤
│  solid-js / lucide-solid                      │  Framework + icons
│  (peer dependencies)                          │
└──────────────────────────────────────────────┘
```

---

## Dependency Flow

- **Strictly downward** — standard-ui imports from `solid-composables` → `solid-contexts` → `solid-accessibility` → `solid-primitives`. No reverse imports.
- **Cross-domain within standard-ui** — Typography mixins are used in action mixins (e.g., `ActionLabel` in `ButtonMixin`). Layout components are used in organisms (e.g., `Flex` used by `TreeListItemDetails`).
- **No circular dependencies** — Dependency graph within the package is acyclic. Each domain is self-contained; cross-domain references only go from higher-level domains (organisms, action, menu) to lower-level ones (typography, layout, surface).
- **Private modules** — Domains (e.g., menu, theme) may contain `private/` directories with internal contexts, constants, and controllers that are not re-exported from the domain index, enforcing module boundaries.

---

## Module Boundaries

Each domain (`action/`, `layout/`, `menu/`, etc.) is a self-contained directory with:

```
<domain>/
  index.ts        — barrel: re-exports components + mixins + types
  components/     — SolidJS components
  mixins/         — Composable mixin factories
  contexts/       — (optional) SolidJS contexts
  providers/      — (optional) context providers
  controllers/    — (optional) imperative controllers
  private/        — (optional) internal implementation details
```

Domains never import from other domains' `private/` directories.

---

## Extensibility Model

1. **Mixin composition** — Consumers can recombine existing mixins to create custom components without extending classes.
2. **Exposable/context system** — Components expose their API through SolidJS context, enabling parent-child coordination (e.g., `SegmentedButtonItem` communicates with `SegmentedButton`).
3. **Theme via CSS custom properties** — Consumers set CSS variables; `ThemeStandard` registers mode (dark/light) and surface variant contexts. No JS-based theme engine.
4. **Icon system agnostic** — Icons use `lucide-solid` as peer dep; the `Icon` component accepts any icon component conforming to the expected shape.

---

## External Dependencies

| Package                          | Type    | Purpose                                                             |
| -------------------------------- | ------- | ------------------------------------------------------------------- |
| `solid-js`                       | peer    | Reactive UI framework (v1.9+)                                       |
| `lucide-solid`                   | peer    | Icon library                                                        |
| `@no-comply/solid-primitives`    | runtime | `combineProps`, `createClassList`, `definePropKeys`, type utilities |
| `@no-comply/solid-contexts`      | runtime | `createExposable`, `compose`, `exposeAPI`                           |
| `@no-comply/solid-accessibility` | runtime | Aria patterns, focus management                                     |
| `@no-comply/solid-composables`   | runtime | Headless composables (pressable, focus ring, tree)                  |

---

## Build & Tooling

| Tool                                                 | Purpose                     |
| ---------------------------------------------------- | --------------------------- |
| Vite + `vite-plugin-solid`                           | Library bundling (ESM only) |
| `vite-plugin-solid-svg`                              | SVG import support          |
| `sass`                                               | SCSS compilation            |
| `tsx`                                                | Running extract script      |
| `tsc --noEmit`                                       | Type checking               |
| `vitest`                                             | Test runner (configured)    |
| `@no-comply/meta-extract` + `@purrception/source-fs` | Meta-extraction pipeline    |
