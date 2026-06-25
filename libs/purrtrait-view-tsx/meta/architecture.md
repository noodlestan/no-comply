# @purrtrait/view-tsx — Architecture

> This file extends [purrtrait architecture](../../../architecture/purrtrait.md).

> Generated: 2026-06-25 | by: sub-agent

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
