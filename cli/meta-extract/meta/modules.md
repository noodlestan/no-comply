# Modules — `@no-comply/meta-extract`

**Date:** 2026-06-25
**By:** sub-agent

---

Non-index, non-private source files with one-line scope descriptions.

```
src/
├── entities/
│   ├── types.ts                                   — Shared types: NoComplyEntityPartial, NoComplyEntityData, NoComplyEntityDataWithTypes
│   ├── Component/
│   │   └── createComponentEntityExtractor.ts       — Factory: wires Component matcher, resolver, and extractor
│   ├── Context/
│   │   └── createContextEntityExtractor.ts         — Factory: wires Context matcher, resolver, and extractor
│   ├── Controller/
│   │   └── createControllerEntityExtractor.ts      — Factory: wires Controller matcher, resolver, and extractor
│   ├── Mixin/
│   │   └── createMixinEntityExtractor.ts           — Factory: wires Mixin matcher, resolver, and extractor
│   ├── Module/
│   │   └── createModuleEntityExtractor.ts          — Factory: wires Module matcher, resolver, and extractor (skipSubDirs: false)
│   ├── Provider/
│   │   └── createProviderEntityExtractor.ts        — Factory: wires Provider matcher, resolver, and extractor
│   └── Service/
│       └── createServiceEntityExtractor.ts         — Factory: wires Service matcher, resolver, and extractor
├── heuristics/
│   └── helpers/
│       ├── resolveEntityFiles.ts                   — Thin wrapper: invokes EntityFileResolver callback
│       └── resolveEntityPartial.ts                 — Thin wrapper: invokes EntityMetaMatcher callback
└── utils/
    └── helpers/
        ├── findComponentFile.ts                    — Finds first *.tsx file in a directory
        ├── findFactoryFile.ts                      — Finds first file starting with "create"
        ├── findHelperFiles.ts                      — Finds files under helpers/ (excl. index, types, constants)
        ├── findHookFiles.ts                        — Finds files matching use*.ts
        ├── findIndexFile.ts                        — Finds first file starting with "index"
        ├── findProviderFile.ts                     — Finds first *.tsx file (alias for findComponentFile)
        └── findTypesFile.ts                        — Finds exact file types.ts
```

> Index files (barrelled re-exports) and `private/` directory contents are excluded above. Each entity's `private/` subdirectory contains three modules: `entityExtractor.ts` (extraction logic), `entityMatcher.ts` (directory path matching), and `fileResolver.ts` (file path resolution).
