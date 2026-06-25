# @purrtrait/code-layout — Conventions

Generated: 2026-06-25
By: sub-agent

## Naming

| Element             | Convention | Examples                              |
| ------------------- | ---------- | ------------------------------------- |
| Types / interfaces  | PascalCase | `CodeLayoutToken`, `CodeLayoutGroup`  |
| Functions           | camelCase  | `computeLayout`, `formatLayout`       |
| Files               | camelCase  | `computeLayout.ts`, `formatLayout.ts` |
| Context directories | PascalCase | `CodeLayout/`                         |
| Layer directories   | lowercase  | `compute/`, `contexts/`, `format/`    |

## File Organization

- **Layer-based top-level directories**: `types.ts` (flat), `compute/`, `contexts/`, `format/`
- **Each layer** uses a `helpers/` subdirectory for implementation files
- **Barrel exports** via `index.ts` with auto-generated `// @index` comments
- **No nested private folders** — all files in `helpers/` are publicly re-exported

## API Design Patterns

- **Pure functions over classes**: All functionality is exposed as standalone functions, not methods
- **Context pattern**: Configuration bundled into a context object passed as first argument (dependency injection style)
- **Plugin / registry pattern**: Languages registered via `CodeLayoutLanguage[]` in context, enabling extensibility without modifying core
- **Type-driven**: Types defined first, then functions consume them; no runtime type checks

## Typing Conventions

- `type` over `interface` for all type definitions
- Generic constraints where appropriate (e.g., `CodeLayoutToken<T extends CodeLayoutTokenKind>`)
- Discriminated union for node types (`type: 'token' | 'group' | 'block'`)
- `import type` for type-only imports (enforced by `verbatimModuleSyntax`)
- No `any` — uses `object` for the AST node parameter
