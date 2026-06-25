# @purrception/source-fs — API Reference

Generated: Thu, 25 Jun 2026
By: sub-agent

## Entry Point

```
import { ... } from '@purrception/source-fs';
```

## Main APIs

### `extractEntitiesFromFileSystem(opts)`

Top-level orchestrator. Creates a filesystem context, walks the directory tree, runs all registered extractors, and returns a flat array of extracted entities.

```ts
extractEntitiesFromFileSystem(opts: {
  rootDir: string;
  extractors: DirectoryExtractAPI[];
  meta?: Record<string, unknown>;
}): Promise<EntityExtractResult[]>
```

### `processRootDir(ctx)`

Processes the root directory of a `FilesystemExtractContext`. Returns an array of `AnonymousEntityProcessor` functions (one per matching extractor per directory).

```ts
processRootDir(ctx: FilesystemExtractContext): Promise<AnonymousEntityProcessor[]>
```

### `processPaths(ctx, paths)`

Processes specific paths within a `FilesystemExtractContext`. Returns a flat array of `DirectoryEntityProcessor` functions for matching extractors.

```ts
processPaths(ctx: FilesystemExtractContext, paths: string[]): Promise<DirectoryEntityProcessor[]>
```

## Context Factories

### `createFilesystemExtractContext(options)`

Creates the top-level context object that threads through the entire extraction pipeline.

```ts
createFilesystemExtractContext(options: {
  rootDir: string;
  extractors: DirectoryExtractAPI[];
  defaults?: Record<string, unknown>;
  log?: (msg: string) => void;
  meta?: Record<string, unknown>;
}): FilesystemExtractContext
```

### `createDirectoryExtractContext(ctx, dirMeta)`

Creates a per-directory context with IO helpers (`hasFile`, `readFile`, `hasDir`, `readDir`) and an in-memory file cache.

```ts
createDirectoryExtractContext(
  ctx: FilesystemExtractContext,
  dirMeta: DirectoryExtractMeta,
): DirectoryExtractContext
```

### `createEntityExtractContext(context, partial)`

Wraps a `DirectoryExtractContext` and partial entity data into an `EntityExtractContext` for the extraction pipeline.

```ts
createEntityExtractContext(
  context: DirectoryExtractContext,
  partial: EntityDataBasePartial,
): EntityExtractContext<DirectoryExtractContext>
```

### `createDirectoryExtractMeta(dir, rootDir)`

Scans a directory and produces its metadata (path, relative path, files list, subdirectory list).

```ts
createDirectoryExtractMeta(
  dir: string,
  rootDir: string,
): Promise<DirectoryExtractMeta>
```

## Helpers

### `defineDirectoryExtractor(options)`

DSL for creating a `DirectoryExtractAPI` from a match/resolve/extract triple. Wires the 3-phase pipeline for a single entity type.

```ts
defineDirectoryExtractor<P, T, F>(options: {
  skipSubDirs?: boolean;
  match: (ctx: DirectoryExtractContext) => Promise<P | undefined>;
  resolve: (ctx: DirectoryExtractContext, partial: P) => Promise<F | undefined>;
  extract: (ctx: DirectoryExtractContext, partial: P, files: F) => Promise<EntityExtractResult<T>[]>;
}): DirectoryExtractAPI
```

## Watcher

### `createDebouncedWatcher(options)`

Creates a debounced chokidar filesystem watcher that collects changed paths and invokes a callback.

```ts
createDebouncedWatcher(options: {
  rootDir: string;
  debounceMs?: number;
  filter?: (filepath: string) => boolean;
  onChange: (changedPaths: string[]) => void | Promise<void>;
}): DebouncedWatcher
```

Returns `{ dispose: () => void }`.

### `splitContextsToUpdate(entities, changedPaths)`

Given existing entities and a list of changed paths, splits them into paths that need reprocessing and entities that remain unchanged.

```ts
splitContextsToUpdate(
  entities: EntityExtractResult[],
  changedPaths: string[],
): [paths: string[], others: EntityExtractResult[]]
```

## Public Types

Exported from `@purrception/source-fs`:

| Type                                 | Description                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| `EntityMetaMatcher<P>`               | Async predicate `(ctx: DirectoryExtractContext) => Promise<P \| undefined>`          |
| `EntityExtractorFiles`               | `Record<string, string \| string[]>` — mapping of file roles to paths                |
| `EntityFileResolver<P, F>`           | Async resolver `(ctx, partial) => Promise<F \| undefined>`                           |
| `DirectoryExtractorOptions<P, F, T>` | Options type for extractor configuration                                             |
| `DirectoryExtractAPI`                | Interface `{ skipSubDirs, getProcessor }` — extractor contract                       |
| `DirectoryExtractorFactory<P, F, T>` | Factory function type for creating extractors                                        |
| `DirectoryEntityProcessor<P, F, T>`  | Processor function type `(ctx, partial, files) => Promise<EntityExtractResult<T>[]>` |
| `FilesystemExtractContext`           | Top-level context (rootDir, extractors, defaults, meta, log)                         |
| `DirectoryExtractMeta`               | Directory metadata (path, relative, files[], dirs[])                                 |
| `DirectoryExtractContext`            | Per-directory context (fsContext, dirMeta, IO helpers)                               |
| `DebouncedWatcherOptions`            | Options for `createDebouncedWatcher`                                                 |
| `DebouncedWatcher`                   | Watcher handle `{ dispose }`                                                         |
