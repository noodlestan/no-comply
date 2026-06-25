# @no-comply/standard-ui — Module Map

> Generated: 2026-06-25
> By: sub-agent

> **Legend:** `📁 private/` directories contain internal implementation not exposed via domain barrels. `📄` indicates a source file (`.ts`, `.tsx`, `.scss`, `.css`).

---

## `src/`

### `src/index.ts`

Root barrel — re-exports all 16 domain modules.

### `src/action/`

Domain: action components (Button, ToggleButton, etc.) and mixins.

```
📁 components/
  📁 Button/
    📄 Button.tsx           — Button component (renders `<button>` via Dynamic)
    📄 createButton.ts      — Button logic factory (composes ActionMixin + ButtonMixin)
    📄 types.ts             — ButtonProps, ButtonAPI
    📄 constants.ts         — BUTTON_PROPS key array
  📁 CloseButton/
    📄 CloseButton.tsx      — CloseButton (renders IconButton with X icon)
    📄 createCloseButton.ts — CloseButton logic factory
    📄 types.ts             — CloseButtonProps, CloseButtonAPI
    📄 constants.ts         — CLOSE_BUTTON_PROPS
  📁 ExpandButton/
    📄 ExpandButton.tsx     — ExpandButton (expand/collapse toggle)
    📄 createExpandButton.ts— ExpandButton logic factory
    📄 types.ts             — ExpandButtonProps, ExpandButtonAPI
    📄 constants.ts         — EXPAND_BUTTON_PROPS
  📁 IconButton/
    📄 IconButton.tsx       — IconButton (icon-only action)
    📄 createIconButton.ts  — IconButton logic factory
    📄 types.ts             — IconButtonProps, IconButtonAPI
    📄 constants.ts         — ICON_BUTTON_PROPS
  📁 ToggleButton/
    📄 ToggleButton.tsx     — ToggleButton (on/off toggle)
    📄 createToggleButton.ts— ToggleButton logic factory
    📄 types.ts             — ToggleButtonProps, ToggleButtonAPI
    📄 constants.ts         — TOGGLE_BUTTON_PROPS
📁 mixins/
  📁 Action/
    📄 createActionMixin.ts — Core action mixin (variant, intent, disabled state)
    📄 types.ts             — ActionMixinProps, ActionMixinAPI
    📄 constants.ts         — ACTION_PROPS
    📄 ActionMixin.module.scss — Action CSS module
  📁 Button/
    📄 createButtonMixin.ts — Button-specific mixin (extends Action)
    📄 types.ts             — ButtonMixinProps, ButtonMixinAPI
    📄 constants.ts         — BUTTON_MIXIN_PROPS
    📄 ButtonMixin.module.scss — Button mixin CSS module
  📁 IconButton/
    📄 createIconButtonMixin.ts — IconButton mixin
    📄 types.ts             — IconButtonMixinProps, IconButtonMixinAPI
    📄 constants.ts         — ICON_BUTTON_PROPS
    📄 IconButtonMixin.module.scss — IconButton mixin CSS module
  📁 SizedAction/
    📄 createSizedActionMixin.ts — Sized action mixin (size prop)
    📄 types.ts             — SizedActionMixinProps, SizedActionMixinAPI
    📄 constants.ts         — SIZED_ACTION_PROPS
    📄 SizedActionMixin.module.scss — SizedAction mixin CSS module
📄 types.ts                 — Domain-level types (ActionVariant, ActionIntent)
```

### `src/content/`

Domain: content display components (Callout, Canvas, DataItem, DataValue).

```
📁 components/
  📁 Callout/
    📄 Callout.tsx          — Callout (emphasized content block)
    📄 createCallout.ts     — Callout logic factory
    📄 types.ts             — CalloutProps, CalloutAPI
    📄 constants.ts         — CALLOUT_PROPS
    📄 Callout.module.scss  — Callout CSS module
  📁 Canvas/
    📄 Canvas.tsx           — Canvas (layout canvas area)
    📄 createCanvas.ts      — Canvas logic factory
    📄 types.ts             — CanvasProps, CanvasAPI
    📄 constants.ts         — CANVAS_PROPS
    📄 Canvas.module.scss   — Canvas CSS module
  📁 DataItem/
    📄 DataItem.tsx         — DataItem (key-value label)
    📄 createDataItem.ts    — DataItem logic factory
    📄 types.ts             — DataItemProps, DataItemAPI
    📄 constants.ts         — DATA_ITEM_PROPS
    📄 DataItem.module.scss — DataItem CSS module
  📁 DataValue/
    📄 DataValue.tsx        — DataValue (value part of key-value pair)
    📄 createDataValue.ts   — DataValue logic factory
    📄 types.ts             — DataValueProps, DataValueAPI
    📄 constants.ts         — DATA_VALUE_PROPS
    📄 DataValue.module.scss— DataValue CSS module
📁 mixins/
  📁 ContentColor/
    📄 createContentColorMixin.ts — Content color mixin
    📄 types.ts             — ContentColorMixinProps
    📄 constants.ts         — CONTENT_COLOR_PROPS
```

