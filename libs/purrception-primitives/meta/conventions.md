# `@purrception/primitives` — Conventions

- **Generated**: 2026-06-25
- **By**: sub-agent

## Naming Conventions

- **PascalCase** for all type aliases (e.g. `EntityDataBase`, `DocsData`).
- **Prefix groups**: `Entity*` for extraction pipeline types, `Docs*` for documentation metadata, `*Symbol` for code-level symbol tracking.
- **Generic type params**: `T` for entity type, `C` for context type, `L` for language string literal, `F` and `P` in companion packages.

## File Organization

- All type definitions live in a single `src/types.ts` file.
- A barrel `src/index.ts` re-exports everything using an `@index` comment marker (tool: `barrelsby` or similar auto-indexer).
- Two source files total — intentionally minimal.

## API Design Patterns

- **Partial → Decorated → Full** pipeline: `EntityDataBasePartial` serves as an unstamped input, `EntityDecorator<T>` transforms it into a full `EntityDataBase`, and consumers receive `EntityExtractResult<T, C>`.
- **Context threading**: Extraction context wraps both a generic `context: T` and a `partial: EntityDataBasePartial`, allowing processors to pass ambient state through the pipeline.
- **No functions, classes, or runtime logic** — the entire API surface is type aliases.
- **No error handling patterns** exist in the types themselves — that is delegated to upstream packages.

## Typing Conventions

- **`type` over `interface`** — zero interfaces in the codebase.
- **Intersection types (`&`)** for composition rather than `extends`.
- **Intersection with `DocsData`** to make `description` and `tags` optional on any entity type.
- **Generics with defaults and constraints**: `T extends EntityDataBase`, `C extends object`, `L extends string`.
- **No enums, no namespaces, no classes** — purely structural type aliases.
- **No index signatures** — the commented-out `[key: string]: unknown` on `EntityDataBase` was removed in favor of explicit intersection-based extension.
- **`private: boolean`** on `DeclaredSymbol` uses a JS-private-like naming pattern (not TS `private` or `#private`).

## Formatting

- Tabs for indentation (inherited from monorepo Prettier config).
- No semicolons.
- Single quotes.
