# API — `@no-comply/meta-extract`

**Date:** 2026-06-25
**By:** sub-agent

---

## Entry Point

```
import { ... } from '@no-comply/meta-extract';
```

Source barrel: `src/index.ts` — re-exports from `entities/`, `heuristics/`, `utils/`.

---

## Exports Summary

### Entity Extractor Factories (`entities/`)

| Export                            | Signature                           | Description                                                 |
| --------------------------------- | ----------------------------------- | ----------------------------------------------------------- |
| `createComponentEntityExtractor`  | `(options?) => DirectoryExtractAPI` | Extracts SolidJS components from `/module/components/name/` |
| `createContextEntityExtractor`    | `(options?) => DirectoryExtractAPI` | Extracts SolidJS contexts from `/module/contexts/name/`     |
| `createControllerEntityExtractor` | `(options?) => DirectoryExtractAPI` | Extracts controllers from `/module/controllers/name/`       |
| `createMixinEntityExtractor`      | `(options?) => DirectoryExtractAPI` | Extracts mixins from `/module/mixins/name/`                 |
| `createModuleEntityExtractor`     | `(options?) => DirectoryExtractAPI` | Extracts top-level module metadata from `/<module>/`        |
| `createProviderEntityExtractor`   | `(options?) => DirectoryExtractAPI` | Extracts providers from `/module/providers/name/`           |
| `createServiceEntityExtractor`    | `(options?) => DirectoryExtractAPI` | Extracts services from `/module/services/name/`             |

All factories accept optional `matcher`, `resolver`, `decorator` overrides.

### Entity Types (`entities/types.ts`)

| Type                          | Description                                                     |
| ----------------------------- | --------------------------------------------------------------- |
| `NoComplyEntityPartial`       | Base partial entity: `{ module, path } & EntityDataBasePartial` |
| `NoComplyEntityData`          | Full base entity data: `EntityDataBase & NoComplyEntityPartial` |
| `NoComplyEntityDataWithTypes` | Entity data with `types: Record<string, TypeDeclaration>`       |

### Heuristics (`heuristics/`)

| Export                 | Signature                                             | Description                              |
| ---------------------- | ----------------------------------------------------- | ---------------------------------------- |
| `resolveEntityFiles`   | `(ctx, partial, resolver) => Promise<F \| undefined>` | Invokes an `EntityFileResolver` callback |
| `resolveEntityPartial` | `(ctx, matcher) => Promise<P \| undefined>`           | Invokes an `EntityMetaMatcher` callback  |

### Utilities (`utils/helpers/`)

| Export              | Signature (simplified)           | Finds                                                    |
| ------------------- | -------------------------------- | -------------------------------------------------------- |
| `findComponentFile` | `(files) => string \| undefined` | First `*.tsx` file in directory                          |
| `findFactoryFile`   | `(files) => string \| undefined` | First file starting with `create`                        |
| `findHelperFiles`   | `(files) => string[]`            | Files in `helpers/` subdir (excl. index/types/constants) |
| `findHookFiles`     | `(files) => string[]`            | Files matching `use*.ts`                                 |
| `findIndexFile`     | `(files) => string \| undefined` | First file starting with `index`                         |
| `findProviderFile`  | `(files) => string \| undefined` | First `*.tsx` file (alias for findComponentFile)         |
| `findTypesFile`     | `(files) => string \| undefined` | Exact file `types.ts`                                    |
