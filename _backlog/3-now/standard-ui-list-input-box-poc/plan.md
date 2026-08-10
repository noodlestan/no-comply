# Task Plan: Standard UI — ListInputBox POC

**Status:** DONE

## Summary

Build a keyboard-driven ListInputBox POC in standard-ui, validating the two-part keyboard architecture (`createRovingIndex` + `createListKeyboardController`), `AnchoredPopover` integration, render prop contract, and the Enter/Space split. All changes land in `standard-ui` (components) and `solid-composables` (controllers). The demo app's `SignupForm` provides the last-mile integration.

## Tasks

- `../task-standard-ui-list-input-box-poc/task.md` — POC specification with entity props, APIs, and design decisions.

## Commits

### `roving-index` — DONE

**Message:** `feat(solid-composables): add createRovingIndex composable`

**Instructions:** `plan__instruct__roving-index.md`

**Report:** `plan__report__roving-index.md`

- Add `controller:composable:roving-index` to `solid-composables/src/navigation/controllers/RovingIndex/`
    - `types.ts` — `RovingIndexProps`, `RovingIndexAPI`
    - `createRovingIndex.ts` — signal-based roving index with reactive bounds tracking via `items` accessor
    - `index.ts` — barrel export
- Wire into `solid-composables/src/navigation/controllers/index.ts`
- API: `index`, `focusNext`, `focusPrev`, `focusFirst`, `focusLast`, `focusIndex`
- Props: `items: Accessor<unknown[]>`, `loop?: boolean` (default true), `initialIndex?: number` (default 0)

Evidence:

- Created `src/navigation/controllers/RovingIndex/types.ts`, `constants.ts`, `createRovingIndex.ts`, `index.ts`
- Modified `src/navigation/controllers/index.ts`
- `npm run lint` — passed
- `npm run build` — passed

---

### `list-keyboard` — DONE

**Message:** `feat(solid-composables): add createListKeyboardController composable`

**Instructions:** `plan__instruct__list-keyboard.md`

**Report:** `plan__report__list-keyboard.md`

- Add `controller:composable:list-keyboard` to `solid-composables/src/navigation/controllers/ListKeyboard/`
    - `types.ts` — `ListKeyboardProps`, `ListKeyboardAPI`
    - `createListKeyboardController.ts` — consumes `createRovingIndex` instance, maps ArrowUp/ArrowDown/Home/End, exposes `$root.onKeyDown`
    - `index.ts` — barrel export
- Wire into `solid-composables/src/navigation/controllers/index.ts`
- Props: `roving: ReturnType<typeof createRovingIndex>`, `onSelect?: (index: number) => void`, `onToggle?: (index: number) => void`
- API: `$root: { onKeyDown }`, delegates `index`, `focusNext`, `focusPrev`, `focusFirst`, `focusLast`, `focusIndex`
- Key design decision: keyboard controller handles Arrow keys on the container; item's `createPressable` handles Enter/Space (no conflict in roving tabindex mode — only the active item receives keyboard events)

Evidence:

- Created `src/navigation/controllers/ListKeyboard/types.ts`, `constants.ts`, `createListKeyboardController.ts`, `index.ts`
- Modified `src/navigation/controllers/index.ts`
- Resolved naming conflict with existing `organisms/List/controllers/ListKeyboard` — removed old barrel export from `organisms/List/controllers/index.ts`
- `npm run lint` — passed
- `npm run build` — passed

---

### `list-input-box-item` — DONE

**Message:** `feat(standard-ui): add ListInputBoxItem component`

**Instructions:** `plan__instruct__list-input-box-item.md`

**Report:** `plan__report__list-input-box-item.md`

- Add `component:standard-ui:list-input-box-item` to `standard-ui/src/input/components/ListInputBoxItem/`
    - `types.ts` — `ListInputBoxItemProps`
    - `ListInputBoxItem.tsx` — composes `createPressable`, renders with ARIA option attributes (`role="option"`, `aria-selected`, `aria-posinset`, `aria-setsize`), tabindex handling for roving pattern
    - `ListInputBoxItem.module.scss` — base styles
    - `index.ts` — barrel export
