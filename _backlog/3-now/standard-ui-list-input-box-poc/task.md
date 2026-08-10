# Standard UI: ListInputBox POC — keyboard, popover & render prop integration

## Metadata

template: `.agents/skills/draft-no-comply-entity-task/no-comply-entity-draft-template.md`

### Skills required:

- `write-no-comply-entity-task` — the POC will produce refined specs for the main task
- `todos` — track open questions during the POC
- `rehash` — summarise findings when done

## Summary

De-risk the ListInputBox implementation before the main build. Prototype the two-part keyboard architecture (`createRovingIndex` + `createListKeyboardController`), validate `createPopover` integration with keyboard focus, test the two-slot render prop contract, and research the ARIA listbox keyboard spec to close the Space vs Enter question on `createPressable`.

## Changes

**Entities (prototype — may be discarded or become the foundation for the real entities):**

- Add `controller:composable:roving-index` (prototype)
- Add `controller:composable:list-keyboard` (prototype)
- Add `component:standard-ui:list-input-box` (prototype)
- Add `component:standard-ui:list-input-box-item` (prototype)

**Other work:**

- Research: ARIA listbox keyboard spec (Enter/Space in single vs multiselect)
- Research: Does `createPressable` need a prop to opt out of Space or Enter?
- Research: `aria-activedescendant` vs roving tabindex trade-offs for this component

## Entities

### Add `controller:composable:roving-index` (prototype)

**Why:** Prove the signal-based roving index works as a standalone controller. The existing `createListKeyboardController` in `organisms/List/` mixes keyboard handling with DOM queries — this POC validates that a clean two-part split (roving index + keyboard controller) is feasible.

**Identity:** `@no-comply/solid-composables`, `navigation/controllers/RovingIndex`, `createRovingIndex`

**Key design decisions to validate:**

- Reactive bounds tracking via `items` accessor
- `loop` behavior (wrap around at edges)
- Whether it needs `orientation` (probably not — that's the keyboard controller's concern)
- Whether `focusIndex` should accept negative indices or clamp

**Accepts Props:**

- `items: Accessor<unknown[]>` — array length determines bounds
- `loop?: boolean` — wrap from last to first (default true)
- `initialIndex?: number` — start index (default 0)

**Exposes API:**

- `index: Accessor<number>`
- `focusNext: () => void`
- `focusPrev: () => void`
- `focusFirst: () => void`
- `focusLast: () => void`
- `focusIndex: (i: number) => void`

**Example Usage:**

```tsx
const items = () => ['a', 'b', 'c'];
const roving = createRovingIndex({ items, loop: true });
roving.focusNext();
console.log(roving.index()); // 0
```

---

### Add `controller:composable:list-keyboard` (prototype)

**Why:** Validate that a keyboard controller can consume `createRovingIndex` and map ArrowUp/Down/Home/End cleanly. Also confirms the `onSelect`/`onToggle` callback pattern works for the listbox use case.

**Identity:** `@no-comply/solid-composables`, `navigation/controllers/ListKeyboard`, `createListKeyboardController`

**Key design decisions to validate:**

- Can it consume a roving index instance passed as a prop?
- Should the keyboard event handler (`onKeyDown`) be on `$root` or exposed directly?
- Does `onSelect` (Enter) vs `onToggle` (Space) mapping match ARIA spec? (Deferred to research)
- Programmatic focus when popover opens: call `roving.focusIndex(0)` or `focusIndex(selectedIndex)`, then set DOM focus on the corresponding item element. This may require the keyboard controller to also expose a `setFocus` method that finds and focuses the DOM node.

**Accepts Props:**

- `roving: ReturnType<typeof createRovingIndex>` — the roving index instance
- `onSelect?: (index: number) => void` — Enter press
- `onToggle?: (index: number) => void` — Space press

**Exposes API:**

- `$root: { onKeyDown: (ev: KeyboardEvent) => void }`
- `index: Accessor<number>` (delegated)
- `focusNext`, `focusPrev`, `focusFirst`, `focusLast`, `focusIndex` (delegated)

**Example Usage:**

```tsx
const roving = createRovingIndex({ items });
const keyboard = createListKeyboardController({
  roving,
  onSelect: (i) => console.log('selected', i),
});
<div {...keyboard.$root}>...</div>
```

---

### Add `component:standard-ui:list-input-box` (prototype)

**Why:** Prove the full integration: popover + keyboard controller + render prop + input mixins. This is the highest-risk area because it ties together focus management, popover show/hide, and the consumer's render props.

**Identity:** `@no-comply/standard-ui`, `input/components/ListInputBox`, `ListInputBox`

**Key design decisions to validate:**

