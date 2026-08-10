# Standard UI: Add Badge component and supporting mixins

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-entity-task-template.md`

### Skills required:

- `pair-programmer` — implementing multiple new mixins, a component, and module reorganization
- `write-no-comply-entity-task` — spec-driven entity implementation

## Summary

Add a themed Badge component (`<Badge>`) for displaying tags, labels, and status indicators in documentation pages. The work requires new supporting mixins (`SizedContent`, `ContentPalette`, `ComposeColor`), a new `color/` module in standard-ui, and removal of the replaced `ContentColorMixin`.

## Changes

### Entities

- Add `mixin:standard:sized-content` — [spec](specs/mixin-standard-sized-content.md)
- Add `mixin:standard:content-palette` — [spec](specs/mixin-standard-content-palette.md)
- Add `mixin:standard:compose-color` — [spec](specs/mixin-standard-compose-color.md)
- Add `mixin:standard:badge` — [spec](specs/mixin-standard-badge.md)
- Add `component:standard:badge` — [spec](specs/component-standard-badge.md) (partially refined)
- Remove `mixin:standard:content-color` — replaced by `ContentPaletteMixin`

### Other Changes

- Add `module:standard-ui:color` — new module directory at `standard-ui/src/color/`
- Add `type:standard:content-scale` — type `ContentScale = 'down' | 'normal' | 'up'` added to `standard-ui/src/size/types.ts`
- Add `type:standard:content-palette-variant` — type `ContentPaletteVariant = 'neutral' | 'color-1' | 'color-2'` added to `standard-ui/src/color/types.ts`

## Links

- `attachments/refinement.md` — original draft (superseded by this task)

## Refined

### Scope

**Core component:**

- `component:standard:badge` — simple `<span>`-based badge component rendering children with coordinated color (bg, border, fg) and size/scale support. Composes `SizedContent` (with `scale: 'down'`) and `BadgeMixin` (which internally composes `ContentPaletteMixin` + `ComposeColorMixin` + `createTextMixin()`).

**Supporting mixins (new):**

- `mixin:standard:sized-content` — size+scale mixin (clone of `SizedIconMixin` with an added `scale` prop). Provides three scale modes (`down`/`normal`/`up`) that offset the base size token selection. Supports `AlignedToFirstLineMixin` composition.
- `mixin:standard:content-palette` — palette selection mixin (replaces `ContentColorMixin`). Maps `palette` prop to a CSS custom property `--__color-palette`. Hoisted to new `color/` module so both `content/` and `feedback/` can consume it.
- `mixin:standard:compose-color` — translates a palette name into concrete target colors (fg, bg, border, ...). Separated from `ContentPaletteMixin` so palette selection and color coordination remain independently composable.
- `mixin:standard:badge` — composes `ContentPaletteMixin` + `ComposeColorMixin` + `createTextMixin()` with `.Badge` structural styles and `--__compose-color` level/alpha overrides.

**Removals:**

- `mixin:standard:content-color` — fully replaced by `ContentPaletteMixin`. Not used anywhere, no migration needed. It used semantic colors unsuitable for palette-based components and was setting `color:` directly via `--__fg`, which is too restrictive. This mixin is currently not used anywhere. No migration or refactoring required. Removal is safe.

**New module:**

- `standard-ui/src/color/` — houses `ContentPaletteMixin`, `ComposeColorMixin`, and the `ContentPaletteVariant` type. Mirrors the structure of `size/` module.

**New types (in existing modules):**

- `ContentScale` added to `standard-ui/src/size/types.ts`
- `ContentPaletteVariant` added to `standard-ui/src/color/types.ts`

### BREAKING CHANGES

None. `ContentColorMixin` is not used anywhere and is removed without replacement impact.

### Outcomes

- 1 new component in `standard-ui` (`Badge`)
- 4 new mixins in `standard-ui` (`SizedContent`, `ContentPalette`, `ComposeColor`, `Badge`)
- 1 new module in `standard-ui` (`color/`)
- 2 new types (`ContentScale`, `ContentPaletteVariant`)
- 1 removed mixin (`ContentColorMixin`)

### Constraints

**Badge mixin and component specs are refined** — composition structure, props, and defaults decided. Remaining CSS module and `--__compose-color` overrides are implementation concerns.

### Not in scope

**Refactoring SizedAction to compose SizedContent** — follow-up task. SizedAction currently manages its own size logic.

**Removing SizedIcon / recomposing Icon with SizedContent** — follow-up task. SizedIcon continues to work via the new SizedContent.

**FeedbackPaletteMixin** — follow-up task. Would be a parallel of ContentPaletteMixin for feedback contexts (Callout, ToastMessage, FeedbackText).

**Callout, ToastMessage, FeedbackText components** — legacy WIPs, separate tasks.

## Acceptance criteria

- `Badge` component renders in the standard-ui sandbox with `color`, `size`, and `alignFirstLine` props.
- Badge accepts children and renders as a `<span>` element.
- `SizedContent` mixin is independently usable and produces correct `.scale-{scale}` and `.size-{size}` classes.
- `ContentPaletteMixin` accepts `palette` prop and sets `--__color-palette` only (no direct color application).
- `ComposeColorMixin` (once refined) translates palette to coordinated fg/bg/border variables.
- `ContentColorMixin` is removed; no references remain.
- New `color/` module is wired into standard-ui barrel exports.

## Notes

### Unrefined

**ComposeColorMixin** — spec refined. SCSS implementation details (token mapping, level/alpha defaults) are implementation concerns.

**Badge component** — defaults confirmed: `size` from `SizedContent` (default `'normal'`), `palette` from `ContentPaletteMixin` (default `'neutral'`). CSS module and `--__compose-color` overrides are implementation concerns for planner/coder and designer/coder respectively.

### Follow ups

- Refactor `SizedAction` to compose `SizedContent` (pick `size` prop, propagate both `size()` and `scale()`)
- Remove `SizedIcon` and recompose `Icon` with `SizedContent` (fixed `scale: 'down'`)
- Investigate if `SizedTypography` also needs a `scale` prop so Badge can downscale appropriately
- Allow `ComposeColorMixin` to consume independent CSS variables for bg, fg, border from peers (currently it only bases colors on a single palette as set by `ContentPaletteMixin`)
- Add `FeedbackPaletteMixin` (clone of `ContentPaletteMixin` with `FeedbackPalette` type)
- Add `Callout` component (legacy WIP exists)
- Add `ToastMessage` component (legacy WIP exists)
- Add `FeedbackText` component (legacy WIP exists)
