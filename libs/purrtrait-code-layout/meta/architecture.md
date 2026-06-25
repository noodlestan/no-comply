# @purrtrait/code-layout — Architecture

> This file extends [purrtrait architecture](../../../architecture/purrtrait.md).

Generated: 2026-06-25
By: sub-agent

## Layering

```
src/types.ts  ─────────────────────────────────────┐
                                                     │
  ┌──────────────────────────────────────────────┐ │
  │  contexts/                                    │ │
  │    CodeLayoutContextOptions                   │ │
  │    CodeLayoutContextValue                     │ │
  │    createCodeLayoutContext()                  │ │
  └────────────┬─────────────────────────────────┘ │
               │                                   │
  ┌────────────▼─────────────────────────────────┐ │
  │  compute/                                     │ │
  │    computeLayout(ctx, lang, ast)              │ │
  │      → dispatches to lang.layout(ctx, ast)    │ │
  └────────────┬─────────────────────────────────┘ │
               │                                   │
  ┌────────────▼─────────────────────────────────┐ │
  │  format/                                      │ │
  │    formatLayout(nodes, cols, indent)          │ │
  │      → CodeLayoutLine[]                      │ │
  └──────────────────────────────────────────────┘ │
                                                     │
All layers import from types.ts                     │
compute imports from contexts                       │
format imports from types only                     │
```

- **Foundation**: `types.ts` — All domain types, no logic.
- **Configuration**: `contexts/` — Context creation and typing, depends only on types.
- **Orchestration**: `compute/` — Dispatches to language plugins, depends on types + contexts.
- **Rendering**: `format/` — Pure tree-to-lines transformation, depends only on types.
