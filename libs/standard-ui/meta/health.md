# Health Check — @no-comply/standard-ui

- updated: 2026-06-25
- by: sub-agent

## Security

## Performance

**#tree-shaking** Package declares `"sideEffects": false` and is ESM-only, enabling full tree-shaking in modern bundlers — no known issues.

**#reactivity** No large reactive graphs identified. Components follow the factory pattern with minimal reactive overhead.

## Accessibility

**#keyboard** **#focus** No explicit test coverage for focus ring consistency across interactive components (Button, ToggleButton, Menu items, etc.).

**#aria** Aria patterns are delegated to `@no-comply/solid-accessibility` — no known gaps, but no accessibility audit has been performed on this package.

## Architecture

**#consistency** `TreeListItemDetails` in `organisms/` imports from `@no-comply/solid-composables` directly instead of using a local mixin like every other domain. This makes it an outlier in the composability model.

**#private** `theme/private/` contains internal contexts and constants that are tightly coupled to the `ThemeStandard` provider — refactoring theme internals may require changes across multiple private modules.

## Conventions

## Testing

**#coverage** No test files found in `src/`. The `vitest.config.mts` exists but no test runner commands are configured in `package.json` scripts — test infrastructure is present but unused.

## DevX

**#build** Entry point is raw TypeScript source (`./src/index.ts`). Consumers must use a bundler that can resolve TypeScript. No pre-compiled CommonJS or UMD output is provided.

## Documentation

**#coverage** README is minimal. Meta documentation (`api.md`, `architecture.md`, `conventions.md`, `modules.md`) is being generated as part of this session.

## Dependencies

**#peer** `lucide-solid ^0.453.0` is a peer dependency — version mismatch may cause icon rendering issues downstream.

**#internal** All `@no-comply/*` runtime dependencies are pinned to exact version `0.0.11` — safe.

## Issues

## CI/CD

**#extract** The CI pipeline (`ci` script) runs meta-extraction after build. If extraction fails, the pipeline still exits 0 — extraction errors are not surfaced.