### `src/dialog/`

Domain: dialog component.

```
📁 components/
  📁 ModalDialog/
    📄 ModalDialog.tsx      — ModalDialog (modal overlay with focus trap)
    📄 createModalDialog.ts — ModalDialog logic factory
    📄 types.ts             — ModalDialogProps, ModalDialogAPI
    📄 constants.ts         — MODAL_DIALOG_PROPS
    📄 ModalDialog.module.scss — ModalDialog CSS module
```

### `src/feedback/`

Domain: feedback/toast component.

```
📁 components/
  📁 ToastMessage/
    📄 ToastMessage.tsx      — ToastMessage (notification toast)
    📄 createToastMessage.ts — ToastMessage logic factory
    📄 types.ts              — ToastMessageProps, ToastMessageAPI
    📄 constants.ts          — TOAST_MESSAGE_PROPS
    📄 ToastMessage.module.scss — ToastMessage CSS module
```

### `src/focus/`

Domain: focus ring controller and mixins.

```
📁 controllers/
  📁 FocusRing/
    📄 createFocusRing.ts   — FocusRing imperative controller (.focus(), .blur())
    📄 types.ts             — FocusRingController, FocusRingOptions
📁 mixins/
  📁 FocusRing/
    📄 createFocusRingMixin.ts — Focus ring visual mixin
    📄 types.ts             — FocusRingMixinProps, FocusRingMixinAPI
    📄 constants.ts         — FOCUS_RING_PROPS
    📄 FocusRingMixin.module.scss — FocusRing CSS module
  📁 FocusRingOffset/
    📄 createFocusRingOffsetMixin.ts — Focus ring offset variant
    📄 types.ts             — FocusRingOffsetMixinProps
    📄 constants.ts         — FOCUS_RING_OFFSET_PROPS
    📄 FocusRingOffsetMixin.module.scss — FocusRingOffset CSS module
```

### `src/form/`

Domain: form components (Field, Fieldset, Form, etc.).

```
📁 components/
  📁 Field/
    📄 Field.tsx            — Field (single form field wrapper)
    📄 createField.ts       — Field logic factory
    📄 types.ts             — FieldProps, FieldAPI
    📄 constants.ts         — FIELD_PROPS
    📄 Field.module.scss    — Field CSS module
  📁 FieldLabel/
    📄 FieldLabel.tsx       — FieldLabel (label for a form field)
    📄 createFieldLabel.ts  — FieldLabel logic factory
    📄 types.ts             — FieldLabelProps, FieldLabelAPI
    📄 constants.ts         — FIELD_LABEL_PROPS
    📄 FieldLabel.module.scss — FieldLabel CSS module
  📁 Fieldset/
    📄 Fieldset.tsx         — Fieldset (grouped fields)
    📄 createFieldset.ts    — Fieldset logic factory
    📄 types.ts             — FieldsetProps, FieldsetAPI
    📄 constants.ts         — FIELDSET_PROPS
    📄 Fieldset.module.scss — Fieldset CSS module
  📁 FieldsetLabel/
    📄 FieldsetLabel.tsx    — FieldsetLabel (label for a fieldset)
    📄 createFieldsetLabel.ts — FieldsetLabel logic factory
    📄 types.ts             — FieldsetLabelProps
    📄 constants.ts         — FIELDSET_LABEL_PROPS
  📁 Form/
    📄 Form.tsx             — Form (form container with submit handling)
    📄 createForm.ts        — Form logic factory
    📄 types.ts             — FormProps, FormAPI
    📄 constants.ts         — FORM_PROPS
    📄 Form.module.scss     — Form CSS module
```

