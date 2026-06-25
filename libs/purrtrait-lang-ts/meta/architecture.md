# @purrtrait/lang-ts — Architecture

> Generated: 2026-06-25
> By: sub-agent

## Design Principles

1. **Separation of Concerns** — AST structure (`@purrception/lang-ts`), layout model (`@purrtrait/code-layout`), and rendering are separate packages. This package bridges them.
2. **Composition over Configuration** — Layout is built by composing small atomic functions (per-expression, per-declaration handlers) rather than a configuration-driven approach.
3. **Explicit Data Flow** — All state is passed explicitly through `ctx` parameter; no implicit state or globals.

## Layering

### External (Monorepo Domain)

```
@purrtrait/code-layout          — contract: CodeLayoutLanguage, CodeLayoutNode types
        ↕
  @purrtrait/lang-ts            — adapter: maps AST nodes → layout nodes (THIS PACKAGE)
        ↕
@purrception/lang-ts            — source: lightweight TypeScript AST definitions
```

### Internal

```
constants/                      — language identifier strings
    ↓
contexts/                       — generic params tracking context
    ↓
layout/                         — tsCodeLayout entry point
    ↓
  private/
    ├─ layoutCode.ts            — top-level dispatcher (string / expression / declaration)
    ├─ layoutDeclaration.ts     — declaration dispatcher (type / function / component / interface)
    ├─ layoutExpression.ts      — expression dispatcher (16 expression kinds)
    ├─ declarations/            — per-kind declaration renderers
    ├─ expressions/             — per-kind expression renderers
    ├─ generics/                — generic parameter rendering
    ├─ layout/                  — token factories (identifier, keyword, symbol, etc.)
    └─ utils/                   — shared helpers (eachExpression, appendSemicolon)
```

## Dependency Flow

- `tsCodeLayout` → `layoutCode` → `layoutDeclaration` / `layoutExpression` → specialized handlers → `layout/` token factories + `utils/` helpers
- Context flows sideways (passed through function parameters)
- No circular dependencies between subdomains (expressions don't import from declarations, etc.)
- Pure function composition — no classes, no instances

## External Dependencies

| Package                  | Version | Role                                                                   |
| ------------------------ | ------- | ---------------------------------------------------------------------- |
| `@purrception/lang-ts`   | 0.0.11  | TypeScript AST node type definitions                                   |
| `@purrtrait/code-layout` | 0.0.11  | Code layout model (CodeLayoutLanguage interface, CodeLayoutNode types) |

## Peer Dependencies

None.
