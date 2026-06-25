# @purrception/source-fs — Modules

Generated: Thu, 25 Jun 2026
By: sub-agent

```
src/
├── types.ts                               # Core public types: EntityMetaMatcher, EntityFileResolver,
│                                          #   DirectoryExtractAPI, DirectoryExtractorOptions,
│                                          #   DirectoryExtractorFactory, DirectoryEntityProcessor,
│                                          #   EntityExtractorFiles
├── contexts/
│   ├── types.ts                           # Context type definitions: FilesystemExtractContext,
│                                          #   DirectoryExtractMeta, DirectoryExtractContext
│   ├── createDirectoryExtractContext.ts   # Factory: per-directory context with IO helpers
│   │                                      #   (hasFile, readFile, hasDir, readDir) and file cache
│   ├── createDirectoryExtractMeta.ts      # Scans a directory and produces its metadata
│   │                                      #   (path, relative, files[], dirs[])
│   ├── createEntityExtractContext.ts      # Wraps DirectoryExtractContext + partial into
│   │                                      #   EntityExtractContext for the pipeline
│   └── createFilesystemExtractContext.ts  # Factory: top-level context (rootDir, extractors,
│                                          #   defaults, meta, log)
├── extractors/
│   └── extractEntitiesFromFileSystem.ts   # Top-level orchestrator: wires context → processing
│                                          #   → result flattening
├── helpers/
│   ├── types.ts                           # Options type for defineDirectoryExtractor
│   └── defineDirectoryExtractor.ts        # DSL: creates DirectoryExtractAPI from a
│                                          #   match/resolve/extract triple
├── processors/
│   ├── processRootDir.ts                  # Entry point: process the root directory
│   ├── processPaths.ts                    # Process specific paths (not root)
│   └── private/                           # [excluded] Internal recursive walk
│       └── processDirectory.ts            #   (not exported via barrel)
└── watcher/
    ├── createDebouncedWatcher.ts          # Chokidar-based debounced file watcher
    └── splitContextsToUpdate.ts           # Splits entities into paths-to-reprocess vs
                                           #   unchanged entities
```

Excluded from map: `index.ts` barrel files (one per directory, generated via `// @index`)