### `src/icon/`

Domain: icon component (lucide-solid wrapper).

```
📁 components/
  📁 Icon/
    📄 Icon.tsx             — Icon (renders lucide-solid icon, configurable size)
    📄 createIcon.ts        — Icon logic factory
    📄 types.ts             — IconProps, IconAPI
    📄 constants.ts         — ICON_PROPS
    📄 Icon.module.scss     — Icon CSS module
```

### `src/input/`

Domain: input components (Checkbox, Select, TextInput, SegmentedButton, etc.).

```
📁 components/
  📁 Checkbox/
    📄 Checkbox.tsx         — Checkbox input
    📄 createCheckbox.ts    — Checkbox logic factory
    📄 types.ts             — CheckboxProps, CheckboxAPI
    📄 constants.ts         — CHECKBOX_PROPS
    📄 Checkbox.module.scss — Checkbox CSS module
  📁 NumberInput/
    📄 NumberInput.tsx      — Numeric input
    📄 createNumberInput.ts — NumberInput logic factory
    📄 types.ts             — NumberInputProps, NumberInputAPI
    📄 constants.ts         — NUMBER_INPUT_PROPS
    📄 NumberInput.module.scss — NumberInput CSS module
  📁 RangeInput/
    📄 RangeInput.tsx       — Range slider input
    📄 createRangeInput.ts  — RangeInput logic factory
    📄 types.ts             — RangeInputProps, RangeInputAPI
    📄 constants.ts         — RANGE_INPUT_PROPS
    📄 RangeInput.module.scss — RangeInput CSS module
  📁 SegmentedButton/
    📄 SegmentedButton.tsx  — SegmentedButton (segmented control group)
    📄 createSegmentedButton.ts — SegmentedButton logic factory
    📄 types.ts             — SegmentedButtonProps, SegmentedButtonAPI
    📄 constants.ts         — SEGMENTED_BUTTON_PROPS
    📄 SegmentedButton.module.scss — SegmentedButton CSS module
  📁 SegmentedButtonItem/
    📄 SegmentedButtonItem.tsx — SegmentedButtonItem (individual segment)
    📄 createSegmentedButtonItem.ts — SegmentedButtonItem logic factory
    📄 types.ts             — SegmentedButtonItemProps
    📄 constants.ts         — SEGMENTED_BUTTON_ITEM_PROPS
  📁 Select/
    📄 Select.tsx           — Select dropdown
    📄 createSelect.ts      — Select logic factory
    📄 types.ts             — SelectProps, SelectAPI
    📄 constants.ts         — SELECT_PROPS
    📄 Select.module.scss   — Select CSS module
  📁 TextInput/
    📄 TextInput.tsx         — Text input
    📄 createTextInput.ts    — TextInput logic factory
    📄 types.ts             — TextInputProps, TextInputAPI
    📄 constants.ts         — TEXT_INPUT_PROPS
    📄 TextInput.module.scss — TextInput CSS module
📁 contexts/
  📁 SegmentedButton/
    📄 createSegmentedButtonContext.ts — SegmentedButton context creation
    📄 types.ts                        — Context types
📁 mixins/
  📁 SegmentedButton/
    📄 createSegmentedButtonMixin.ts — SegmentedButton mixin
    📄 types.ts                      — SegmentedButtonMixinProps
    📄 constants.ts                  — SEGMENTED_BUTTON_PROPS
    📄 SegmentedButtonMixin.module.scss — SegmentedButton mixin CSS module
  📁 SegmentedButtonItem/
    📄 createSegmentedButtonItemMixin.ts — SegmentedButtonItem mixin
    📄 types.ts                          — SegmentedButtonItemMixinProps
    📄 constants.ts                      — SEGMENTED_BUTTON_ITEM_PROPS
📁 providers/
  📁 SegmentedButton/
    📄 createSegmentedButtonProvider.ts — SegmentedButton context provider
    📄 types.ts                        — Provider types
```

### `src/layout/`

Domain: layout components (Flex, Grid, Divider, Layout, Scrollable).

