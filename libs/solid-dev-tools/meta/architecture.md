# solid-dev-tools — Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

> Generated: 2026-06-25
> By: sub-agent

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
