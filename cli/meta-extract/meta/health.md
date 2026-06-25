# Health Check — `@no-comply/meta-extract`

- updated: 2026-06-25
- by: sub-agent

## Security

## Performance

## Accessibility

## Architecture

**#duplication** 7 near-identical entity directories — changes to extraction pipeline must be replicated across all, risking drift over time

**#inconsistency** `Provider.fileResolver` omits `types` from returned object, yet `entityExtractor` still calls `extractTypes(files.implementation)`

**#inconsistency** `Module` is structurally different (`skipSubDirs: false`, `helpers/` instead of factory file), making it an outlier in the entity system

**#unused** `resolveEntityFiles` and `resolveEntityPartial` are exported from `heuristics/` but not imported or used internally within the package

## Conventions

**#inconsistency** `findComponentFile` and `findProviderFile` are identical (`*.tsx` file finders) — copy-paste artifact

**#inconsistency** `ComponentEntityData` uses `component: string` (singular) while all other non-Module entities use `factories: string[]` (plural array)

## Testing

**#no-tests** No test files found anywhere in the package — significant gap given the complexity of AST-based extraction logic

## DevX

## Documentation

**#no-docs** Minimal JSDoc or inline comments on public API functions — consumers must read source to understand override behavior

## Dependencies

**#stale** `test:watch` script references vitest but no `vitest.config.ts` or test files exist — likely stale from monorepo template

## Issues

## CI/CD
