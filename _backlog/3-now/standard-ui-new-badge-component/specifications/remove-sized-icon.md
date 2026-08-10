# REMOVE mixin:standard:sized-icon

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Why

`SizedIconMixin` is fully replaced by `SizedContentMixin` with fixed `scale: 'down'`. The Icon component migration to `SizedContentMixin` must be completed first (see `spec__refactor-icon.md`).

## Prerequisites

- `Icon` component must be refactored to use `SizedContentMixin` first

## Changes

Remove `SizedIconMixin` and its module directory after Icon migration is verified.

### Remove SizedIcon

- `standard-ui/src/content/mixins/SizedIcon/` (entire directory)
- Remove `SizedIconMixin` export from `standard-ui/src/content/mixins/index.ts`

### Verification

- Grep for `SizedIcon` across `no-comply/` to confirm zero references
- Build standard-ui to verify no import errors

## Acceptance criteria

- `SizedIconMixin` directory and files removed
- No references to `SizedIcon` remain in codebase
- Standard-ui builds without errors
