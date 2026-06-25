# Architecture — `@purrpose/client-babel`

> This file extends [purrpose architecture](../../../architecture/purrpose.md).

## Layering

```
types.ts (pure types)
    ↑
private/ (internal utilities)
    ↑
createCompiler.ts (babel transform + Function eval)
    ↑
helpers/ (eval wrappers — injected with Compiler instance)
    ↑
index.ts (barrel)
```

## Dependency Flow

- `createCompiler.ts` imports `helpers/` and `private/`
- `helpers/` receive a `Compiler` via injection — no reverse dependency
- `private/` is internal — imported by `createCompiler.ts` and `evaluateHandler.ts`
- No circular dependencies
