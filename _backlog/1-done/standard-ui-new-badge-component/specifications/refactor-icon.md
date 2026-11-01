# MODIFY component:standard:icon

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Why

`Icon` currently uses `SizedIconMixin` which is being replaced by `SizedContentMixin`. The refactoring migrates `Icon` to the new mixin with a fixed `scale: 'down'` to preserve existing sizing behavior.

## Responsibility

## Changes

Update `Icon` component factory to compose `SizedContentMixin` instead of `SizedIconMixin`, passing static `scale: 'down'` and exposing `size` prop.

### Props

- Remove `scale` prop from `Icon` (was not exposed, internal only)
- Keep `size` prop, now sourced from `SizedContentMixin`

### Constants

- Replace `SIZED_ICON_PROPS` with `SIZED_CONTENT_PROPS` using `omitPropKeys` to exclude `scale`

### Composition

- Replace `createSizedIconMixin(...)` with `createSizedContentMixin(...)` passing:
  - `size` bound to prop `size`
  - `scale: () => 'down'` (static)
  - `alignFirstLine` if applicable

### API

- `$root` now combines `SizedContentMixin['$root']` instead of `SizedIconMixin['$root']`
- `size()` accessor unchanged

## Acceptance criteria

- `Icon` renders with same visual size as before
- No `scale` prop exposed on `Icon`
- `SizedIconMixin` can be removed after this change
