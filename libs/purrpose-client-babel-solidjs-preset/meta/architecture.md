# Architecture

## Design Principles

1. **Single responsibility** — exactly one concern: configure Babel for SolidJS JSX transform. Nothing else.
2. **Configuration over code** — the package contains almost no logic; it's a value-object factory returning Babel plugin config + runtime scope.
3. **Adapters, not wrappers** — extracts config from `babel-preset-solid` rather than wrapping it, insulating the browser compiler from non-standalone Babel.

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

## External Dependencies

None. The package has zero runtime dependencies of its own.

## Peer Dependencies

| Package                            | Version   | Role                                                        |
| ---------------------------------- | --------- | ----------------------------------------------------------- |
| `@purrpose/client-babel`           | `0.0.11`  | Provides `CompilerPreset` type and compiler infrastructure  |
| `babel-plugin-jsx-dom-expressions` | `^0.40.7` | Babel plugin that transforms JSX to SolidJS DOM expressions |
| `solid-js`                         | `1.9.13`  | Runtime (`solid-js/web` supplied via `scope`)               |
