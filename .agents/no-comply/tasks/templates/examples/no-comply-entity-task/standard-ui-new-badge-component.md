# Standard UI: Add Badge component and supporting mixins

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-entity-task-template.md`

### Task Writing Skills

- `write-no-comply-entity-task` — spec-driven entity implementation

## Summary

Add a themed Badge component (`<Badge>`) for displaying tags, labels, and status indicators in documentation pages. The work requires new supporting mixins (`SizedContent`, `ContentPalette`, `ComposeColor`), a new `color/` module in standard-ui, and removal of the replaced `ContentColorMixin`.

## Changes

### Entities

- Add `mixin:standard:sized-content` — [spec](standard-ui-new-badge-component__spec__mixin-standard-sized-content.md)
- Add `mixin:standard:content-palette` — [spec](standard-ui-new-badge-component__spec__mixin-standard-content-palette.md)
- Add `mixin:standard:compose-colors` — [spec](standard-ui-new-badge-component__spec__mixin-standard-compose-color.md)
- Add `mixin:standard:badge` — [spec](standard-ui-new-badge-component__spec__mixin-standard-badge.md)
- Add `component:standard:badge` — [spec](standard-ui-new-badge-component__spec__component-standard-badge.md)
- Refactor `Icon` to use `SizedContent` — [spec](standard-ui-new-badge-component__spec__refactor-icon.md)
- Refactor `SizedAction` to compose `SizedContent` — [spec](standard-ui-new-badge-component__spec__refactor-sized-action.md)
- Remove `mixin:standard:content-color` — [spec](standard-ui-new-badge-component__spec__remove-content-color.md)
- Remove `mixin:standard:sized-icon` — [spec](standard-ui-new-badge-component__spec__remove-sized-icon.md)

### Other Changes

- Add `module:standard-ui:color` — new module directory at `standard-ui/src/color/`
- Add `type:standard:content-scale` — type `ContentScale = 'down' | 'normal' | 'up'` added to `standard-ui/src/size/types.ts`
- Add type `ContentPaletteVariant = 'neutral' | 'color-1' | 'color-2'` added to `standard-ui/src/color/types.ts`

## Links

- `standard-ui-new-badge-component__draft.md` — original draft (superseded by this task)

## Refined

### Scope

**Core component:**

- `component:standard:badge` — renders children as a themed `<span>` with coordinated palette-based color and size.

**Supporting mixins (new):**

- `mixin:standard:sized-content` — unified size+scale mixin replacing `SizedIconMixin`. Adds a `scale` prop to offset base size tokens.
- `mixin:standard:content-palette` — palette selection mixin replacing `ContentColorMixin`. Sets `--__content-palette` only.
- `mixin:standard:compose-colors` — translates palette to coordinated fg/bg/border colors. Opt-in per target via boolean props.
- `mixin:standard:badge` — composes 4 mixins (for size, color, and typography) and adds `.Badge` structural styles.

**Removals:**

- `mixin:standard:content-color` — replaced by `ContentPaletteMixin`. Unused, safe to remove.
- `mixin:standard:sized-icon` — replaced by `SizedContentMixin` with fixed `scale: 'down'`.

**New module:**

- `standard-ui/src/color/` — houses `ContentPaletteMixin`, `ComposeColorMixin`, and the `ContentPaletteVariant` type. Mirrors the structure of `size/` module.

**New types (in existing modules):**

- `ContentScale` added to `standard-ui/src/size/types.ts`

### BREAKING CHANGES

None.

- `ContentColorMixin` is not used anywhere and is removed without replacement impact.
- `SizedIcon` is used by `Icon` component factory but will be replaced by `SizedContent`.

### Outcomes

- 1 new component (`Badge`)
- 4 new mixins (`SizedContent`, `ContentPalette`, `ComposeColors`, `Badge`)
- 2 refactored entities (`Icon`, `SizedAction`)
- 2 removed mixins (`ContentColorMixin`, `SizedIconMixin`)
- 1 new module (`color/`)
- 2 new types (`ContentScale`, `ContentPaletteVariant`)

### Not in scope

**FeedbackPaletteMixin** — follow-up task. Would be a parallel of ContentPaletteMixin for feedback contexts (Callout, ToastMessage, FeedbackText).

**Callout, ToastMessage, FeedbackText components** — legacy WIPs, separate tasks.

## Acceptance criteria

- `Badge` component renders in the standard-ui sandbox with `color`, `size`, and `alignFirstLine` props.
- Badge accepts children and renders as a `<span>` element.
- `SizedContent` mixin is independently usable and produces correct `.scale-{scale}` and `.size-{size}` classes.
- `ContentPaletteMixin` accepts `palette` prop and sets `--__content-palette` only (no direct color application).
- `ComposeColorMixin` (once refined) translates palette to coordinated fg/bg/border variables.
- `ContentColorMixin` is removed; no references remain.
- New `color/` module is wired into standard-ui barrel exports.

## Notes

### Refined

- Refactor `Icon` to use `SizedContent` — [spec](standard-ui-new-badge-component__spec__refactor-icon.md)
- Refactor `SizedAction` to compose `SizedContent` — [spec](standard-ui-new-badge-component__spec__refactor-sized-action.md)
- Remove `mixin:standard:content-color` — [spec](standard-ui-new-badge-component__spec__remove-content-color.md)
- Remove `mixin:standard:sized-icon` — [spec](standard-ui-new-badge-component__spec__remove-sized-icon.md)

### Follow ups

**Investigate:**

- Investigate if `SizedTypography` also needs a `scale` prop so Badge can downscale appropriately (most certainly does).

**Create tasks for:**

- Allow `ComposeColorMixin` to consume independent CSS variables for bg, fg, border from peers (currently it only bases colors on a single palette as set by `ContentPaletteMixin`)
- Add `FeedbackPaletteMixin` (clone of `ContentPaletteMixin` with variants defined by `FeedbackPalette`: `success`, `warning`, `error`, `neutral`).
- Add `Callout` component (legacy WIP exists)
- Add `ToastMessage` component (legacy WIP exists)
- Add `FeedbackText` component (legacy WIP exists)
