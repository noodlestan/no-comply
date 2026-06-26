<!-- updated: 2026-06-26T02:00:27Z | by: opencode/mimo-v2-5-free -->

# Architecture — `@purrpose/client-babel`

> This file extends [purrpose architecture](../../../architecture/purrpose.md).

## Project Context

`@purrpose/client-babel` provides in-browser JSX/TSX compilation using `@babel/standalone`. It exposes a factory function (`createCompiler`) that returns a `CompilerAPI` with compile, execute, and evaluation capabilities.

**Consumes:**
- `@babel/standalone` (peer) — Babel transforms in browser
- `assert` (peer) — required by Babel standalone internals

**Provides to:**
- Playground and documentation tools needing runtime compilation
- `@purrpose/client-babel-preset-solidjs` — consumes `CompilerPreset` type at the type level

**API categories:**
- Compiler factory — `createCompiler(options)` returning `CompilerAPI`
- Compiler types — `CompilerOptions`, `CompilerPreset`, `CompilerAPI`, `CompilerScope`
- Evaluation helpers — `evaluateComponent`, `evaluateExpression`, `evaluateHandler`

## Design Principles

### Two-phase pipeline

Compilation is split into `compile` (Babel transform) and `execute` (`new Function()` eval). Each phase has its own options and error handling, keeping concerns cleanly separated.

### Preset-driven extensibility

Framework-specific behavior is injected via `CompilerPreset` objects. Presets provide additional Babel plugins and runtime scope. The core compiler has no framework knowledge — it only applies presets.

### Injection pattern for helpers

Evaluation helpers receive a `Compiler` instance via function parameters rather than importing the compiler directly. This prevents reverse dependencies and keeps the dependency graph acyclic.

### Explicit security surface

The compiler uses `new Function()` for code execution. This is documented as an explicit tradeoff: it enables in-browser compilation but requires sandboxing awareness from consumers.

### Options-driven defaults

`CompilerOptions` supports deep merging with `defaultOptions()`. Consumers override specific fields while inheriting sensible defaults — no configuration required for basic use.

## Structure

```
src/
├── types.ts                — All type definitions (no runtime deps)
├── createCompiler.ts       — Core factory: Babel transform + Function eval
├── helpers/                — Eval wrappers (injected with Compiler)
└── index.ts                — Package barrel
```

## Main patterns

**Compiler factory** — `createCompiler` is the single entry point. It accepts options, builds Babel configuration, merges preset scopes, and returns a `CompilerAPI` object. No classes, no singletons.

**Evaluation helpers** — `evaluateComponent`, `evaluateExpression`, `evaluateHandler` compose compile + execute into higher-level operations. Each takes a `Compiler` as its first argument.

**Types module** — `types.ts` defines all public types (`CompilerAPI`, `CompilerPreset`, `CompilerOptions`, `CompilerScope`). No runtime code, no dependencies.

## Layers

Dependency flows strictly downward: `index.ts` → `helpers/` + `createCompiler.ts` → `types.ts`.

- `types.ts` sits at the bottom (zero dependencies)
- `createCompiler.ts` orchestrates Babel and Function eval
- `helpers/` wraps compile+execute, receiving `Compiler` via injection
- `index.ts` barrel at the top

No circular dependencies. Helpers never import from `createCompiler.ts` directly.

## External dependencies

- **`@babel/standalone`** (`^7.29.7`, peer) — provides `babel.transform()` for in-browser compilation
- **`assert`** (`^2.1.0`, peer) — required by `@babel/standalone` internals
- **`@babel/core`** types (dev) — used in `types.ts` for `babel.PluginItem` and `babel.TransformOptions` type annotations

### Tradeoffs

- **`new Function()` over CSP-safe eval** — enables in-browser compilation without a server but requires CSP-aware deployment
- **Babel standalone over bundled transforms** — trades bundle size for zero-build-step convenience in playgrounds
- **Preset system over hardwired framework support** — adds indirection but allows framework-agnostic core
