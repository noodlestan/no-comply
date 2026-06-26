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

## Module Tree

```
src/
├── index.ts                            — barrel
├── entities/                           — 7 entity extractors, each with private/ subdir
│   ├── types.ts                        — shared NoComply entity types
│   ├── <entity>/                       — Component, Context, Controller, Mixin, Module, Provider, Service
│   │   ├── index.ts                    — re-exports factory
│   │   ├── create*EntityExtractor.ts   — factory: wires matcher, resolver, extractor
│   │   └── private/
│   │       ├── entityExtractor.ts      — extraction logic (@purrception/lang-ts-extract)
│   │       ├── entityMatcher.ts        — regex directory path matcher
│   │       └── fileResolver.ts         — file path resolution
├── heuristics/
│   └── helpers/
│       ├── resolveEntityFiles.ts       — invokes EntityFileResolver callback
│       └── resolveEntityPartial.ts     — invokes EntityMetaMatcher callback
└── utils/helpers/
    ├── findComponentFile.ts            — finds first *.tsx file in a directory
    ├── findFactoryFile.ts              — finds first file starting with "create"
    ├── findHelperFiles.ts              — finds files under helpers/ (excl. index, types, constants)
    ├── findHookFiles.ts                — finds files matching use*.ts
    ├── findIndexFile.ts                — finds first file starting with "index"
    ├── findProviderFile.ts             — finds first *.tsx file (alias for findComponentFile)
    └── findTypesFile.ts               — finds exact file types.ts
```
