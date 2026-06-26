# Architecture — @purrtrait/solid-code

> This file extends [purrtrait architecture](../../../architecture/purrtrait.md).

- **Last updated**: 2026-06-26
- **Author**: opencode/mimo-v2-pro

## Project Context

SolidJS rendering layer for `@purrtrait/code-layout`. Takes computed layout nodes and renders them as interactive SolidJS components with context-driven configuration.

**Consumes:**
- `@purrtrait/code-layout` — `computeLayout`, `formatLayout`, and shared types (`CodeLayoutLine`, `CodeLayoutToken`, `CodeLayoutContextOptions`, `CodeLayoutContextValue`)
- `@purrtrait/lang-ts` — transitive via code-layout for TypeScript language plugins

**Provides to:** SolidJS applications needing syntax-highlighted code display with link injection and configurable line-wrapping.

**API categories:**
- Components (`CodeBlock`, `CodeLayoutRenderer`) — render layout output
- Context factory (`createSolidCodeLayoutContext`) — builds context with defaults
- Provider and hook (`SolidCodeLayoutProvider`, `useSolidCodeLayoutContext`) — context propagation

## Design Principles

### Rendering Separation

- **Layout computation stays upstream** — This package never calls `computeLayout` or `formatLayout` itself; `CodeBlock` delegates to `@purrtrait/code-layout` and only handles JSX rendering. The package owns the SolidJS layer, not the layout layer.

- **Private render primitives** — `renderLine` and `renderToken` in `src/private/` produce raw JSX. Components consume them; consumers never import them directly. Keeps the public API surface minimal.

### Context-Driven Injection

- **Link injection over hardcoding** — The `link` component (defaulting to `<a>`) is overridable via context options. Consumers swap rendering without touching components.

- **Linker function as interface** — `linker: CodeNodeLinker` resolves tokens to URLs at context level. The rendering layer has no knowledge of URL construction.

- **Fail-fast context access** — `useSolidCodeLayoutContext()` throws immediately outside a provider, catching misconfiguration at component mount rather than at render time.

### Minimal Surface

- **Two components, one context** — `CodeBlock` (high-level: nodes → layout → render) and `CodeLayoutRenderer` (low-level: lines → render). Consumers pick the abstraction level they need.

- **Re-export barrel** — `src/index.ts` re-exports `components`, `contexts`, and `providers`. No direct deep imports expected from consumers.

## Structure

```
src/
├── components/
│   ├── CodeBlock/               — high-level: nodes → layout → render
│   │   ├── CodeBlock.tsx
│   │   └── types.ts
│   └── CodeLayoutRenderer/      — low-level: lines → render
│       ├── CodeLayoutRenderer.tsx
│       └── types.ts
├── contexts/
│   └── SolidCodeLayout/         — context factory + types
│       ├── createSolidCodeLayoutContext.ts
│       └── types.ts
├── providers/
│   └── SolidCodeLayout/         — provider component + consumer hook
│       ├── SolidCodeLayoutProvider.tsx
│       └── useSolidCodeLayoutContext.ts
└── private/                     — internal render primitives
    ├── renderLine.tsx
    └── SolidCodeLinkDefault.tsx
```

## Main Patterns

**Components** — Two tiers: `CodeBlock` owns the full pipeline (nodes → layout → render); `CodeLayoutRenderer` takes pre-formatted lines and renders JSX. Both read context via `useSolidCodeLayoutContext()`.

**Context** — `SolidCodeLayoutContext` extends `@purrtrait/code-layout`'s context value with a `link` component. `createSolidCodeLayoutContext` fills defaults (columns 60, no-op linker, default link).

**Providers** — `SolidCodeLayoutProvider` wraps a subtree with the context value. `useSolidCodeLayoutContext` is the consumer hook with a guard throw.

## Layers

Import direction is strictly upward: `private/` → `contexts/` → `providers/` → `components/`. No circular dependencies exist. `CodeBlock` imports from `providers` (context hook), `components` (CodeLayoutRenderer), and `@purrtrait/code-layout` (layout functions). `CodeLayoutRenderer` imports from `private/` (renderLine) and `providers` (context hook). `private/` imports only from `contexts/` for type references.

## External dependencies

- `@purrtrait/code-layout` `0.0.11` — runtime dependency for layout computation and shared types
- `@purrtrait/lang-ts` `0.0.11` — runtime dependency (transitive, provides TS language plugins)
- `solid-js` `^1.9.5` — peer dependency (JSX, components, context, signals)

### Tradeoffs

- **High-level vs low-level components** — `CodeBlock` convenience vs `CodeLayoutRenderer` flexibility; consumers choose their abstraction level.
- **Context overhead vs safety** — Provider/hook pattern adds boilerplate but catches misconfiguration eagerly.
- **Private renderers vs public API** — Hiding `renderLine`/`renderToken` keeps the public surface small but prevents consumers from customizing line rendering.
