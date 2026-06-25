# @no-comply/standard-ui — Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

> Generated: 2026-06-25
> By: sub-agent

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
