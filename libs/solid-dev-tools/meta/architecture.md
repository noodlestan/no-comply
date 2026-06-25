# solid-dev-tools — Architecture

> Generated: 2026-06-25
> By: sub-agent

## Design Principles

1. **Accessibility-first** — Every interactive component uses `createAriaRegion` for ARIA labeling.
2. **Zero-config consumer API** — All three public components accept no props; state is wired automatically via SolidJS context.
3. **Separation of concerns** — Data transformation (`functions/`) is separated from rendering (`parts/`).

## Layering

```
solid-js (peer)
  └── @no-comply/solid-contexts     (useContextTreeRoot)
  └── @no-comply/solid-accessibility (createAriaRegion)
  └── @no-comply/solid-primitives   (staticClassList)
  └── @no-comply/solid-composables  (SurfaceBase, TreeListBase, TreeNode)
  └── @no-comply/standard-ui        (Display, Flex, ExpandButton, SCSS mixins)
       └── lucide-solid (peer, via standard-ui)
            └── solid-dev-tools (leaf consumer)
```

solid-dev-tools is a **leaf package** — it depends on 5 sibling @no-comply libraries and 2 peer deps, but no other monorepo packages depend on it.

## Module Boundaries

```
@no-comply/solid-dev-tools
├── components/         — UI shells (presentational)
│   └── DebugDrawer/    — Drawer container + layout
├── panels/             — Feature panels (domain-logic aware)
│   └── DebugContextTreePanel/
│       ├── DebugContextTreePanel.tsx  — Orchestrator
│       ├── functions/                 — Data transformation
│       └── parts/                     — Sub-component slots
├── providers/          — Side-effect injectors
│   └── DebugStyles.tsx
└── styles/             — Global stylesheets
    └── global.scss
```

## Dependency Flow

- `DebugDrawer` → imports `DebugContextTreePanel` (composition)
- `DebugContextTreePanel` → imports `createDebugContextTree` (data transform) + `DebugContextTreeItem` (slot)
- `DebugStyles` → imports `global.scss` (side-effect)
- No circular dependencies exist.

## External Dependencies

| Dependency                       | Version | Role                                     |
| -------------------------------- | ------- | ---------------------------------------- |
| `@no-comply/solid-contexts`      | 0.0.11  | Context tree root (useContextTreeRoot)   |
| `@no-comply/solid-accessibility` | 0.0.11  | ARIA region creation                     |
| `@no-comply/solid-primitives`    | 0.0.11  | Utility functions                        |
| `@no-comply/solid-composables`   | 0.0.11  | TreeListBase, SurfaceBase, TreeNode      |
| `@no-comply/standard-ui`         | 0.0.11  | Display, Flex, ExpandButton, SCSS mixins |

## Peer Dependencies

| Dependency     | Version  |
| -------------- | -------- |
| `solid-js`     | ^1.9.5   |
| `lucide-solid` | ^0.453.0 |