- **Popover + keyboard handoff:** When popover opens via trigger click, call `setTimeout(() => keyboard.focusIndex(selectedIndex))` to focus the selected item. When popover closes (Escape, focus-out), return focus to trigger.
- **Render prop contract:** Is `selectedItem` a separate prop or can it be inferred? Does the `children` render prop receive `{ key }` only, or also `{ key, selected, focused }`?
- **Value controller:** Do we need `createTextInputValue` at all, or can we manage value with a simple `createSignal<string>()` inside the component? The POC should try the simplest approach first.
- **ContentLength mixin:** Does it make sense on a listbox? Probably skip for the POC.

**Accepts Props:**

- `items: Accessor<string[]>` — array of item keys
- `value?: Accessor<string | undefined>` — selected key
- `onValueChange: (key: string) => void`
- `children: (props: { key: string }) => JSX.Element` — render per item
- `selectedItem?: (props: { key: string }) => JSX.Element` — render selected trigger display
- `size?: ContentSize` — from `SizedInputBoxMixin`
- `disabled?: boolean` — from `InputStateMixin`
- `invalid?: boolean` — from `InputStateMixin`
- `onShow?: () => void` — from `createPopover`
- `onHide?: () => void` — from `createPopover`

**Composes (prototype):**

- `createPopover` — dropdown panel
- `createRovingIndex` — focus tracking
- `createListKeyboardController` — keyboard handling
- `createListInputBoxMixin` — listbox container classes
- `createInputBoxMixin` — base input box styling
- `createInputStateMixin` — disabled/invalid
- `createSizedInputBoxMixin` — size variant
- Internal signal for value management (simplest approach)

**Example Usage:**

```tsx
<ListInputBox
  items={keys()}
  value={selectedKey()}
  onValueChange={setSelectedKey}
  selectedItem={({key}) => <span>{labels[key]}</span>}
>
  {({key}) => <div>{labels[key]}</div>}
</ListInputBox>
```

---

### Add `component:standard-ui:list-input-box-item` (prototype)

**Why:** Validate that `createPressable` can be composed into a listbox option item and that the Space/Enter behavior from the keyboard controller does not conflict with `createPressable`'s own Enter/Space handling.

**Identity:** `@no-comply/standard-ui`, `input/components/ListInputBoxItem`, `ListInputBoxItem`

**Key design decisions to validate:**

- **Pressable conflict:** `createListKeyboardController` handles Arrow keys on the container. `createPressable` handles Enter/Space on each item. Do these conflict? The item's `createPressable` should handle Enter/Space (select/toggle), while the container's keyboard controller handles navigation. Verify there's no double-handling.
- **ARIA option attributes:** The item needs `role="option"`, `aria-selected`, `aria-posinset`, `aria-setsize`. Since `createAriaListbox` doesn't exist yet in the POC, these can be hardcoded for testing.
- **Focus management:** The roving keyboard controller sets focus on items programmatically. Verify that `tabindex` is correctly set: all items have `tabindex="-1"` except the active one which has `tabindex="0"`.

**Accepts Props:**

- `children: JSX.Element`
- `selected?: boolean`
- `onPress?: (ev: Event) => void`

**Composes (prototype):**

- `createPressable` — click + Enter/Space
- Inline ARIA option attributes (no `createAriaListbox` yet)

**Example Usage:**

```tsx
<ListInputBoxItem selected={isSelected()} onPress={handleSelect}>
  {getLabel(key)}
</ListInputBoxItem>
```

---

## Notes

### Unrefined

- **Pressable Space/Enter overlap:** The container's `createListKeyboardController` handles Arrow keys. The item's `createPressable` handles Enter/Space. Need to verify they compose without conflict: `onKeyDown` on the container captures Arrow keys before they reach the focused item; `onKeyDown` on the item captures Enter/Space. In roving tabindex mode, only the active item receives keyboard events, so Enter/Space naturally go to the item's `createPressable`. This should work, but must be tested.

- **Focus on open:** When the popover opens, should focus go to the first item or the selected item? Both are valid UX patterns. The POC should try both and decide.

- **Escape handling:** `createPopover` with `popover="auto"` handles Escape natively (closes the popover). But focus should return to the trigger element. Does `createPopover`'s focus-out handling manage this? Or does the keyboard controller need to handle Escape explicitly?

- **selectedItem vs children render prop:** Two separate props with same signature `{ key: string }`. Does this cause confusion? Could `selectedItem` be an optional override that defaults to the `children` render function?

### Follow ups

- Once the POC validates the architecture, update the main task specs with resolved decisions
- The POC may produce reusable prototype code — decide whether to keep as the foundation or rewrite for production
