# Health Check

- updated: 2026-06-25
- by: sub-agent

## Security

## Performance

**#tree-shaking** `@solid-primitives/resize-observer` is commented out in `vite.config.mts` `external` list but still listed as a dependency — it gets bundled unnecessarily or the dependency is stale

## Accessibility

## Architecture

**#cross-module** `popover/controllers/Popover/createPopover.ts` imports `FocusOut` from `../../../focus` via relative path rather than through the module index — brittle internal cross-module dependency

**#inconsistency** Some modules export `types.ts` from their module-level index (layout, responsive, placement) while most don't — inconsistent type export convention

**#boundaries** `menu/private/providers/` duplicates provider exports for internal consumption while `menu/providers/` holds public variants — creates a public/private provider split that may confuse consumers

**#pattern** `organisms/TreeList/primitives/` introduces a `createTreeNode` primitive entity type not seen in any other module — additional entity type breaks the controller/mixin/component triad convention

## Conventions

**#glob** The `@index` barrel glob pattern excludes `parts/` and `functions/` directories, but no `parts/` directories exist in the codebase — dead reference in the barrel convention

## Testing

**#no-tests** No `*.spec.ts` or `*.spec.tsx` files found in the source tree — testing strategy is unclear (`.npmignore` excludes spec files, suggesting tests may exist elsewhere or are not yet written)

## DevX

## Documentation

**#meta** The `@no-comply/solid-contexts` `createExposable`/`exposeAPI`/`compose` system is the core extensibility mechanism but its implementation lives in a sibling package without local documentation — developers must cross-reference to understand the abstraction

**#scss** How SCSS Modules are resolved at build time is undocumented — the ESM build target and CSS Module compilation require Vite's CSS post-processing, which may not be obvious to consumers

## Dependencies

**#external** `@solid-primitives/resize-observer` is listed as a runtime dependency but may be unused (commented out in vite external config) — should be verified and either removed or uncommented

## Issues

## CI/CD

**#ci** The `ci` script runs `clean → typecheck → build → extract`, but typecheck runs before build — `tsc --noEmit` may catch errors that the build step would also catch, but the ordering is intentional (fail fast)