```
📁 components/
  📁 Divider/
    📄 Divider.tsx          — Divider (horizontal/vertical separator)
    📄 createDivider.ts     — Divider logic factory
    📄 types.ts             — DividerProps, DividerAPI
    📄 constants.ts         — DIVIDER_PROPS
    📄 Divider.module.scss  — Divider CSS module
  📁 Flex/
    📄 Flex.tsx             — Flex (flexbox container)
    📄 createFlex.ts        — Flex logic factory
    📄 types.ts             — FlexProps, FlexAPI
    📄 constants.ts         — FLEX_PROPS
    📄 Flex.module.scss     — Flex CSS module
  📁 Grid/
    📄 Grid.tsx             — Grid (CSS grid container)
    📄 createGrid.ts        — Grid logic factory
    📄 types.ts             — GridProps, GridAPI
    📄 constants.ts         — GRID_PROPS
    📄 Grid.module.scss     — Grid CSS module
  📁 Layout/
    📄 Layout.tsx           — Layout (page layout container)
    📄 createLayout.ts      — Layout logic factory
    📄 types.ts             — LayoutProps, LayoutAPI
    📄 constants.ts         — LAYOUT_PROPS
    📄 Layout.module.scss   — Layout CSS module
  📁 Scrollable/
    📄 Scrollable.tsx       — Scrollable (scrollable container)
    📄 createScrollable.ts  — Scrollable logic factory
    📄 types.ts             — ScrollableProps
    📄 constants.ts         — SCROLLABLE_PROPS
    📄 Scrollable.module.scss — Scrollable CSS module
📁 mixins/
  📁 Divider/
    📄 createDividerMixin.ts — Divider mixin (variant, length)
    📄 types.ts              — DividerMixinProps, DividerMixinAPI
    📄 constants.ts          — DIVIDER_PROPS
    📄 DividerMixin.module.scss — Divider mixin CSS module
  📁 Flex/
    📄 createFlexMixin.ts    — Flex mixin (direction, wrap, align, gap)
    📄 types.ts              — FlexMixinProps, FlexMixinAPI
    📄 constants.ts          — FLEX_PROPS
    📄 FlexMixin.module.scss — Flex mixin CSS module
  📁 Grid/
    📄 createGridMixin.ts    — Grid mixin (columns, rows, gap)
    📄 types.ts              — GridMixinProps, GridMixinAPI
    📄 constants.ts          — GRID_PROPS
    📄 GridMixin.module.scss — Grid mixin CSS module
  📁 Layout/
    📄 createLayoutMixin.ts  — Layout mixin (sizing, padding)
    📄 types.ts              — LayoutMixinProps, LayoutMixinAPI
    📄 constants.ts          — LAYOUT_PROPS
    📄 LayoutMixin.module.scss — Layout mixin CSS module
📄 types.ts                  — Domain-level layout types (DividerVariant, DividerLength)
```

### `src/menu/`

Domain: menu components (Menu, MenuItemAction, MenuItemGroup, MenuItemSubMenu).

```
📁 components/
  📁 Menu/
    📄 Menu.tsx             — Menu (menu container)
    📄 createMenu.ts        — Menu logic factory
    📄 types.ts             — MenuProps, MenuAPI
    📄 constants.ts         — MENU_PROPS
    📄 Menu.module.scss     — Menu CSS module
  📁 MenuItemAction/
    📄 MenuItemAction.tsx   — Menu item action
    📄 createMenuItemAction.ts — MenuItemAction logic factory
    📄 types.ts             — MenuItemActionProps, MenuItemActionAPI
    📄 constants.ts         — MENU_ITEM_ACTION_PROPS
    📄 MenuItemAction.module.scss — MenuItemAction CSS module
  📁 MenuItemGroup/
    📄 MenuItemGroup.tsx    — Menu item group
    📄 createMenuItemGroup.ts — MenuItemGroup logic factory
    📄 types.ts             — MenuItemGroupProps, MenuItemGroupAPI
    📄 constants.ts         — MENU_ITEM_GROUP_PROPS
    📄 MenuItemGroup.module.scss — MenuItemGroup CSS module
  📁 MenuItemSubMenu/
    📄 MenuItemSubMenu.tsx  — Sub-menu item
    📄 createMenuItemSubMenu.ts — MenuItemSubMenu logic factory
    📄 types.ts             — MenuItemSubMenuProps
    📄 constants.ts         — MENU_ITEM_SUB_MENU_PROPS
    📄 MenuItemSubMenu.module.scss — MenuItemSubMenu CSS module
📁 mixins/
  📁 Menu/
    📄 createMenuMixin.ts   — Menu mixin (orientation, density)
    📄 types.ts             — MenuMixinProps, MenuMixinAPI
    📄 constants.ts         — MENU_PROPS
    📄 MenuMixin.module.scss — Menu mixin CSS module
  📁 MenuItem/
    📄 createMenuItemMixin.ts — Menu item mixin
    📄 types.ts               — MenuItemMixinProps, MenuItemMixinAPI
    📄 constants.ts           — MENU_ITEM_PROPS
    📄 MenuItemMixin.module.scss — MenuItem mixin CSS module
  📁 MenuItemGroup/
    📄 createMenuItemGroupMixin.ts — Menu item group mixin
    📄 types.ts                    — MenuItemGroupMixinProps
    📄 constants.ts                — MENU_ITEM_GROUP_PROPS
    📄 MenuItemGroupMixin.module.scss — MenuItemGroup mixin CSS module
📁 private/ (not exported)
  📁 controllers/
    📄 createBaseMenuItem.ts — Base menu item controller
    📄 types.ts              — Internal controller types
```

