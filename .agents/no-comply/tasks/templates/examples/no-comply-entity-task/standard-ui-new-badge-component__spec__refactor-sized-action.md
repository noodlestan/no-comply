# MODIFY mixin:standard:sized-action

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Why

`SizedActionMixin` duplicates size logic that `SizedContentMixin` now provides. Refactoring it to compose `SizedContentMixin` eliminates duplication and enables consistent scale behavior across content and action contexts.

## Changes

Update `SizedActionMixin` to compose `SizedContentMixin` instead of managing its own size logic. Propagate both `size()` and `scale()` accessors to consumers.

### Composition

- Replace internal size logic with `createSizedContentMixin(...)` passing:
  - `size` bound to prop `size`
  - `scale` bound to prop `scale` (default: `'normal'`)
  - `alignFirstLine` if applicable

### Props

- `size` prop — unchanged, now sourced from `SizedContentMixin`
- `scale` prop — new, exposed to consumers (default: `'normal'`)

### API

- `$root` combines `SizedContentMixin['$root']`
- `size()` accessor — unchanged
- `scale()` accessor — new, from `SizedContentMixin`

### Consumer updates

All consumers of `SizedAction` that currently pass `scale` statically can stop passing it (they use the default `'normal'` scale). Consumers that don't pass `scale` require no changes.

## Acceptance criteria

- `SizedAction` renders with same visual size as before
- `scale` prop is now exposed (default `'normal'`)
- All existing consumers continue to work without changes
