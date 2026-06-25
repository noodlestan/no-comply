# Health Check

- updated: 25/06/2026
- by: sub-agent

## Security

**#deps** No lockfile in repository — dependency versions may drift across installs

## Performance

**#traversal** All matchers run on every directory. No path-based pre-filtering; could be slow for deep trees with many extractors

**#parallelism** `Promise.all` over all processors may overwhelm file handles on large codebases

## Architecture

**#unused** `DirectoryExtractorFactory` type defined in `src/types.ts` but never used anywhere in the codebase

**#unused** `decorator` option accepted in `DirectoryExtractorOptions` but never applied in `defineDirectoryExtractor`

**#tech-debt** `console.info(isAffected)` left in `splitContextsToUpdate.ts:15` — likely debugging leftover

**#inconsistency** `extractEntitiesFromFileSystem` overrides `log` to `console.info`, but consumers using `processRootDir`/`processPaths` directly get a no-op logger

## Conventions

## Testing

**#missing** No test files exist anywhere in the source tree (`test` script is `echo none yet`)

**#missing** No vitest config or spec files present

## DevX

**#monorepo** Runtime dependencies (`chokidar`, `perfect-debounce`) are only used by the optional watcher module — heavy dependency for optional feature

## Documentation

**#meta** This health file is newly created — gaps may remain

## Dependencies

**#weight** `chokidar` (~3MB installed) and `perfect-debounce` are pulled as runtime deps but only used by the optional watcher module; could be made optional

## Issues

## CI/CD
