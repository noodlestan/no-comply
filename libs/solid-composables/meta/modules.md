# @no-comply/solid-composables — Module Map

**Generated:** 2026-06-25  
**By:** sub-agent

```
src/
├── index.ts                          — Package entry: re-exports all 19 domain modules
│
├── action/
│   ├── index.ts                      — Re-exports controllers + mixins
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── ExpandAction/
│   │   │   ├── constants.ts          — Entity ID, prop keys for expand action
│   │   │   ├── createExpandAction.ts — Factory: toggleable expand/collapse controller
│   │   │   └── types.ts              — ExpandActionProps, ExpandActionAPI
│   │   ├── ExtendedPressable/
│   │   │   ├── constant.ts           — Entity ID, prop keys
│   │   │   ├── createExtendedPressable.ts — Factory: pressable with extended interaction model
│   │   │   └── types.ts              — ExtendedPressableProps, API types
│   │   ├── IconAction/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createIconAction.ts   — Factory: pressable icon action controller
│   │   │   └── types.ts              — IconActionProps, IconActionAPI
│   │   ├── Pressable/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createPressable.ts    — Factory: base pressable controller
│   │   │   └── types.ts              — PressableProps, PressableAPI
│   │   └── ToggleAction/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createToggleAction.ts — Factory: toggle state action controller
│   │       └── types.ts              — ToggleActionProps, ToggleActionAPI
│   └── mixins/
│       ├── index.ts                  — Re-exports entity directories
│       └── Action/
│           ├── constants.ts          — Entity ID, CSS class keys for action
│           ├── createActionMixin.ts  — Factory: action CSS class list + style mixin
│           └── types.ts              — ActionMixinProps, ActionMixinAPI
│
├── content/
│   ├── index.ts                      — Re-exports components + controllers + mixins
│   ├── components/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── VisuallyHidden/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createVisuallyHidden.ts — Factory: visually hidden controller (base)
│   │       ├── types.ts              — VisuallyHiddenProps, API types
│   │       └── VisuallyHidden.tsx    — Component: visually hides content visually, keeps for screen readers
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── ContentMessage/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createContentMessage.ts — Factory: content message (status/alert) controller
│   │       └── types.ts              — ContentMessageProps, ContentMessageAPI
│   └── mixins/
│       ├── index.ts                  — Re-exports entity directories
│       └── VisuallyHidden/
│           ├── constants.ts          — Entity ID, CSS class keys
│           ├── createVisuallyHiddenMixin.ts — Factory: visually hidden CSS class mixin
│           └── types.ts              — VisuallyHiddenMixinProps, API
│
├── error/
│   ├── index.ts                      — Re-exports components
│   └── components/
│       ├── index.ts                  — Re-exports entity directories
│       └── ErrorBoundary/
│           ├── ErrorBoundary.tsx     — Component: catches JS errors in subtree
│           ├── types.ts              — ErrorBoundaryProps, ErrorInfo
│           └── private/              — Internal error handler component
│
├── feedback/
│   ├── index.ts                      — Re-exports controllers
│   └── controllers/
│       ├── index.ts                  — Re-exports entity directories
│       └── FeedbackMessage/
│           ├── constants.ts          — Entity ID, prop keys
│           ├── createFeedbackMessage.ts — Factory: feedback/notification message controller
│           └── types.ts              — FeedbackMessageProps, FeedbackMessageAPI
│
├── focus/
│   ├── index.ts                      — Re-exports components + controllers + helpers + mixins
│   ├── components/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── FocusableBase/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createFocusableBase.ts — Factory: focusable base controller
│   │   │   ├── FocusableBase.tsx     — Component: focusable wrapper element
│   │   │   └── types.ts              — FocusableBaseProps, FocusableBaseAPI
│   │   ├── FocusTrapBase/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createFocusTrapBase.ts — Factory: focus trap base controller
│   │   │   ├── FocusTrapBase.tsx     — Component: traps focus within subtree
│   │   │   └── types.ts              — FocusTrapBaseProps, FocusTrapBaseAPI
│   │   └── FocusTrapOld/
│   │       ├── constants.ts          — Entity ID, prop keys (legacy)
│   │       ├── FocusTrap.tsx         — Component: legacy focus trap implementation
│   │       └── types.ts              — Legacy focus trap types
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── Dismissible/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createDismissible.ts  — Factory: dismiss-on-escape/press-outside controller
│   │   │   └── types.ts              — DismissibleProps, DismissibleAPI
│   │   ├── Focusable/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createFocusable.ts    — Factory: focus management controller
│   │   │   └── types.ts              — FocusableProps, FocusableAPI
│   │   ├── FocusOut/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createFocusOut.ts     — Factory: detects focus leaving element
│   │   │   └── types.ts              — FocusOutProps, FocusOutAPI
│   │   ├── FocusRing/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createFocusRing.ts    — Factory: focus ring visibility controller
│   │   │   └── types.ts              — FocusRingProps, FocusRingAPI
│   │   ├── FocusTrap/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createFocusTrap.ts    — Factory: focus trapping controller
│   │   │   └── types.ts              — FocusTrapProps, FocusTrapAPI
│   │   └── PressOutside/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createPressOutside.ts — Factory: detects click/press outside element
│   │       └── types.ts              — PressOutsideProps, PressOutsideAPI
│   ├── helpers/
│   │   ├── index.ts                  — Re-exports helper files
│   │   └── getFocusableElements.ts   — Utility: returns focusable descendants of an element
│   └── mixins/
│       ├── index.ts                  — Re-exports entity directories
│       ├── Focusable/
│       │   ├── constants.ts          — Entity ID, CSS class keys
│       │   ├── createFocusableMixin.ts — Factory: focusable CSS class mixin
│       │   └── types.ts              — FocusableMixinProps, FocusableMixinAPI
│       └── FocusRing/
│           ├── constants.ts          — Entity ID, CSS class keys
│           ├── createFocusRingMixin.ts — Factory: focus ring CSS class mixin
│           └── types.ts              — FocusRingMixinProps, FocusRingMixinAPI
│
├── form/
│   ├── index.ts                      — Re-exports controllers + mixins
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── Field/
│   │   │   ├── constants.ts          — Entity ID, prop keys for form field
│   │   │   ├── createField.ts        — Factory: form field controller
│   │   │   └── types.ts              — FieldProps, FieldAPI
│   │   ├── FieldLabel/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createFieldLabel.ts   — Factory: field label controller
│   │   │   └── types.ts              — FieldLabelProps, FieldLabelAPI
│   │   └── Form/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createForm.ts         — Factory: form container controller
│   │       └── types.ts              — FormProps, FormAPI
│   └── mixins/
│       ├── index.ts                  — Re-exports entity directories
│       ├── Field/
│       │   ├── constants.ts          — Entity ID, CSS class keys
│       │   ├── createFieldMixin.ts   — Factory: field CSS class mixin
│       │   └── types.ts              — FieldMixinProps, FieldMixinAPI
│       └── FieldLabel/
│           ├── constants.ts          — Entity ID, CSS class keys
│           ├── createFieldLabelMixin.ts — Factory: field label CSS class mixin
│           └── types.ts              — FieldLabelMixinProps, FieldLabelMixinAPI
│
├── icon/
│   ├── index.ts                      — Re-exports controllers + mixins
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── Icon/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createIcon.ts         — Factory: icon controller
│   │       └── types.ts              — IconProps, IconAPI
│   └── mixins/
│       ├── index.ts                  — Re-exports entity directories
│       └── Icon/
│           ├── constants.ts          — Entity ID, CSS class keys
│           ├── createIconMixin.ts    — Factory: icon CSS class mixin
│           └── types.ts              — IconMixinProps, IconMixinAPI
│
├── input/
│   ├── index.ts                      — Re-exports contexts + controllers + providers
│   ├── contexts/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── OptionGroup/
│   │       ├── constants.ts          — Context ID
│   │       ├── createOptionGroupContext.ts — Factory: option group context data structure
│   │       └── types.ts              — OptionGroupContext value types
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── BaseInput/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── (no create file)      — BaseInput controller structure
│   │   │   └── types.ts              — BaseInputProps, BaseInputAPI
│   │   └── OptionGroupInput/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createOptionGroupInput.ts — Factory: option group input controller
│   │       └── types.ts              — OptionGroupInputProps, API
│   └── providers/
│       ├── index.ts                  — Re-exports entity directories
│       └── OptionGroup/
│           ├── OptionGroupProvider.tsx — Provider: wraps children with option group context
│           ├── useOptionGroup.ts     — Hook: consume OptionGroup context (throws if missing)
│           └── private/              — Internal OptionGroup context
│
├── layout/
│   ├── index.ts                      — Re-exports components + constants + helpers + mixins + types
│   ├── components/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── FlexBase/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createFlexBase.ts     — Factory: flex layout base controller
│   │   │   ├── FlexBase.tsx          — Component: flex container element
│   │   │   └── types.ts              — FlexBaseProps, FlexBaseAPI
│   │   └── LayoutBase/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createLayoutBase.ts   — Factory: generic layout base controller
│   │       ├── LayoutBase.tsx        — Component: layout container element
│   │       └── types.ts              — LayoutBaseProps, LayoutBaseAPI
│   ├── constants.ts                  — Module-level layout constants
│   ├── helpers/
│   │   ├── index.ts                  — Re-exports helper files
│   │   ├── resolveGapShorthand.ts    — Utility: gap CSS shorthand resolver
│   │   └── resolvePaddingShorthand.ts — Utility: padding CSS shorthand resolver
│   ├── mixins/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── Divider/
│   │   │   ├── constants.ts          — Entity ID, CSS class keys
│   │   │   ├── createDividerMixin.ts — Factory: divider CSS class + style mixin
│   │   │   └── types.ts              — DividerMixinProps, DividerMixinAPI
│   │   ├── Flex/
│   │   │   ├── constants.ts          — Entity ID, CSS class keys
│   │   │   ├── createFlexMixin.ts    — Factory: flex CSS class + style mixin
│   │   │   └── types.ts              — FlexMixinProps, FlexMixinAPI
│   │   ├── Grid/
│   │   │   ├── constants.ts          — Entity ID, CSS class keys
│   │   │   ├── createGridMixin.ts    — Factory: grid CSS class + style mixin
│   │   │   └── types.ts              — GridMixinProps, GridMixinAPI
│   │   ├── Layout/
│   │   │   ├── constants.ts          — Entity ID, CSS class keys
│   │   │   ├── createLayoutMixin.ts  — Factory: layout CSS class mixin
│   │   │   └── types.ts              — LayoutMixinProps, LayoutMixinAPI
│   │   └── Scrollable/
│   │       ├── constants.ts          — Entity ID, CSS class keys
│   │       ├── createScrollableMixin.ts — Factory: scrollable CSS class mixin
│   │       └── types.ts              — ScrollableMixinProps, ScrollableMixinAPI
│   └── types.ts                      — Module-level shared layout types
│
├── menu/
│   ├── index.ts                      — Re-exports controllers + providers + types
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── Menu/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createMenu.ts         — Factory: menu controller
│   │   │   └── types.ts              — MenuProps, MenuAPI
│   │   ├── MenuItemAction/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createMenuItemAction.ts — Factory: menu item action controller
│   │   │   └── types.ts              — MenuItemActionProps, MenuItemActionAPI
│   │   ├── MenuItemGroup/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createMenuItemGroup.ts — Factory: menu item group controller
│   │   │   └── types.ts              — MenuItemGroupProps, MenuItemGroupAPI
│   │   └── MenuItemSubMenu/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createMenuItemSubMenu.ts — Factory: sub-menu item controller
│   │       └── types.ts              — MenuItemSubMenuProps, MenuItemSubMenuAPI
│   ├── providers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── MenuContext/
│   │   │   └── MenuContextProvider.tsx — Provider: menu context provider
│   │   └── MenuItemGroupContext/
│   │       ├── MenuItemGroupContextProvider.tsx — Provider: menu item group context provider
│   │       └── useMenuItemGroupChild.ts — Hook: consume menu item group child context
│   ├── types.ts                      — Module-level shared menu types
│   └── private/                      — Internal contexts, controllers, providers
│
├── modal/
│   ├── index.ts                      — Re-exports components + controllers + mixins
│   ├── components/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── ModalPortal/
│   │       ├── ModalPortal.tsx       — Component: portal for modal dialogs
│   │       └── types.ts              — ModalPortalProps
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── ModalDialog/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createModalDialog.ts  — Factory: modal dialog controller
│   │       └── types.ts              — ModalDialogProps, ModalDialogAPI
│   └── mixins/
│       ├── index.ts                  — Re-exports entity directories
│       └── ModalDialog/
│           ├── constants.ts          — Entity ID, CSS class keys
│           ├── createModalDialogMixin.ts — Factory: modal dialog CSS class mixin
│           └── types.ts              — ModalDialogMixinProps, ModalDialogMixinAPI
│
├── navigation/
│   ├── index.ts                      — Re-exports controllers + helpers + mixins
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── Link/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createLink.ts         — Factory: link controller
│   │   │   └── types.ts              — LinkProps, LinkAPI
│   │   └── NavLink/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createNavLink.ts      — Factory: navigation link controller (active state)
│   │       └── types.ts              — NavLinkProps, NavLinkAPI
│   ├── helpers/
│   │   ├── index.ts                  — Re-exports helper files
│   │   ├── isExternalURL.ts          — Utility: URL origin check
│   │   └── linkRelFor.ts            — Utility: resolves `rel` attribute for links
│   └── mixins/
│       ├── index.ts                  — Re-exports entity directories
│       └── Link/
│           ├── constants.ts          — Entity ID, CSS class keys
│           ├── createLinkMixin.ts    — Factory: link CSS class mixin
│           └── types.ts              — LinkMixinProps, LinkMixinAPI
│
├── organisms/
│   ├── index.ts                      — Re-exports List + TreeList sub-modules
│   │
│   ├── List/
│   │   ├── index.ts                  — Re-exports components + contexts + controllers + helpers + mixins + providers + types
│   │   ├── types.ts                  — Module-level shared list types
│   │   ├── components/
│   │   │   ├── index.ts              — Re-exports entity directories
│   │   │   ├── ListBase/
│   │   │   │   ├── constants.ts      — Entity ID, prop keys
│   │   │   │   ├── createListBase.ts — Factory: list base controller
│   │   │   │   ├── ListBase.tsx      — Component: list container element
│   │   │   │   └── types.ts          — ListBaseProps, ListBaseAPI
│   │   │   └── ListItemBase/
│   │   │       ├── constants.ts      — Entity ID, prop keys
│   │   │       ├── createListItemBase.ts — Factory: list item base controller
│   │   │       ├── ListItemBase.tsx  — Component: list item element
│   │   │       └── types.ts          — ListItemBaseProps, ListItemBaseAPI
│   │   ├── contexts/
│   │   │   ├── constants.ts          — Context ID
│   │   │   ├── createListContext.ts  — Factory: list context data structure
│   │   │   └── types.ts              — ListContext value types
│   │   ├── controllers/
│   │   │   ├── index.ts              — Re-exports entity directories
│   │   │   ├── List/
│   │   │   │   ├── constants.ts      — Entity ID, prop keys
│   │   │   │   ├── createList.ts     — Factory: list state controller
│   │   │   │   └── types.ts          — ListProps, ListAPI
│   │   │   ├── ListItem/
│   │   │   │   ├── constants.ts      — Entity ID, prop keys
│   │   │   │   ├── createListItem.ts — Factory: list item controller
│   │   │   │   └── types.ts          — ListItemProps, ListItemAPI
│   │   │   └── ListKeyboard/
│   │   │       ├── constants.ts      — Entity ID, prop keys
│   │   │       ├── createListKeyboardController.ts — Factory: keyboard navigation for lists
│   │   │       └── types.ts          — ListKeyboardProps, ListKeyboardAPI
│   │   ├── helpers/
│   │   │   ├── index.ts              — Re-exports helper files
│   │   │   └── getListSelectionUntil.ts — Utility: range selection helper
│   │   ├── mixins/
│   │   │   ├── index.ts              — Re-exports entity directories
│   │   │   └── List/
│   │   │       ├── constants.ts      — Entity ID, CSS class keys
│   │   │       ├── createListMixin.tsx — Factory: list CSS class mixin
│   │   │       └── types.ts          — ListMixinProps, ListMixinAPI
│   │   └── providers/
│   │       ├── index.ts              — Re-exports entity directories
│   │       └── ListContext/
│   │           ├── ListContextProvider.tsx — Provider: list context provider
│   │           ├── useList.ts        — Hook: consume list context (throws if missing)
│   │           └── private/          — Internal list context implementation
│   │
│   └── TreeList/
│       ├── index.ts                  — Re-exports all sub-entity directories
│       ├── types.ts                  — Module-level shared tree types
│       ├── components/
│       │   ├── index.ts              — Re-exports entity directories
│       │   ├── TreeListBase/
│       │   │   ├── constants.ts      — Entity ID, prop keys
│       │   │   ├── createTreeListBase.ts — Factory: tree list base controller
│       │   │   ├── TreeListBase.tsx  — Component: tree list container
│       │   │   └── types.ts          — TreeListBaseProps, TreeListBaseAPI
│       │   ├── TreeListItemBase/
│       │   │   ├── constants.ts      — Entity ID, prop keys
│       │   │   ├── createTreeListItemBase.ts — Factory: tree item base controller
│       │   │   ├── TreeListItemBase.tsx — Component: tree item element
│       │   │   └── types.ts          — TreeListItemBaseProps, TreeListItemBaseAPI
│       │   ├── TreeListItemChildrenBase/
│       │   │   ├── constants.ts      — Entity ID, prop keys
│       │   │   ├── createTreeListItemChildren.ts — Factory: tree item children container
│       │   │   ├── TreeListItemChildrenBase.tsx — Component: tree item children wrapper
│       │   │   └── types.ts          — TreeListItemChildrenBaseProps
│       │   └── TreeListItemDetailsBase/
│       │       ├── constants.ts      — Entity ID, prop keys
│       │       ├── createTreeListItemDetailsBase.ts — Factory: tree item details controller
│       │       ├── TreeListItemDetailsBase.tsx — Component: tree item details panel
│       │       └── types.ts          — TreeListItemDetailsBaseProps
│       ├── contexts/
│       │   ├── constants.ts          — Context ID
│       │   ├── createTreeListContext.ts — Factory: tree list context data structure
│       │   └── types.ts              — TreeListContext value types
│       ├── controllers/
│       │   ├── index.ts              — Re-exports entity directories
│       │   ├── TreeList/
│       │   │   ├── constants.ts      — Entity ID, prop keys
│       │   │   ├── createTreeList.ts — Factory: tree list state controller
│       │   │   └── types.ts          — TreeListProps, TreeListAPI
│       │   ├── TreeListItem/
│       │   │   ├── constants.ts      — Entity ID, prop keys
│       │   │   ├── createTreeListItem.ts — Factory: tree item controller
│       │   │   └── types.ts          — TreeListItemProps, TreeListItemAPI
│       │   ├── TreeListItemChildren/
│       │   │   ├── constants.ts      — Entity ID, prop keys
│       │   │   ├── createTreeListItemChildren.ts — Factory: tree item children controller
│       │   │   └── types.ts          — TreeListItemChildrenProps, API
│       │   ├── TreeListItemDetails/
│       │   │   ├── constants.ts      — Entity ID, prop keys
│       │   │   ├── createTreeListItemDetails.ts — Factory: tree item details controller
│       │   │   └── types.ts          — TreeListItemDetailsProps, API
│       │   └── TreeListKeyboard/
│       │       ├── constants.ts      — Entity ID, prop keys
│       │       ├── createTreeListKeyboardController.ts — Factory: keyboard navigation for tree
│       │       └── types.ts          — TreeListKeyboardProps, TreeListKeyboardAPI
│       ├── helpers/
│       │   ├── index.ts              — Re-exports helper files
│       │   ├── getTreeNodesToExpand.ts — Utility: computes expandable nodes range
│       │   └── getTreeSelectionUntil.ts — Utility: tree range selection helper
│       ├── mixins/
│       │   ├── index.ts              — Re-exports entity directories
│       │   └── TreeListItemDetails/
│       │       ├── constants.ts      — Entity ID, CSS class keys
│       │       ├── createTreeListItemDetailsMixin.ts — Factory: tree item details CSS mixin
│       │       └── types.ts          — TreeListItemDetailsMixinProps, API
│       ├── primitives/
│       │   ├── index.ts              — Re-exports primitive files
│       │   ├── createTreeNode.ts     — Factory: tree node data primitive
│       │   └── private/              — Internal node ID generation
│       └── providers/
│           ├── index.ts              — Re-exports entity directories
│           └── TreeListContext/
│               ├── TreeListContextProvider.tsx — Provider: tree list context provider
│               ├── useTreeList.ts    — Hook: consume tree list context (throws if missing)
│               └── private/          — Internal tree list context implementation
│
├── placement/
│   ├── index.ts                      — Re-exports constants + controllers + types
│   ├── constants.ts                  — Module-level placement constants
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── Placement/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createPlacement.ts    — Factory: floating placement controller
│   │       └── types.ts              — PlacementProps, PlacementAPI
│   ├── types.ts                      — Module-level shared placement types
│   └── private/                      — Internal placement helpers (anchoring, flipping, viewport)
│
├── popover/
│   ├── index.ts                      — Re-exports components + contexts + controllers + mixins + providers
│   ├── components/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── AnchoredPopoverBase/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createAnchoredPopoverBase.ts — Factory: anchored popover base controller
│   │   │   ├── AnchoredPopoverBase.tsx — Component: anchored popover element
│   │   │   └── types.ts              — AnchoredPopoverBaseProps, API
│   │   └── PopoverBase/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createPopoverBase.ts  — Factory: popover base controller
│   │       ├── PopoverBase.tsx       — Component: popover element
│   │       └── types.ts              — PopoverBaseProps, PopoverBaseAPI
│   ├── contexts/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── Popover/
│   │       ├── constants.ts          — Context ID
│   │       ├── createPopoverContext.ts — Factory: popover context data structure
│   │       └── types.ts              — PopoverContext value types
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── AnchoredPopover/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createAnchoredPopover.ts — Factory: anchored popover controller
│   │   │   ├── createAnchoredPopoverTrigger.ts — Factory: anchored popover trigger controller
│   │   │   └── types.ts              — AnchoredPopoverProps, API
│   │   └── Popover/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createPopover.ts      — Factory: popover controller
│   │       └── types.ts              — PopoverProps, PopoverAPI
│   ├── mixins/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── AnchoredPopover/
│   │   │   ├── constants.ts          — Entity ID, CSS class keys
│   │   │   ├── createAnchoredPopoverMixin.tsx — Factory: anchored popover CSS mixin
│   │   │   └── types.ts              — AnchoredPopoverMixinProps, API
│   │   └── Popover/
│   │       ├── constants.ts          — Entity ID, CSS class keys
│   │       ├── createPopoverMixin.tsx — Factory: popover CSS class mixin
│   │       └── types.ts              — PopoverMixinProps, PopoverMixinAPI
│   └── providers/
│       ├── index.ts                  — Re-exports entity directories
│       └── PopoverContext/
│           ├── PopoverContextProvider.tsx — Provider: popover context provider
│           ├── usePopover.ts         — Hook: consume popover context (throws if missing)
│           ├── usePopoverMaybe.ts    — Hook: consume popover context (returns undefined if missing)
│           └── private/              — Internal popover context state
│
├── responsive/
│   ├── index.ts                      — Re-exports components + controllers + helpers + types
│   ├── components/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── OverflowItems/            — OverflowItems component suite
│   │       ├── index.ts              — Re-exports sub-components
│   │       ├── components/           — Sub-components: OverflowItems, OverflowItemsContent, OverflowItemsToggle
│   │       └── private/              — Internal context and providers for overflow items
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   ├── ContainerQuery/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createContainerQuery.ts — Factory: container query controller
│   │   │   ├── types.ts              — ContainerQueryProps, ContainerQueryAPI
│   │   │   └── private/              — Internal container query matching
│   │   ├── MediaQuery/
│   │   │   ├── constants.ts          — Entity ID, prop keys
│   │   │   ├── createMediaQuery.ts   — Factory: media query controller
│   │   │   ├── types.ts              — MediaQueryProps, MediaQueryAPI
│   │   │   └── private/              — Internal media query string builder
│   │   └── SupportsQuery/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createSupportsQuery.ts — Factory: CSS @supports query controller
│   │       └── types.ts              — SupportsQueryProps, SupportsQueryAPI
│   ├── helpers/
│   │   ├── index.ts                  — Re-exports helper files
│   │   ├── responsiveBooleanClasses.ts — Utility: generates responsive boolean CSS class arrays
│   │   ├── responsiveBooleanClassList.ts — Utility: creates reactive class list for boolean props
│   │   ├── responsiveVariantClasses.ts — Utility: generates responsive variant CSS class arrays
│   │   └── responsiveVariantClassList.ts — Utility: creates reactive class list for variant props
│   └── types.ts                      — Module-level responsive types (ResponsiveProp, breakpoints)
│
├── surface/
│   ├── index.ts                      — Re-exports components + controllers + mixins
│   ├── components/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── SurfaceBase/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createSurfaceBase.tsx — Factory: surface base controller
│   │       ├── SurfaceBase.tsx       — Component: surface container element
│   │       └── types.ts              — SurfaceBaseProps, SurfaceBaseAPI
│   ├── controllers/
│   │   ├── index.ts                  — Re-exports entity directories
│   │   └── Surface/
│   │       ├── constants.ts          — Entity ID, prop keys
│   │       ├── createSurface.ts      — Factory: surface controller
│   │       └── types.ts              — SurfaceProps, SurfaceAPI
│   └── mixins/
│       ├── index.ts                  — Re-exports entity directories
│       └── SurfaceMixin/
│           ├── constants.ts          — Entity ID, CSS class keys
│           ├── createSurfaceMixin.ts — Factory: surface CSS class mixin
│           └── types.ts              — SurfaceMixinProps, SurfaceMixinAPI
│
└── typography/
    ├── index.ts                      — Re-exports mixins
    └── mixins/
        ├── index.ts                  — Re-exports entity directories
        ├── AlignedToFirstLine/
        │   ├── constants.ts          — Entity ID, CSS class keys
        │   ├── createAlignedToFirstLineMixin.tsx — Factory: aligned-to-first-line CSS mixin
        │   └── types.ts              — AlignedToFirstLineMixinProps, API
        ├── AlignFirstLine/
        │   ├── constants.ts          — Entity ID, CSS class keys
        │   ├── createAlignFirstLineMixin.ts — Factory: first-line alignment CSS mixin
        │   └── types.ts              — AlignFirstLineMixinProps, API
        └── TextMixin/
            ├── constants.ts          — Entity ID, CSS class keys
            ├── createTextMixin.tsx   — Factory: text styling CSS mixin
            └── types.ts              — TextMixinProps, TextMixinAPI
```

### Non-source files

```
scss/                     — SCSS module files (*.module.scss) for component styling
  FlexMixin.module.scss
  LayoutMixin.module.scss
  ...

build/
  globals.scss            — Global SCSS variables and breakpoint definitions

scripts/
  extract.ts              — Meta extraction script using @no-comply/meta-extract + @purrception/source-fs

meta/
  api.md                  — API surface summary
  architecture.md         — Design principles, layering, dependencies
  conventions.md          — Naming, file organization, API patterns
  health.md               — Known issues and technical debt
  modules.md              — This file
```
