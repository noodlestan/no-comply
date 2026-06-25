# `@purrception/primitives` — API

- **Generated**: 2026-06-25
- **By**: sub-agent

## Entry Point

```
import { ... } from '@purrception/primitives';
```

Source: `src/index.ts` (barrel re-export of `src/types.ts`).

## Exports

All exports are TypeScript **type aliases** — no runtime values.

### Doc / Annotation Types

| Export     | Signature                                   | Description                         |
| ---------- | ------------------------------------------- | ----------------------------------- |
| `DocsTags` | `Record<string, string \| string[]>`        | Key-value pairs for JSDoc-like tags |
| `DocsData` | `{ description?: string; tags?: DocsTags }` | Optional doc metadata               |

### Symbol Tracking

| Export                      | Signature                                                                 | Description                                 |
| --------------------------- | ------------------------------------------------------------------------- | ------------------------------------------- |
| `ImportedSymbol`            | `{ at: string; name: string; alias: string; from: string }`               | Metadata for an imported symbol             |
| `DeclaredSymbol`            | `{ at: string; lang: string; name: string; private: boolean } & DocsData` | Metadata for a locally declared symbol      |
| `LanguageDeclaredSymbol<L>` | `DeclaredSymbol & { lang: L }`                                            | DeclaredSymbol with narrowed `lang` literal |

### Entity Model

| Export                  | Signature                                                                                                                                | Description                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `EntityDataBasePartial` | `{ type: string; name: string; package: string }`                                                                                        | Minimal unstamped entity shape |
| `EntityDataBase`        | `EntityDataBasePartial & DocsData & { symbols: { imported: Record<string, ImportedSymbol>; declared: Record<string, DeclaredSymbol> } }` | Full base entity               |

### Extraction Pipeline

| Export                      | Signature                                                              | Description                                    |
| --------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| `EntityExtractContext<T>`   | `{ context: T; partial: EntityDataBasePartial }`                       | Context wrapper for extraction                 |
| `EntityExtractResult<T, C>` | `{ context: EntityExtractContext<C>; entity: T; warnings?: string[] }` | Output of an entity processor                  |
| `AnonymousEntityProcessor`  | `() => Promise<EntityExtractResult<EntityDataBase>[]>`                 | Zero-arg async processor                       |
| `EntityDecorator<T>`        | `(partial: T) => EntityDataBase`                                       | Transforms a partial entity into a full entity |

## Notes

- All types are generic where indicated (`T extends EntityDataBase`, `C extends object`, `L extends string`).
- No runtime exports — the package is purely structural.
- Upstream packages (e.g. `@purrception/source-fs`, `@no-comply/meta`) extend `EntityDataBase` via intersection to define domain-specific entity shapes.
