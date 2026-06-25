# @purrtrait/code-layout — Architecture

Generated: 2026-06-25
By: sub-agent

## Design Principles

1. **Separation of tree construction from formatting** — `computeLayout` builds the syntax tree; `formatLayout` handles line-breaking and indentation. Independent concerns.
2. **Plugin-driven dispatch** — The library delegates entirely to registered `CodeLayoutLanguage` handlers; it knows nothing about specific languages.
3. **Zero-dependency minimalism** — Pure type definitions and pure functions. No runtime dependencies.
4. **Configuration via context object** — No global state; context is explicitly threaded through all functions.

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

## Dependency Flow

```
types  ←  contexts  ←  compute
  ↑
  └────── format (depends only on types)
```

- No circular dependencies
- `format/` is fully independent of `contexts/` and `compute/`
- `compute/` depends on `contexts/` (for the context value) and `types`
- `contexts/` depends only on `types`

## External Dependencies

None. Zero runtime dependencies.

## Peer Dependencies

None.
