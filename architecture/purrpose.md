# purrpose

> This file extends [no-comply architecture](./nocomply.md).

This document consolidates design principles, layering, dependency flow, and external dependencies across all @purrpose packages. It serves as a single source of truth for contributors.

## Design Principles

- **Configuration over code**: The SolidJS preset is a value-object factory returning Babel plugin config and runtime scope, not imperative logic

### Compilation Patterns

- **Single responsibility** — Each package owns exactly one concern. The SolidJS preset configures Babel for JSX transform and nothing else.

- **Framework-agnostic** — JSX preset is pluggable via `CompilerPreset` with no hardcoded framework bindings.

- **Adapters, not wrappers** — The SolidJS preset extracts config from `babel-preset-solid` rather than wrapping it, insulating the browser compiler from non-standalone Babel.

- **Explicit security surface** — Runtime compiler uses `new Function()` requiring clear documentation of sandboxing and bundle-size implications.

## Layering

- **No internal layering** within the SolidJS preset itself — a single source file with minimal logic
- **Peer-dep boundary**: the SolidJS preset depends on `@purrpose/client-babel` at the type level only
- **Internal module ordering** — `types.ts` at the bottom, `private/` internal utilities above, `createCompiler.ts` (Babel transform + `Function` eval) above that, `helpers/` eval wrappers (injected with `Compiler`) second-to-top, `index.ts` barrel at the top.

- **Integration layer** — The SolidJS preset sits in the configuration layer, wiring a third-party Babel plugin into the `@purrpose/client-babel` type system.

## Dependency Flow

- **Reverse flow** (`@purrpose/client-babel` → preset): consumer-driven — `createCompiler()` calls the preset's return value
- **Internal injection** — `createCompiler.ts` imports `helpers/` and `private/`; `helpers/` receive a `Compiler` instance via injection with no reverse dependency.

- **Cross-package flow** — The SolidJS preset performs a type-level import of `@purrpose/client-babel`, an import-time require of `babel-plugin-jsx-dom-expressions`, and provides `solid-js/web` as runtime scope.

## External Dependencies

- **`@babel/standalone`**: used by `createCompiler.ts` in `@purrpose/client-babel`
- **`assert`**: peer dependency required for `@babel/standalone` to function
- **`babel-plugin-jsx-dom-expressions`**: peer dependency of the SolidJS preset (`^0.40.7`) providing the JSX-to-Solid DOM transform
- **`solid-js`**: peer dependency of the SolidJS preset (`1.9.13`), supplying runtime scope via `solid-js/web`
- **`@purrpose/client-babel`**: peer dependency of the SolidJS preset (`0.0.11`), providing the `CompilerPreset` type and compiler infrastructure
- **No internal monorepo dependencies** beyond the above peer relationship
