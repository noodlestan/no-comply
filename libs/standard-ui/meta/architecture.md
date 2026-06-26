# @no-comply/standard-ui — Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

> Generated: 2026-06-26
> By: opencode

---

## Layering

```
┌──────────────────────────────────────────────┐
│         @no-comply/standard-ui                │  Presentational layer
│  Components + Mixins + Theme SCSS + CSS vars  │  (this package)
│  Depends on ↓                                 │
├──────────────────────────────────────────────┤
│  @no-comply/solid-composables                 │  Headless composables
│  (pressable, focus ring, tree, etc.)          │
├──────────────────────────────────────────────┤
│  @no-comply/solid-contexts                    │  Context system
│  (createExposable, compose, exposeAPI)        │
├──────────────────────────────────────────────┤
│  @no-comply/solid-accessibility               │  Aria patterns
│  (focus management, keyboard navigation)      │
├──────────────────────────────────────────────┤
│  @no-comply/solid-primitives                  │  Low-level utilities
│  (combineProps, createClassList,              │
│   definePropKeys, ClosedTagProps)             │
├──────────────────────────────────────────────┤
│  solid-js / lucide-solid                      │  Framework + icons
│  (peer dependencies)                          │
└──────────────────────────────────────────────┘
```

---

## Module Boundaries

Each domain (`action/`, `layout/`, `menu/`, etc.) is a self-contained directory with:

```
<domain>/
  index.ts        — barrel: re-exports components + mixins + types
  components/     — SolidJS components
  mixins/         — Composable mixin factories
  contexts/       — (optional) SolidJS contexts
  providers/      — (optional) context providers
  controllers/    — (optional) imperative controllers
  private/        — (optional) internal implementation details
```

Domains never import from other domains' `private/` directories.

---

## File/Module View

### `src/index.ts`

Root barrel — re-exports all 16 domain modules.

### `src/action/`

Domain: action components (Button, ToggleButton, etc.) and mixins.

```
components/
  Button/          — Button.tsx, createButton.ts, types.ts, constants.ts
  CloseButton/     — CloseButton.tsx, createCloseButton.ts, types.ts, constants.ts
  ExpandButton/    — ExpandButton.tsx, createExpandButton.ts, types.ts, constants.ts
  IconButton/      — IconButton.tsx, createIconButton.ts, types.ts, constants.ts
  ToggleButton/    — ToggleButton.tsx, createToggleButton.ts, types.ts, constants.ts
mixins/
  Action/          — createActionMixin.ts, types.ts, constants.ts, ActionMixin.module.scss
  Button/          — createButtonMixin.ts, types.ts, constants.ts, ButtonMixin.module.scss
  IconButton/      — createIconButtonMixin.ts, types.ts, constants.ts, IconButtonMixin.module.scss
  SizedAction/     — createSizedActionMixin.ts, types.ts, constants.ts, SizedActionMixin.module.scss
types.ts           — Domain-level types (ActionVariant, ActionIntent)
```

### `src/content/`

Domain: content display components (Callout, Canvas, DataItem, DataValue).

```
components/<Name>/ — <Name>.tsx, create<Name>.ts, types.ts, constants.ts, <Name>.module.scss
  // Callout, Canvas, DataItem, DataValue
mixins/
  ContentColor/    — createContentColorMixin.ts, types.ts, constants.ts
```

### `src/dialog/`

Domain: dialog component.

```
components/ModalDialog/ — ModalDialog.tsx, createModalDialog.ts, types.ts, constants.ts,
                          ModalDialog.module.scss
```

### `src/feedback/`

Domain: feedback/toast component.

```
components/ToastMessage/ — ToastMessage.tsx, createToastMessage.ts, types.ts, constants.ts,
                           ToastMessage.module.scss
```

### `src/focus/`

Domain: focus ring controller and mixins.

```
controllers/FocusRing/ — createFocusRing.ts, types.ts
mixins/
  FocusRing/        — createFocusRingMixin.ts, types.ts, constants.ts, FocusRingMixin.module.scss
  FocusRingOffset/  — createFocusRingOffsetMixin.ts, types.ts, constants.ts,
                      FocusRingOffsetMixin.module.scss
```

### `src/form/`

Domain: form components (Field, Fieldset, Form, etc.).

```
components/<Name>/ — <Name>.tsx, create<Name>.ts, types.ts, constants.ts, <Name>.module.scss
  // Field, FieldLabel, Fieldset, Form
  // FieldsetLabel (no .scss)
```

### `src/icon/`

Domain: icon component (lucide-solid wrapper).

```
components/Icon/ — Icon.tsx, createIcon.ts, types.ts, constants.ts, Icon.module.scss
```

### `src/input/`

Domain: input components (Checkbox, Select, TextInput, SegmentedButton, etc.).

```
components/<Name>/ — <Name>.tsx, create<Name>.ts, types.ts, constants.ts, <Name>.module.scss
  // Checkbox, NumberInput, RangeInput, SegmentedButton, SegmentedButtonItem,
  // Select, TextInput
  // SegmentedButtonItem (no .scss)
contexts/SegmentedButton/ — createSegmentedButtonContext.ts, types.ts
mixins/<Name>/ — create<Name>Mixin.ts, types.ts, constants.ts, <Name>Mixin.module.scss
  // SegmentedButton, SegmentedButtonItem
providers/SegmentedButton/ — createSegmentedButtonProvider.ts, types.ts
```

