# solid-dev-tools — Modules

> Generated: 2026-06-25
> By: sub-agent

```
src/
├── components/
│   └── DebugDrawer/
│       └── DebugDrawer.tsx         Drawer overlay container — pinned to viewport bottom, wraps DebugContextTreePanel
├── panels/
│   └── DebugContextTreePanel/
│       └── DebugContextTreePanel.tsx  Orchestrator — consumes useContextTreeRoot(), renders context tree via TreeListBase
├── providers/
│   └── DebugStyles.tsx                Side-effect component — imports global.scss into the page
└── styles/
    └── global.scss                    Global debug overlay styles — outlines, color palette, @layer dev-tools
```

## Excluded from tree

- `index.ts` files (barrel re-exports)
- `functions/` and `parts/` directories (internal implementation)
