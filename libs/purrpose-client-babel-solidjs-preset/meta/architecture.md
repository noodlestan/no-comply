# Architecture

> This file extends [purrpose architecture](../../../architecture/purrpose.md).

## Layering

```
@purrpose/client-babel-preset-solidjs   (config preset)
    │
    ▼  (peer dep — types only)
@purrpose/client-babel                   (compiler infrastructure, types)
    │
    ├──  babel-plugin-jsx-dom-expressions  (JSX→Solid transform)
    └──  solid-js/web                      (runtime scope for execution)
```

- This preset sits in the **integration/configuration layer** — it wires a third-party Babel plugin into the `@purrpose/client-babel` type system.
- No internal layering (single source file with logic).

## Dependency Flow

```
@purrpose/client-babel-preset-solidjs
  → (type-level import)     @purrpose/client-babel
  → (import-time require)   babel-plugin-jsx-dom-expressions
  → (runtime scope)         solid-js/web
```

- The reverse flow is consumer-driven: `@purrpose/client-babel`'s `createCompiler()` calls this preset's return value.
