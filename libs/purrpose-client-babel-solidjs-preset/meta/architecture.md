# Architecture

> This file extends [purrpose architecture](../../../architecture/purrpose.md).

## Project Context

`@purrpose/client-babel-preset-solidjs` is the SolidJS JSX transform preset for the `@purrpose/client-babel` in-browser compiler. It extracts configuration from `babel-preset-solid` so the browser compiler stays insulated from non-standalone Babel.

It **consumes** (peer deps): `@purrpose/client-babel` (types), `babel-plugin-jsx-dom-expressions` (JSX transform), `solid-js/web` (runtime scope). It **provides** a `CompilerPreset` value object consumed by `createCompiler()` in `@purrpose/client-babel`.

**API surface:** a single factory function `solidPreset()` returning a `CompilerPreset` — Babel plugin config plus runtime scope.

## Design Principles

### Configuration over code

The entire preset is a value-object factory. `solidPreset()` returns a plain object with `babelPresets` and `scope` — no imperative logic, no state, no side effects beyond module-level imports.

### Adapters, not wrappers

Extracted config from `babel-preset-solid` rather than wrapping it. This insulates the browser compiler from non-standalone Babel dependencies.

### Single responsibility

Owns exactly one concern: wire `babel-plugin-jsx-dom-expressions` into the `CompilerPreset` interface. No routing, no compilation, no framework-agnostic abstraction.

### Minimal surface

One function, one file, one export. The barrel re-exports and adds a default export — nothing more.

## Structure

```
libs/purrpose-client-babel-solidjs-preset/
  src/
    preset.ts    — solidPreset() factory: Babel plugin config + solid-js/web scope
    index.ts     — barrel re-export and default export
  meta/          — project documentation (architecture, modules, etc.)
  package.json   — peer deps: client-babel, babel-plugin-jsx-dom-expressions, solid-js
```

This is a single-source-file project. The `preset.ts` module contains all logic; `index.ts` is a barrel.

## Main Patterns

### Preset Factory

`solidPreset()` is the sole export. It returns a `CompilerPreset` with:
- `babelPresets` — plugin config for `babel-plugin-jsx-dom-expressions` (built-ins, DOM generate mode, custom element context, conditional wrapping)
- `scope` — `require` function returning `solid-js/web` for runtime execution

### CompilerPreset Contract

Implements the `CompilerPreset` type from `@purrpose/client-babel`. The shape is `{ babelPresets, scope }` — a plain object consumed by the compiler infrastructure.

## Layers

The preset sits in the **integration/configuration layer** — above `@purrpose/client-babel` types, below consumer applications. It has no internal layering (single source file). Import direction is strictly downward: `preset.ts` → `@purrpose/client-babel` (types), `babel-plugin-jsx-dom-expressions`, `solid-js/web`. No circular dependencies.

## External Dependencies

- **`@purrpose/client-babel`** (`0.0.11`) — peer dep, type-only import for `CompilerPreset`
- **`babel-plugin-jsx-dom-expressions`** (`^0.40.7`) — peer dep, provides the JSX-to-Solid DOM transform plugin
- **`solid-js`** (`1.9.13`) — peer dep, supplies runtime scope via `solid-js/web`

### Tradeoffs

- **Peer deps over bundled deps** — `babel-plugin-jsx-dom-expressions` and `solid-js` are peers so consumers control versions; avoids duplication but requires manual install
- **Extracted config over wrapper** — pulling config from `babel-preset-solid` avoids non-standalone Babel baggage; means upstream changes require manual sync
- **Single file over split modules** — one file keeps complexity visible; limits test granularity for edge cases
