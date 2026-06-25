# Health Check

- updated: 2026-06-25
- by: sub-agent

## Architecture

**#stub** `controllers/loading/` directory is empty — stubbed but not implemented, yet listed in the module tree

## Conventions

**#typo** `ARIA_SEPRATOR_PROPS` in `separator/constants.ts` — missing `a` in `SEPARATOR` (should be `ARIA_SEPARATOR_PROPS`)

**#copy-paste** `PressableType` exported from `separator/types.ts` — appears misplaced (button-type constant, not separator-related)

## Testing

**#no-tests** No `*.spec.ts` or `*.test.ts` files exist anywhere in `src/`, despite vitest being fully configured in `vitest.config.mts`

## Code Quality

**#type-safety** `createAriaFeedback` casts `createAriaRegion` result with `as AriaRegionAPI<FeedbackRoleName>` — a type-escape hatch that bypasses compile-time checks

## Dependencies

**#curried-pattern** `definePropKeys<T>()([...])` uses a double-invocation (curried) pattern that is unusual for a simple key array — adds complexity for type inference of array elements

## Documentation

**#missing** No `meta/` documentation existed before this generation — all 5 meta files (`api.md`, `architecture.md`, `conventions.md`, `health.md`, `modules.md`) were newly created

## CI/CD

**#lint-step** The `ci` script runs `extract` after `build`, but the extraction requires `dist/` output — ordering is correct but fragile if build fails silently
