# @purrtrait/view-tsx — Module Map

> Generated: 2026-06-25 | by: sub-agent

```
src/
├── constants.ts              — Default values for target attribute, placeholder name, and prop keys
├── extractTSXView.ts          — Main entry: parse source, find targets, replace with placeholders, return TSXView
├── types.ts                   — Shared type definitions (TSXView, TSXViewTarget, TSXViewOptions, PropEvaluator)
└── helpers/
    ├── viewPropsByTarget.ts   — Evaluate props for all targets at once via PropEvaluator callback
    └── viewTargetProps.ts     — Evaluate props for a single target via PropEvaluator callback
```

### Excluded from tree

- **`src/index.ts`** — barrel re-export only
- **`src/helpers/index.ts`** — barrel re-export only
- **`src/private/`** — 10 internal modules (implementation details, not part of public API surface)
