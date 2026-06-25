# @purrtrait/lang-ts — Architecture

> This file extends [purrtrait architecture](../../../architecture/purrtrait.md).

> Generated: 2026-06-25
> By: sub-agent

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
