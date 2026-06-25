# @purrception/source-fs — Architecture

Generated: Thu, 25 Jun 2026
By: sub-agent

## Design Principles

1. **Explicit context over invisible state** — All dependencies are threaded through context objects. No global state, no DI container, no singletons.
2. **Function composition over class hierarchy** — Everything is functions returning plain objects. No classes, no inheritance.
3. **Separation of reading from interpretation** — The context layer handles IO (`readFile`, `hasFile`, `readDir`). Extractors handle semantic interpretation of the data.
4. **Recursive descent with extension points** — The directory walker is generic; extractors plug in at each directory node via `DirectoryExtractAPI`.
5. **Type-safe pipeline** — Generics (`<P, F, T>`) flow from matching through file resolution to extraction, preserving type information end-to-end.

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

## Dependency Flow

```
@purrception/primitives
        ↑
        │ (imports types)
        │
@purrception/source-fs
        │
        ├── contexts/  ──► processors/  ──► extractors/
        ├── helpers/   ──► (consumed by extractors/)
        └── watcher/   ──► (standalone, imports types from contexts/)
```

- **No circular dependencies** — data flows strictly top-down through the layers.
- All modules import types from lower-numbered layers only.
- `watcher/` is self-contained and optional — it is not wired into the extraction pipeline.

## Extensibility Model

- **Plugin via `DirectoryExtractAPI[]`**: consumers register extractors as an array. Each extractor independently matches, resolves files, and extracts entities from a directory.
- **3-phase pipeline per extractor**: `match` → `resolve` → `extract`. Each phase is independently implementable by consumers.
- **`skipSubDirs` flag**: extractors can opt out of recursive directory traversal.
- **Interface-based contract**: `DirectoryExtractAPI` (`skipSubDirs`, `getProcessor`) is the sole contract between the processor loop and individual extractors.

## External Dependencies

| Package                   | Purpose                                                           | Type    |
| ------------------------- | ----------------------------------------------------------------- | ------- |
| `@purrception/primitives` | Core entity types (`EntityDataBase`, `EntityExtractResult`, etc.) | runtime |
| `chokidar`                | Filesystem watching for the optional watcher module               | runtime |
| `perfect-debounce`        | Debounce utility for coalescing rapid file-change events          | runtime |
| `@no-comply/build-tools`  | Custom monorepo build tooling                                     | dev     |
| `@types/node`             | Node.js type definitions                                          | dev     |

No peer dependencies. No runtime dependency on any `@no-comply` package.

## Trade-offs

| Decision                            | Trade-off                                                                                  |
| ----------------------------------- | ------------------------------------------------------------------------------------------ |
| Recursive directory walk            | Simple and predictable, but may be slow for very deep trees. `skipSubDirs` mitigates.      |
| All matchers run on every directory | Maximizes flexibility but could be optimized with path-based pre-filtering.                |
| In-memory file cache                | Redundant reads avoided but uses memory per extraction run.                                |
| `Promise.all` for all processors    | Parallel execution benefits performance but may overwhelm file handles on large codebases. |
