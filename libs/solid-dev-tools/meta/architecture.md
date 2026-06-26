# solid-dev-tools — Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

> Updated: 2026-06-26
> By: opencode

## Project Context

@no-comply/solid-dev-tools provides instrumentation and debug UI for No Comply applications. It consumes context tree data from `@no-comply/solid-contexts` and renders it as an interactive overlay using components from `@no-comply/standard-ui` and `@no-comply/solid-composables`.

The package is a **leaf consumer** — it depends on five sibling @no-comply libraries and two peer deps, but no other monorepo packages depend on it.

### API Categories

- **Overlay Components** — `DebugDrawer`, `DebugContextTreePanel` — zero-config components that wire to context tree data automatically.
- **Side-Effect Providers** — `DebugStyles` — imports global SCSS to inject debug overlay styles.

## Design Principles

### Zero Configuration

- **No props required** — All three exported components accept no props. They wire to `@no-comply/solid-contexts` automatically via `useContextTreeRoot()`.

### Separation of Concerns

- **Data transformation from presentation** — `functions/createDebugContextTree` transforms `ContextNode` trees into `TreeNode` trees; `parts/DebugContextTreeItem` handles rendering. Clear boundary between data logic and UI.

### Accessibility by Default

- **ARIA region integration** — `DebugDrawer` uses `createAriaRegion` for accessible labeling, following `@no-comply/solid-accessibility` patterns.

### Minimal Surface Area

- **Leaf package, no downstream consumers** — No need to expose abstractions or extension points. The package is consumed only by applications, not by other libraries.

## Structure

```
src/
├── components/DebugDrawer/        Overlay drawer pinned to viewport bottom
├── panels/DebugContextTreePanel/  Context hierarchy tree visualization
│   ├── functions/                 Data transformation (createDebugContextTree)
│   └── parts/DebugContextTreeItem/ Tree item sub-component
├── providers/DebugStyles.tsx      Side-effect component, imports global.scss
└── styles/global.scss             Global debug overlay styles (@layer dev-tools)
```

## Main Patterns

### Context Tree Visualization

- **Orchestrator pattern** — `DebugContextTreePanel` consumes `useContextTreeRoot()` from `@no-comply/solid-contexts` and delegates rendering to `TreeListBase` from `@no-comply/solid-composables`.
- **Data → UI pipeline** — `createDebugContextTree` is a pure `createMemo` transform; `DebugContextTreeItem` is a slot component for `TreeListBase`.

### Overlay Infrastructure

- **Drawer component** — `DebugDrawer` provides a pinned overlay container using `Flex` and `ExpandButton` from `@no-comply/standard-ui`.
- **Global style injection** — `DebugStyles` is a side-effect-only component that imports `global.scss` scoped to `@layer dev-tools`.

## Layers

Dependencies flow strictly downward: `solid-js` (peer) → `@no-comply/solid-contexts` → `@no-comply/solid-accessibility` → `@no-comply/solid-primitives` → `@no-comply/solid-composables` → `@no-comply/standard-ui` → `solid-dev-tools`.

The package sits at the bottom of the dependency graph as a leaf consumer. No circular dependencies. All five sibling imports are one-directional.

## External Dependencies

### Peer Dependencies

- **solid-js** `^1.9.5` — Reactive UI framework, required by all @no-comply libraries.
- **lucide-solid** `^0.453.0` — Icon library, consumed via `@no-comply/standard-ui`.

### Runtime Dependencies

- **@no-comply/solid-contexts** — `useContextTreeRoot()` for context hierarchy data.
- **@no-comply/solid-composables** — `TreeListBase`, `TreeNode` for tree rendering.
- **@no-comply/standard-ui** — `Display`, `Flex`, `ExpandButton`, SCSS mixins.
- **@no-comply/solid-accessibility** — `createAriaRegion` for ARIA labeling.
- **@no-comply/solid-primitives** — `staticClassList` utility.

### Tradeoffs

- **Leaf package tradeoff** — Accepts tight coupling to five sibling libraries in exchange for zero-config debug UI. No abstraction layer needed since no downstream consumers exist.
- **Side-effect style injection** — `DebugStyles` uses a side-effect component instead of CSS-in-JS, keeping styles out of JS bundle but requiring explicit import.