### `src/navigation/`

Domain: navigation components (Link, NavLink, SkipLink).

```
📁 components/
  📁 Link/
    📄 Link.tsx             — Link (anchor element)
    📄 createLink.ts        — Link logic factory
    📄 types.ts             — LinkProps, LinkAPI
    📄 constants.ts         — LINK_PROPS
    📄 Link.module.scss     — Link CSS module
  📁 NavLink/
    📄 NavLink.tsx          — NavLink (navigation link with active state)
    📄 createNavLink.ts     — NavLink logic factory
    📄 types.ts             — NavLinkProps, NavLinkAPI
    📄 constants.ts         — NAV_LINK_PROPS
    📄 NavLink.module.scss  — NavLink CSS module
  📁 SkipLink/
    📄 SkipLink.tsx         — SkipLink (keyboard skip-to-content)
    📄 createSkipLink.ts    — SkipLink logic factory
    📄 types.ts             — SkipLinkProps, SkipLinkAPI
    📄 constants.ts         — SKIP_LINK_PROPS
    📄 SkipLink.module.scss — SkipLink CSS module
📁 mixins/
  📁 Link/
    📄 createLinkMixin.ts   — Link mixin
    📄 types.ts             — LinkMixinProps, LinkMixinAPI
    📄 constants.ts         — LINK_PROPS
    📄 LinkMixin.module.scss — Link mixin CSS module
  📁 NavLink/
    📄 createNavLinkMixin.ts — NavLink mixin (active state)
    📄 types.ts              — NavLinkMixinProps, NavLinkMixinAPI
    📄 constants.ts          — NAV_LINK_PROPS
    📄 NavLinkMixin.module.scss — NavLink mixin CSS module
  📁 SkipLink/
    📄 createSkipLinkMixin.ts — SkipLink mixin
    📄 types.ts               — SkipLinkMixinProps, SkipLinkMixinAPI
    📄 constants.ts           — SKIP_LINK_PROPS
    📄 SkipLinkMixin.module.scss — SkipLink mixin CSS module
```

### `src/organisms/`

Domain: organism components (composite).

```
📄 TreeListItemDetails.tsx  — Tree list item details component
📄 types.ts                 — TreeListItemDetails props/types
📄 TreeListItemDetails.module.scss — CSS module
```

### `src/popover/`

Domain: popover components.

```
📁 components/
  📁 AnchoredPopover/
    📄 AnchoredPopover.tsx  — AnchoredPopover (positioned relative to anchor)
    📄 createAnchoredPopover.ts — AnchoredPopover logic factory
    📄 types.ts             — AnchoredPopoverProps, AnchoredPopoverAPI
    📄 constants.ts         — ANCHORED_POPOVER_PROPS
    📄 AnchoredPopover.module.scss — AnchoredPopover CSS module
  📁 Popover/
    📄 Popover.tsx          — Popover (floating overlay)
    📄 createPopover.ts     — Popover logic factory
    📄 types.ts             — PopoverProps, PopoverAPI
    📄 constants.ts         — POPOVER_PROPS
    📄 Popover.module.scss  — Popover CSS module
```

### `src/size/`

Domain: size types only.

```
📄 types.ts                 — ContentSize, SizeScale type definitions
```

### `src/surface/`

Domain: surface component and mixin.

