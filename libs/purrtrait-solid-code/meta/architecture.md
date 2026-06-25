# Architecture — @purrtrait/solid-code

- **Last updated**: 2026-06-25
- **Author**: sub-agent

## Design principles

1. **Separation of concerns** — Layout computation lives in `@purrtrait/code-layout`; this package handles only SolidJS rendering. Neither layer depends on the other's runtime.

2. **Dependency injection over configuration** — The `linker` function and `link` component are injectable at the context level, allowing consumers to replace rendering behavior without modifying components.

3. **Explicit context propagation** — All components consume context via SolidJS `Context` API rather than global state or module-level singletons. Misuse is caught eagerly by `useSolidCodeLayoutContext()`.

## Layering

```
@purrtrait/code-layout        (domain: AST → layout computation, formatting)
        ↓
@purrtrait/solid-code         (UI rendering layer for SolidJS)
  ├── src/private/             render primitives (renderLine, renderToken, SolidCodeLinkDefault)
  ├── src/contexts/            type definitions and factory (extends code-layout types)
  ├── src/providers/           SolidJS context provider + consumer hook
  └── src/components/          public SolidJS components (CodeBlock, CodeLayoutRenderer)
        ↓
  Consumer application         (SolidJS app using @purrtrait/solid-code)
```

## Dependency flow

- **Downward**: `@purrtrait/code-layout` → `@purrtrait/solid-code` → consumer
- **Internal upward**: `private/` → `contexts/` → `providers/` → `components/` → `src/index.ts`
- No circular dependencies observed.

## Module boundaries

| Directory                  | Responsibility                                                             | Internal/Public |
| -------------------------- | -------------------------------------------------------------------------- | --------------- |
| `src/private/`             | Low-level JSX renderers (renderLine, renderToken, SolidCodeLinkDefault)    | Internal        |
| `src/contexts/`            | Type definitions extending `@purrtrait/code-layout` types; context factory | Public          |
| `src/providers/`           | Context provider component and consumer hook                               | Public          |
| `src/components/`          | Public SolidJS components                                                  | Public          |
| `src/providers/*/private/` | Per-feature internal utilities (e.g. raw context object)                   | Internal        |

## External dependencies

| Package                  | Version | Role                                                                  |
| ------------------------ | ------- | --------------------------------------------------------------------- |
| `@purrtrait/code-layout` | 0.0.11  | Layout computation (`computeLayout`, `formatLayout`) and shared types |
| `@purrtrait/lang-ts`     | 0.0.11  | TypeScript language support (transitive)                              |

## Peer dependencies

| Package    | Version | Role                                                |
| ---------- | ------- | --------------------------------------------------- |
| `solid-js` | ^1.9.5  | SolidJS runtime (JSX, components, context, signals) |

## Extensibility model

1. **Language plugins** — Register custom `CodeLayoutLanguage` implementations via `langs` array in context options.
2. **Link injection** — Override `link` component to replace the default `<a>`-based rendering.
3. **Linker function** — Supply a `linker: CodeNodeLinker` to dynamically resolve values to URLs.
4. **Column configuration** — Adjust `columns` to control line-wrapping width (per-block via `CodeBlock` or globally via context).

## Key trade-offs

| Dimension                  | Choice                                   | Implication                                  |
| -------------------------- | ---------------------------------------- | -------------------------------------------- |
| Performance vs flexibility | Reactive layout computation per render   | Flexible but recomputes on signal changes    |
| Abstraction vs simplicity  | Multi-layer (ctx → provider → component) | More boilerplate but highly extensible       |
| Bundle size vs DX          | Published source-direct                  | No tree-shaking complexity; requires bundler |
