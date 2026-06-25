# @purrtrait/view-tsx — Conventions

> Generated: 2026-06-25 | by: sub-agent

## Naming

| Category              | Convention                                 | Examples                                                       |
| --------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| Functions / variables | `camelCase`                                | `extractTSXView`, `findTargetNodes`, `createOptions`           |
| Types / interfaces    | `PascalCase`                               | `TSXView`, `PropEvaluator`, `ViewTargetPropsRaw`               |
| Constants (public)    | `UPPER_SNAKE_CASE`                         | `TARGET_ATTRIBUTE_NAME`, `PLACEHOLDER_PROPS_VAR`               |
| Source files          | Named after primary export, `camelCase`    | `extractTSXView.ts`, `isTargetAttr.ts`                         |
| Barrel files          | `index.ts` with `// @index` comment marker | `src/index.ts`, `src/private/index.ts`, `src/helpers/index.ts` |

## File Organization

- **One exported entity per file** — with rare exceptions (e.g. `types.ts` groups all view-model types).
- **`src/private/`** — implementation details never exposed to consumers (10 single-function files).
- **`src/helpers/`** — secondary public utilities (prop evaluators).
- **Flat directory structure** — no nested subdirectories inside `private/` or `helpers/`.

## API Design Patterns

- **Options object + Partial + defaults** — Public functions accept `Partial<TSXViewOptions>` and merge with built-in defaults via `createOptions()`.
- **Callback-based transformation** — `PropEvaluator` delegates prop interpretation to the caller, keeping the library framework-agnostic.
- **Configurable names** — All magic strings (attribute name, placeholder name, prop names) are overridable via `TSXViewOptions`.
- **Sync-only API** — No async or promise-based interfaces.
- **Error handling** — Fatal errors (e.g. no target nodes found) throw; non-fatal issues (e.g. nested targets) are logged via `console.error` and skipped.

## Typing Conventions

- `import type` for type-only imports.
- Domain prefix `TSX` for all view-model types (e.g. `TSXView`, `TSXViewTarget`).
- Composition over inheritance — flat interfaces, no classes.
- Reuses types from `@purrtrait/client-tsx` (`TSXElementNode`, `TSXNode`, `TypescriptElementNode`).
- Minimal type hierarchy: `TSXView` → `TSXViewTarget` → `TSXNode`.
- Barrel exports via `// @index` auto-generation marker comments.