```
📁 components/
  📁 Surface/
    📄 Surface.tsx          — Surface (themed container)
    📄 createSurface.ts     — Surface logic factory
    📄 types.ts             — SurfaceProps, SurfaceAPI
    📄 constants.ts         — SURFACE_PROPS
    📄 Surface.module.scss  — Surface CSS module
📁 mixins/
  📁 Surface/
    📄 createSurfaceMixin.ts — Surface mixin (variant, elevation)
    📄 types.ts              — SurfaceMixinProps, SurfaceMixinAPI
    📄 constants.ts          — SURFACE_PROPS
    📄 SurfaceMixin.module.scss — Surface mixin CSS module
```

### `src/theme/`

Domain: theming system — provider, styles, composable utilities.

```
📁 composable-ui/
  📄 responsive.scss        — Responsive SCSS mixins
  📄 responsive.ts          — Responsive breakpoint utilities
  📄 variants.scss          — Variant SCSS mixins
📁 constants/
  📄 settings.ts            — Theme settings constants
📁 mixins/
  📄 color.scss             — Color SCSS mixin
📁 providers/
  📄 ThemeStandard.tsx      — ThemeStandard provider component
📁 styles/
  📄 index.css              — Theme styles entry
  📄 index.scss             — Theme SCSS entry
  📄 layers.css             — CSS layers declaration (reset, composables, theme, lib)
  📄 reset.css              — CSS reset
  📁 foundations/
    📄 border.css           — Border foundation tokens
    📄 color.scss           — Color foundation tokens
    📄 elevation.css        — Elevation tokens
    📄 motion-library.css   — Motion library tokens
    📄 motion.css           — Motion tokens
    📄 opacity.css          — Opacity tokens
    📄 outline.scss         — Outline tokens
    📄 palettes.css         — Color palettes
    📄 radius.css           — Border radius tokens
    📄 scrollbars.scss      — Scrollbar styles
    📄 shadow.css           — Shadow tokens
    📄 space.css            — Spacing tokens
    📄 typography.css       — Typography tokens
  📁 functions/
    📄 colors.css           — Color function helpers
    📄 palettes.css         — Palette function helpers
  📁 mode/
    📄 color.scss           — Mode-aware color definitions
    📄 palettes.css         — Mode-aware palettes
    📄 surfaces.css         — Mode-aware surface colors
  📁 patterns/
    📄 actions.css          — Action pattern styles
    📄 cards.css            — Card pattern styles
    📄 data.css             — Data pattern styles
    📄 dividers.scss        — Divider pattern styles
    📄 forms.css            — Form pattern styles
    📄 links.css            — Link pattern styles
    📄 layout.css           — Layout pattern styles
    📄 menus.css            - Menu pattern styles
    📄 pills.css            — Pill pattern styles
  📁 surfaces/
    📄 surfaces.scss        — Surface pattern styles
📄 types.ts                 — Theme types (SurfaceVariant, etc.)
📁 private/ (not exported)
  📁 constants/
    📄 settings.ts          — Private theme settings
  📁 contexts/
    📄 modes.ts             — Dark/light mode context
    📄 surfaces.ts          — Surface variant context
    📁 theme/
      📄 standard.ts        — Standard theme context implementation
      📁 functions/         — Theme context helper functions
```

### `src/typography/`

Domain: typography components (Text, Display, Label, ActionLabel, etc.).

