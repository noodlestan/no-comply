# Architecture — @purrtrait/solid-code

> This file extends [purrtrait architecture](../../../architecture/purrtrait.md).

- **Last updated**: 2026-06-25
- **Author**: sub-agent

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

## Module boundaries

| Directory                  | Responsibility                                                             | Internal/Public |
| -------------------------- | -------------------------------------------------------------------------- | --------------- |
| `src/private/`             | Low-level JSX renderers (renderLine, renderToken, SolidCodeLinkDefault)    | Internal        |
| `src/contexts/`            | Type definitions extending `@purrtrait/code-layout` types; context factory | Public          |
| `src/providers/`           | Context provider component and consumer hook                               | Public          |
| `src/components/`          | Public SolidJS components                                                  | Public          |
| `src/providers/*/private/` | Per-feature internal utilities (e.g. raw context object)                   | Internal        |
