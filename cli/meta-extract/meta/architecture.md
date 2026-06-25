# Architecture — `@no-comply/meta-extract`

**Date:** 2026-06-25
**By:** sub-agent

---

## Design Principles

1. **Separation of match, resolve, extract** — Each concern is isolated in its own module within `private/`, making the pipeline testable and overridable.
2. **Convention over configuration** — Directory structure encodes entity type and module membership; no config files needed.
3. **Uniform factory interface** — All 7 entity extractors share the same `DirectoryExtractorFactory` signature.
4. **Type safety through generics** — Generic type parameters (`P`, `F`, `T`) flow through the pipeline end-to-end.

---

## Layering

The project sits at Layer 3 of the Purrception extraction stack:

```
Layer 0: @purrception/primitives       — EntityDataBase, EntityDataBasePartial
Layer 1: @purrception/source-fs        — defineDirectoryExtractor, DirectoryExtractContext
Layer 1: @purrception/lang-ts-extract  — createProgram, AST extraction methods
Layer 2: @no-comply/meta               — NoComply entity type definitions (types only)
Layer 3: @no-comply/meta-extract       — Concrete extractor implementations (THIS PACKAGE)
```

---

## Dependency Flow

```
@purrception/primitives (types only)
        ↑
@purrception/source-fs ──────────→ @purrception/lang-ts-extract
        ↑                              ↑
        └───────────┬──────────────────┘
                    │
            @no-comply/meta (types only)
                    ↑
            @no-comply/meta-extract   (THIS PACKAGE)
```

Dependency flow is strictly **downward** — `meta-extract` depends on all four upstream packages, and nothing depends on `meta-extract`. All arrows point toward leaf packages consuming foundational types and infrastructure.

No circular dependencies.

---

## Module Boundaries

```
src/
├── index.ts                        — barrel
├── entities/                       — 7 entity extractors, each with private/ subdir
│   ├── Component/Context/Controller/Mixin/Module/Provider/Service/
│   │   ├── index.ts                — re-exports factory
│   │   ├── create*EntityExtractor.ts  — factory function
│   │   └── private/
│   │       ├── entityExtractor.ts  — extraction logic (@purrception/lang-ts-extract)
│   │       ├── entityMatcher.ts    — regex directory path matcher
│   │       └── fileResolver.ts     — file path resolution
│   └── types.ts                    — shared NoComply entity types
├── heuristics/                     — thin wrappers (resolveEntityFiles, resolveEntityPartial)
└── utils/helpers/                  — file finder utilities (7 functions)
```

---

## External Dependencies

| Package                        | Version | Role                                      |
| ------------------------------ | ------- | ----------------------------------------- |
| `@no-comply/meta`              | 0.0.11  | Entity type definitions                   |
| `@purrception/primitives`      | 0.0.11  | Base entity types                         |
| `@purrception/lang-ts-extract` | 0.0.11  | TS AST parsing and extraction             |
| `@purrception/source-fs`       | 0.0.11  | Filesystem traversal, extractor framework |

## Peer Dependencies

None.
