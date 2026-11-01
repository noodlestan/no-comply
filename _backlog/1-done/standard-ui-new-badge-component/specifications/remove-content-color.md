# REMOVE mixin:standard:content-color

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Why

`ContentColorMixin` is fully replaced by `ContentPaletteMixin`. The old mixin used semantic color names unsuitable for palette-based components and set `color:` directly via `--__fg`, which is too restrictive. It is not used anywhere in the codebase.

## Changes

Remove `ContentColorMixin` and its module directory. Verify no references remain.

### Remove ContentColor

- `standard-ui/src/content/mixins/ContentColor/` (entire directory)
- Remove `ContentColorMixin` export from `standard-ui/src/content/mixins/index.ts`

### Verification

- Grep for `ContentColor` across `no-comply/` to confirm zero references
- Build standard-ui to verify no import errors

## Acceptance criteria

- `ContentColorMixin` directory and files removed
- No references to `ContentColor` remain in codebase
- Standard-ui builds without errors
