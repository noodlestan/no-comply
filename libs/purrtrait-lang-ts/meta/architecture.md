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
src/
├── constants.ts                 — language identifier strings (PurrceptionLanguageId, LanguageName)
├── contexts/
│   └── <entity>/               — context factories and types (e.g., CodeLayoutWithGenericParams)
├── layout/
│   ├── tsCodeLayout.ts         — plugin entry point (CodeLayoutLanguage object)
│   └── private/                — internal implementation details
│       ├── layoutCode.ts       — top-level dispatcher (string / expression / declaration)
│       ├── layoutDeclaration.ts — declaration dispatcher (type / function / component / interface)
│       ├── layoutExpression.ts — expression dispatcher (16 kinds)
│       ├── <declaration>/      — per-kind declaration renderers (type, function, component, interface)
│       ├── <expression>/       — per-kind expression renderers (16 expression kinds)
│       ├── generics/           — generic parameter rendering
│       ├── layout/             — token factories (identifier, keyword, symbol, etc.) + helpers
│       └── utils/              — shared helpers (eachExpression, appendSemicolon)
```

## Dependency Flow

- `tsCodeLayout` → `layoutCode` → `layoutDeclaration` / `layoutExpression` → specialized handlers → `layout/` token factories + `utils/` helpers
- Context flows sideways (passed through function parameters)
- No circular dependencies between subdomains (expressions don't import from declarations, etc.)
- Pure function composition — no classes, no instances
