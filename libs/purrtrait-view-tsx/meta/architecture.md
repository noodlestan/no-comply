# @purrtrait/view-tsx — Architecture

> Generated: 2026-06-25 | by: sub-agent

## Design Principles

1. **Framework-agnosticism** — The extracted `TSXView` model is plain data with no framework-specific constructs. Consumers (React, SolidJS, etc.) determine how to render or recompile.
2. **Separation of concerns** — AST traversal/transformation (`private/`) is isolated from prop evaluation (`helpers/`) and from parsing/printing (delegated to `@purrtrait/client-tsx`).
3. **Configuration over convention** — All magic strings (attribute name, placeholder name, prop names) are overridable via `TSXViewOptions`.

## Layering

```
┌────────────────────────────────┐
│  src/index.ts                  │  ← re-exports (barrel)
├────────────────────────────────┤
│  Public API                    │
│  ├── extractTSXView()          │  ← entry-point function
│  ├── helpers/                  │  ← prop-evaluation utilities
│  └── constants.ts / types.ts   │
├────────────────────────────────┤
│  src/private/                  │  ← 10 internal modules
│  ├── createOptions             │     config merging
│  ├── findTargetNodes           │     DFS AST traversal
│  ├── replaceTargets            │     AST mutation
│  ├── wrapFragment              │     source normalisation
│  └── ...                       │     extraction helpers
├────────────────────────────────┤
│  @purrtrait/client-tsx         │  ← parse / print / TSX AST types
├────────────────────────────────┤
│  typescript (peer)             │  ← ts.Node, ts.factory, ts.visitEachChild
└────────────────────────────────┘
```

## Dependency Flow

- `extractTSXView` → `private/*` + `types.ts` + `@purrtrait/client-tsx`
- `private/*` → `types.ts` + `constants.ts` + `typescript` + `@purrtrait/client-tsx`
- `helpers/*` → `types.ts` only
- No circular dependencies exist.

## External Dependencies

| Dependency                        | Role                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------ |
| `@purrtrait/client-tsx` (runtime) | TSX source parsing, AST node types (`TSXElementNode`, `TSXNode`), AST printing |

## Peer Dependencies

| Dependency   | Version | Role                                                                                      |
| ------------ | ------- | ----------------------------------------------------------------------------------------- |
| `typescript` | ^5.9.3  | Compiler API (`ts.Node`, `ts.factory`) used internally for AST traversal and construction |