- Wire into `standard-ui/src/input/components/index.ts`
- Props: `children: JSX.Element`, `selected?: boolean`, `onPress?: (ev: Event) => void`
- Key design decision: hardcode ARIA attributes since `createAriaListbox` doesn't exist yet; pressable handles Enter/Space locally

Evidence:

- Created `src/input/components/ListInputBoxItem/types.ts`, `ListInputBoxItem.tsx`, `ListInputBoxItem.module.scss`, `index.ts`
- Modified `src/input/components/index.ts`
- `npm run lint` — passed
- `npm run build` — passed

---

### `list-input-box` — DONE

**Message:** `feat(standard-ui): add ListInputBox component`

**Instructions:** `plan__instruct__list-input-box.md`

**Report:** `plan__report__list-input-box.md`

- Add `component:standard-ui:list-input-box` to `standard-ui/src/input/components/ListInputBox/`
    - `types.ts` — `ListInputBoxProps`, `ListInputBoxAPI`
    - `ListInputBox.tsx` — integrates all pieces:
        - `createRovingIndex` + `createListKeyboardController` for navigation
        - `AnchoredPopover` for dropdown panel (combobox-style placement: below, left-aligned)
        - Render props: `children({ key })` for item rendering, `selectedItem({ key })` for trigger display
        - Mixins: `createInputBoxMixin`, `createInputStateMixin`, `createSizedInputBoxMixin`
        - Internal `createSignal` for value management (simplest approach first)
        - Keyboard UX: Enter opens popover, Arrow keys navigate, Enter confirms & closes, Escape dismisses & reverts
        - Focus management: on popover open, focus selected item (or first); on close, return focus to trigger
    - `ListInputBox.module.scss` — base styles
    - `index.ts` — barrel export
- Wire into `standard-ui/src/input/components/index.ts`
- Props: `items: Accessor<string[]>`, `value?: Accessor<string | undefined>`, `onValueChange: (key: string) => void`, `children: (props: { key: string }) => JSX.Element`, `selectedItem?: (props: { key: string }) => JSX.Element`, `size?: ContentSize`, `disabled?: boolean`, `invalid?: boolean`, `onShow?: () => void`, `onHide?: () => void`

Evidence:

- Created `src/input/components/ListInputBox/types.ts`, `ListInputBox.tsx`, `ListInputBox.module.scss`, `index.ts`
- Modified `src/input/components/index.ts`
- `npm run build` — passed
- `npm run lint` — 0 errors (8 reactivity warnings)
- API deviations found: AnchoredPopover render props, mixin imports, placement type, popover dismiss pattern

---

### `demo-signup-integration` — DONE

**Message:** `feat(demo): wire ListInputBox into SignupForm`

**Instructions:** `plan__instruct__demo-signup-integration.md`

**Report:** `plan__report__demo-signup-integration.md`

- Update `standard-ui-demo/src/app/screens/AppHomeScreen/forms/SignupForm/`:
    - Import `ListInputBox` from `@no-comply/standard-ui`
    - Add a list/select field (e.g. "How did you hear about us?" or similar) using `ListInputBox`
    - Wire value state into `signupData` signal
    - Add the field to the form layout
    - Verify the full flow: open popover → navigate → select → confirm → close → submit

Evidence:

- Modified `SignupForm/types.ts` — added `referralSource` field
- Modified `SignupForm/SignupForm.tsx` — integrated `ListInputBox` with `REFERRAL_SOURCES` options
- Lint passed; build failure is pre-existing (`@solidjs/router` resolution)

---

## Follow ups

- **AnchoredPopover delta**: Identify what's broken in the controller and capture findings for a follow-up fix task.
- **aria-activedescendant**: Evaluate trade-offs vs roving tabindex for future production version.
- **createPressable Enter/Space opt-out**: Determine if a prop is needed for items that shouldn't trigger press on Space.
- **selectedItem vs children render prop**: Decide if defaulting `selectedItem` to `children` when not provided reduces confusion.
