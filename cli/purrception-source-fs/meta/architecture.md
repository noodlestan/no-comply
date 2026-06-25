# @purrception/source-fs — Architecture

> This file extends [purrception architecture](../../../architecture/purrception.md).

Generated: Thu, 25 Jun 2026
By: sub-agent

## Layering

```
Layer 1 — Primitives (upstream)
    @purrception/primitives — EntityDataBase, EntityExtractResult, etc.

Layer 2 — Domain types (src/types.ts)
    EntityMetaMatcher, EntityFileResolver, DirectoryExtractAPI, etc.

Layer 3 — Context factories (src/contexts/)
    FilesystemExtractContext → DirectoryExtractContext → EntityExtractContext

Layer 4 — Processing (src/processors/)
    processRootDir → processDirectory (recursive) → per-extractor dispatch
    └── private/processDirectory — internal recursive walk (not exported)

Layer 5 — Orchestration (src/extractors/)
    extractEntitiesFromFileSystem — wires context → processing → result flattening

Layer 6 — DSL helpers (src/helpers/)
    defineDirectoryExtractor — user-facing convenience for creating extractors

Layer 7 — Watching (src/watcher/) [optional]
    createDebouncedWatcher — chokidar-based file watching for incremental updates
```

## Extensibility Model

- **Interface-based contract**: `DirectoryExtractAPI` (`skipSubDirs`, `getProcessor`) is the sole contract between the processor loop and individual extractors.
