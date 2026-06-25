# Module Boundaries — `@purrpose/client-babel`

```
src/
├── types.ts                 — All type definitions (no runtime deps)
├── createCompiler.ts        — Core factory: orchestrates babel transform + Function eval
└── helpers/                 — Higher-level eval wrappers that compose compile + execute
    ├── evaluateComponent.ts  — Wraps code into a Component(props) function
    ├── evaluateExpression.ts — Wraps an expression for evaluation
    └── evaluateHandler.ts    — Wraps a handler with debug logging
```