### `src/layout/`

Domain: layout components (Flex, Grid, Divider, Layout, Scrollable).

```
components/<Name>/ — <Name>.tsx, create<Name>.ts, types.ts, constants.ts, <Name>.module.scss
  // Divider, Flex, Grid, Layout, Scrollable
mixins/<Name>/ — create<Name>Mixin.ts, types.ts, constants.ts, <Name>Mixin.module.scss
  // Divider, Flex, Grid, Layout
types.ts            — Domain-level layout types (DividerVariant, DividerLength)
```

### `src/menu/`

Domain: menu components (Menu, MenuItemAction, MenuItemGroup, MenuItemSubMenu).

```
components/<Name>/ — <Name>.tsx, create<Name>.ts, types.ts, constants.ts, <Name>.module.scss
  // Menu, MenuItemAction, MenuItemGroup, MenuItemSubMenu
mixins/<Name>/ — create<Name>Mixin.ts, types.ts, constants.ts, <Name>Mixin.module.scss
  // Menu, MenuItem, MenuItemGroup
private/controllers/ — createBaseMenuItem.ts, types.ts
```

### `src/navigation/`

Domain: navigation components (Link, NavLink, SkipLink).

```
components/<Name>/ — <Name>.tsx, create<Name>.ts, types.ts, constants.ts, <Name>.module.scss
  // Link, NavLink, SkipLink
mixins/<Name>/ — create<Name>Mixin.ts, types.ts, constants.ts, <Name>Mixin.module.scss
  // Link, NavLink, SkipLink
```

### `src/organisms/`

Domain: organism components (composite).

```
TreeListItemDetails.tsx        — Tree list item details component
types.ts                       — TreeListItemDetails props/types
TreeListItemDetails.module.scss — CSS module
```

### `src/popover/`

Domain: popover components.

```
components/<Name>/ — <Name>.tsx, create<Name>.ts, types.ts, constants.ts, <Name>.module.scss
  // AnchoredPopover, Popover
```

### `src/size/`

Domain: size types only.

```
types.ts — ContentSize, SizeScale type definitions
```

### `src/surface/`

Domain: surface component and mixin.

```
components/Surface/ — Surface.tsx, createSurface.ts, types.ts, constants.ts, Surface.module.scss
mixins/Surface/     — createSurfaceMixin.ts, types.ts, constants.ts, SurfaceMixin.module.scss
```

### `src/theme/`

Domain: theming system — provider, styles, composable utilities.

```
composable-ui/     — responsive.scss, responsive.ts, variants.scss
constants/         — settings.ts
mixins/            — color.scss
providers/         — ThemeStandard.tsx
styles/
  index.css, index.scss, layers.css, reset.css
  foundations/<name>.css — border, color, elevation, motion, motion-library,
                          opacity, outline, palettes, radius, scrollbars,
                          shadow, space, typography
  functions/<name>.css  — colors, palettes
  mode/<name>.css       — color.scss, palettes, surfaces
  patterns/<name>.css   — actions, cards, data, dividers.scss, forms,
                          links, layout, menus, pills
  surfaces/             — surfaces.scss
types.ts           — Theme types (SurfaceVariant, etc.)
private/           — constants/settings.ts, contexts/{modes,surfaces}.ts,
                     contexts/theme/{standard,functions/}
```

### `src/typography/`

Domain: typography components (Text, Display, Label, ActionLabel, etc.).

```
components/<Name>/ — <Name>.tsx, create<Name>.ts, types.ts, constants.ts, <Name>.module.scss
  // ActionLabel, Display, Label, Text
  // ActionLabelAligned, AlignFirstLine, DisplayAligned, LabelAligned, TextAligned
  //   (no .scss for aligned variants)
mixins/<Name>/ — create<Name>Mixin.ts, types.ts, constants.ts, <Name>Mixin.module.scss
  // ActionLabel, Display, Label, Text
  // AlignFirstLine, ComposableType (no .scss for AlignFirstLine)
providers/AlignFirstLineContext/ — createAlignFirstLineContext.ts, types.ts
types.ts            — Domain-level typography types (DisplayLevel, DisplayVariant)
```

---

## `scss/`

SCSS globals consumed by downstream bundlers.

```
globals.scss           — Global SCSS entry (responsive + variant mixins)
mixins/color.scss      — Color SCSS mixin
```

## `scripts/`

```
extract.ts             — Meta-extraction pipeline (uses @no-comply/meta-extract)
```

---

## Extensibility Model

1. **Mixin composition** — Consumers can recombine existing mixins to create custom components without extending classes.
2. **Exposable/context system** — Components expose their API through SolidJS context, enabling parent-child coordination (e.g., `SegmentedButtonItem` communicates with `SegmentedButton`).
3. **Theme via CSS custom properties** — Consumers set CSS variables; `ThemeStandard` registers mode (dark/light) and surface variant contexts. No JS-based theme engine.
4. **Icon system agnostic** — Icons use `lucide-solid` as peer dep; the `Icon` component accepts any icon component conforming to the expected shape.
