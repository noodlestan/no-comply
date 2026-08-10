# Standard UI: ListInputBox component with supporting controllers

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-task-template.md`

### Skills required:

- `write-no-comply-entity-task` — generating the entity specs that accompany this task

## Summary

Add a `ListInputBox` component that replaces the native `<select>` with custom-renderable option items, using the no-comply composable stack (popover, input mixins, keyboard navigation, ARIA listbox pattern). This is a `listbox`-only implementation; a `combobox` variant is a follow-up.

## Changes

7 new entities across 3 packages: 2 components (`ListInputBox`, `ListInputBoxItem`) and 2 mixins in `standard-ui`, 2 controllers (`createRovingIndex`, `createListKeyboardController`) in `solid-composables`, and 1 ARIA controller (`createAriaListbox`) in `solid-accessibility`. All backed by draft specs.

## Links

- [Existing Select (native, legacy)](no-comply/libs/standard-ui/src/input/components/Select/Select.tsx) — source that this replaces
- [Existing TextInput compose pattern](no-comply/libs/standard-ui/src/input/components/TextInput/createTextInput.tsx) — model for composable architecture
- [Existing ListKeyboard (source material)](no-comply/libs/solid-composables/src/organisms/List/controllers/ListKeyboard/createListKeyboardController.ts) — reference only, not reusable
- [Existing List organism (full stack)](no-comply/libs/solid-composables/src/organisms/List/) — context/selection patterns to study
- [Existing createPopover](no-comply/libs/solid-composables/src/popover/controllers/Popover/createPopover.ts) — popover controller to compose
- [Existing createPressable](no-comply/libs/solid-composables/src/action/controllers/Pressable/createPressable.ts) — press controller to compose
- [Existing createAriaList / createAriaListItem](no-comply/libs/solid-accessibility/src/controllers/list/) — ARIA pattern reference to follow for new createAriaListbox

## Refined

### Scope

**Entities**

- Add `controller:composable:roving-index` — [spec](specs/roving-index.md)
- Add `controller:composable:list-keyboard` — [spec](specs/list-keyboard.md)
- Add `controller:accessibility:listbox` — [spec](specs/aria-listbox.md)
- Add `mixin:standard-ui:list-input-box` — [spec](specs/list-input-box-mixin.md)
- Add `mixin:standard-ui:list-input-box-item` — [spec](specs/list-input-box-item-mixin.md)
- Add `component:standard-ui:list-input-box` — [spec](specs/component.md)
- Add `component:standard-ui:list-input-box-item` — [spec](specs/item.md)

**Other Changes**

- No non-entity changes in scope.

**Composition**

- `createRovingIndex` and `createListKeyboardController` are separate controllers (the latter consumes the former)
- `createAriaListbox` is a factory-function-only controller in `solid-accessibility`, no styling
- `createPopover` is composed for the dropdown panel
- `createPressable` is composed for item press interaction (Space/Enter behavior TBD)
- Input mixin stack is reused: `InputBoxMixin`, `InputStateMixin`, `SizedInputBoxMixin`
- Items are identified by keys/ids only — no data model dependency
- Role is `listbox`; `combobox` is out of scope

### BREAKING CHANGES

None.

### Outcomes

- 2 new components in `standard-ui` (`ListInputBox`, `ListInputBoxItem`)
- 2 new controllers in `solid-composables` (`createRovingIndex`, `createListKeyboardController`)
- 1 new ARIA controller in `solid-accessibility` (`createAriaListbox`)
- 2 new mixins in `standard-ui` (`createListInputBoxMixin`, `createListInputBoxItemMixin`)

### Constraints

**Incompatible API:** The existing `createListKeyboardController` in `organisms/List/` is not reusable. Its implementation uses raw `[data-item-id]` DOM queries and is tied to the legacy List context. It serves as source material only. The new controller consumes `createRovingIndex` and uses a signal-based approach.

### Not in scope

**Combobox:** Typeahead/search filtering is out of scope. A combobox will decompose and recompose ListInputBox in a future task.

**Virtualisation:** Virtualised list items are out of scope. The follow-up is noted.

**Native `<select>` fallback:** The existing `Select` component remains as-is. No native fallback is planned for `ListInputBox`.

## Acceptance criteria

- All 7 entities listed in the scope are added to their respective packages
- `ListInputBox` renders a trigger showing the selected item, a popover panel with the item list, and supports keyboard navigation (arrow keys, home, end, enter)
- `ListInputBoxItem` composes `createPressable` and ARIA option attributes
- `createAriaListbox` exposes role `listbox` on `$root` and role `option` on `_option`
- `createRovingIndex` manages a reactive focused index with navigation methods
- `createListKeyboardController` maps ArrowUp/Down/Home/End to roving index methods
- All new components are previewable in standard-ui-demo
- All new entities appear in API docs

## Notes

### Unrefined

WIP: The POC task `standard-ui-list-input-box-poc.md` was created to process. Find the file in `now/` or `archive/` to update the refiniment with its Findings:

1. **Research ARIA patterns** — verify Enter vs Space behavior in single-select vs multiselect listbox. Determine if `createPressable` needs a prop to opt out of Space or Enter. This affects both `createListKeyboardController` and `ListInputBoxItem`.

2. **POC: popover + keyboard controller + render prop** — prototype the integration of `createPopover` with `createListKeyboardController`. Confirm that the keyboard controller can programmatically focus items in the popover panel when it opens.

3. **POC: render prop contract** — prototype the two-slot pattern (`selectedItem` + `children`) and verify it composes well with the listbox architecture.

Open questions per spec (super-short):

- [roving-index spec](specs/roving-index.md) — orientation relevance?
- [list-keyboard spec](specs/list-keyboard.md) — Space behavior in single vs multiselect?
- [aria-listbox spec](specs/aria-listbox.md) — aria-activedescendant vs roving tabindex?
- [component spec](specs/component.md) — how many render props? Value controller: `createTextInputValue` or new?
- [item spec](specs/item.md) — Space/Enter on `createPressable`? Focus ring management?

Other unrefined:

- ContentLength mixin: needed on ListInputBox or not?
- Trigger element: `<div>` or `<button>` for accessibility?
- The `createListKeyboardController` may need a `multiselectable` prop to gate Space behavior

### Follow ups

- **Combobox** (`standard-ui`) — Decompose ListInputBox and recompose with a text input for typeahead/search
- **Virtualisation** — Support virtualised list items for large option sets
- **Option groups** — `createAriaListbox` could expose `_group` sub-API for optgroup-like grouping
- **RovingIndex disabled items** — Support skipping disabled items during keyboard navigation
- **Typeahead** — Character key navigation in list keyboard controller
