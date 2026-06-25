# Architecture — `@purrpose/client-babel`

## Design Principles

- **Framework-agnostic** — JSX preset is pluggable via `CompilerPreset`. No hardcoded SolidJS or React.
- **Explicit security surface** — README warns about `new Function()`, bundle size, and missing sandboxing.

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

## External Dependencies

- `@babel/standalone` — used in `createCompiler.ts`
- No internal monorepo dependencies

## Peer Dependencies

- `assert` — required for `@babel/standalone` to function
