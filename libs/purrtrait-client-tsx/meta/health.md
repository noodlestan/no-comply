# @purrtrait/client-tsx — Health Check

- updated: 2026-06-25
- by: sub-agent

## Architecture

**#dead-code** `src/ast/parseSource.ts` is a duplicate of `src/parse/parseSource.ts` but is not exported from any barrel — likely orphaned during refactoring

**#build-config** `vite.config.mts` lists `@purrception/lang-ts` and `@purrtrait/code-layout` as `rollupOptions.external` but neither is used anywhere in `src/`

**#interface-duplication** `ICompilerAPI` types in `src/evaluate/types.ts` are deliberately duplicated from `@purrpose/client-babel` — maintained comment flags this, but cross-package drift risk remains

## Dependencies

**#unnecessary-plugin** `vite-plugin-solid` and `vite-plugin-solid-svg` are configured in `vite.config.mts` but this package has no runtime SolidJS dependency

## Testing

**#missing-tests** No test files found under `src/` — `vitest.config.mts` exists but no tests are configured

## Documentation

**#readme-mismatch** README documents `parseSource(source: string)` and `printNode(node: ts.Node)` but actual `printNode` signature is `(sourceFile: ts.SourceFile, node: ts.Node): string`

**#readme-mismatch** README `extractProps` signature lists `(input: string, sourceFile: ts.SourceFile)` but actual takes `(node: TypescriptComponentNode, sourceFile: ts.SourceFile, ignore?)`

**#missing-api-docs** `evaluateValue` and `nodes` module are demonstrated in usage examples but not surfaced in the README's formal API section