```
📁 components/
  📁 ActionLabel/
    📄 ActionLabel.tsx       — ActionLabel (small uppercase label)
    📄 createActionLabel.ts  — ActionLabel logic factory
    📄 types.ts              — ActionLabelProps, ActionLabelAPI
    📄 constants.ts          — ACTION_LABEL_PROPS
    📄 ActionLabel.module.scss — ActionLabel CSS module
  📁 ActionLabelAligned/
    📄 ActionLabelAligned.tsx — ActionLabelAligned (aligned variant)
    📄 createActionLabelAligned.ts — ActionLabelAligned logic factory
    📄 types.ts              — ActionLabelAlignedProps
    📄 constants.ts          — ACTION_LABEL_ALIGNED_PROPS
  📁 AlignFirstLine/
    📄 AlignFirstLine.tsx    — AlignFirstLine (first-line alignment wrapper)
    📄 createAlignFirstLine.ts — AlignFirstLine logic factory
    📄 types.ts              — AlignFirstLineProps
    📄 constants.ts          — ALIGN_FIRST_LINE_PROPS
  📁 Display/
    📄 Display.tsx           — Display (large heading)
    📄 createDisplay.ts      — Display logic factory
    📄 types.ts              — DisplayProps, DisplayAPI
    📄 constants.ts          — DISPLAY_PROPS
    📄 Display.module.scss   — Display CSS module
  📁 DisplayAligned/
    📄 DisplayAligned.tsx    — DisplayAligned (aligned variant)
    📄 createDisplayAligned.ts — DisplayAligned logic factory
    📄 types.ts              — DisplayAlignedProps
    📄 constants.ts          — DISPLAY_ALIGNED_PROPS
  📁 Label/
    📄 Label.tsx             — Label (standard label)
    📄 createLabel.ts        — Label logic factory
    📄 types.ts              — LabelProps, LabelAPI
    📄 constants.ts          — LABEL_PROPS
    📄 Label.module.scss     — Label CSS module
  📁 LabelAligned/
    📄 LabelAligned.tsx      — LabelAligned (aligned variant)
    📄 createLabelAligned.ts — LabelAligned logic factory
    📄 types.ts              — LabelAlignedProps
    📄 constants.ts          — LABEL_ALIGNED_PROPS
  📁 Text/
    📄 Text.tsx              — Text (body text)
    📄 createText.ts         — Text logic factory
    📄 types.ts              — TextProps, TextAPI
    📄 constants.ts          — TEXT_PROPS
    📄 Text.module.scss      — Text CSS module
  📁 TextAligned/
    📄 TextAligned.tsx       — TextAligned (aligned variant)
    📄 createTextAligned.ts  — TextAligned logic factory
    📄 types.ts              — TextAlignedProps
    📄 constants.ts          — TEXT_ALIGNED_PROPS
📁 mixins/
  📁 ActionLabel/
    📄 createActionLabelMixin.ts — ActionLabel mixin
    📄 types.ts                  — ActionLabelMixinProps, ActionLabelMixinAPI
    📄 constants.ts              — ACTION_LABEL_PROPS
    📄 ActionLabelMixin.module.scss — ActionLabel mixin CSS module
  📁 AlignFirstLine/
    📄 createAlignFirstLineMixin.ts — AlignFirstLine mixin
    📄 types.ts                    — AlignFirstLineMixinProps
    📄 constants.ts                — ALIGN_FIRST_LINE_PROPS
  📁 ComposableType/
    📄 createComposableTypeMixin.ts — ComposableType base mixin
    📄 types.ts                     — ComposableTypeMixinProps
    📄 constants.ts                 — COMPOSABLE_TYPE_PROPS
    📄 ComposableTypeMixin.module.scss — ComposableType mixin CSS module
  📁 Display/
    📄 createDisplayMixin.ts  — Display mixin (level, variant)
    📄 types.ts               — DisplayMixinProps, DisplayMixinAPI
    📄 constants.ts           — DISPLAY_PROPS
    📄 DisplayMixin.module.scss — Display mixin CSS module
  📁 Label/
    📄 createLabelMixin.ts    — Label mixin
    📄 types.ts               — LabelMixinProps, LabelMixinAPI
    📄 constants.ts           — LABEL_PROPS
    📄 LabelMixin.module.scss — Label mixin CSS module
  📁 Text/
    📄 createTextMixin.ts     — Text mixin (size, color)
    📄 types.ts               — TextMixinProps, TextMixinAPI
    📄 constants.ts           — TEXT_PROPS
    📄 TextMixin.module.scss  — Text mixin CSS module
📁 providers/
  📁 AlignFirstLineContext/
    📄 createAlignFirstLineContext.ts — AlignFirstLine context
    📄 types.ts                      — Context types
📄 types.ts                 — Domain-level typography types (DisplayLevel, DisplayVariant)
```

---

## `scss/`

SCSS globals consumed by downstream bundlers.

```
📄 globals.scss              — Global SCSS entry (responsive + variant mixins)
📁 mixins/
  📄 color.scss              — Color SCSS mixin
```

---

## `scripts/`

```
📄 extract.ts                — Meta-extraction pipeline (uses @no-comply/meta-extract)
```

---

## `theme/` (public SCSS at package root)

The `scss/` directory is published as part of the package for downstream consumption.
