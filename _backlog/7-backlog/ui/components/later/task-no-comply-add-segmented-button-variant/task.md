# Draft: MODIFY SegmentedButton — expose variant prop

## Classification

`modify` / `input` / `public` — prop addition to existing `SegmentedButton`.

## Identity

Package: `@no-comply/standard-ui`
Module: `input/components/SegmentedButton`
Status: exists — add `variant` prop

## Changes

**Props:**
- ADD prop `variant?: 'base' | 'alt' | 'primary'` to `SegmentedButtonProps` and `SegmentedButtonItemProps`
- Pass variant down to child items via context or props

**Composition:**
- `SegmentedButton` passes `variant` to each `SegmentedButtonItem`
- `SegmentedButtonItem` maps variant to CSS class

**Styling:**
- ADD `.variant-base`, `.variant-alt`, `.variant-primary` classes in `SegmentedButtonMixin.module.scss`
- Each variant maps to different color tokens (fg, bg, border)

## Impact

Non-breaking — new optional prop with default `variant: 'base'` preserves current behavior.
