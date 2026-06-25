# Architecture — `@no-comply/meta-extract`

> This file extends [no-comply-demo architecture](../../../architecture/no-comply-demo.md).

**Date:** 2026-06-25
**By:** sub-agent

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
