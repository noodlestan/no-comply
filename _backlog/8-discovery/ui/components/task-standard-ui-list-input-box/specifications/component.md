# ADD component:standard-ui:list-input-box

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/glossary.md`

## Why

Replace native `<select>` with a custom-renderable listbox that integrates with the no-comply input composable stack: input mixins, popover, keyboard navigation, and ARIA listbox pattern. This is the foundation for the future combobox.

## Example Usage

```tsx
<ListInputBox
  items={keys()}
  value={selectedKey()}
  onValueChange={setSelectedKey}
  selectedItem={({key}) => <ListInputBoxItem>{getLabel(key)}</ListInputBoxItem>}
>
  {({key}) => <ListInputBoxItem>{getLabel(key)}</ListInputBoxItem>}
</ListInputBox>
```

## Identity

Package: `@no-comply/standard-ui`
Module: `input/components/ListInputBox`
Name: `ListInputBox`
Factory: N/A (component)
CSS Module?: YES (via composed mixins)
Id: `component:standard-ui:list-input-box`

## Responsibility

Render a listbox selection control with:
- A trigger that shows the selected item (via `selectedItem` render prop)
- A popover panel containing the list of options
- Keyboard navigation (arrow keys, home, end, enter, space)
- ARIA listbox pattern attributes
- Full integration with the input mixin stack

## Composes

Confirmed:
- `createPopover` — for the dropdown panel (open/close, focus-out dismiss)
- `createAriaListbox` — for ARIA listbox/option attributes on container and items
- `createListKeyboardController` — keyboard navigation (which composes `createRovingIndex`)
- `createListInputBoxMixin` — listbox container styling classes
- `createInputBoxMixin` — base input box styling
- `createInputStateMixin` — disabled / invalid states
- `createSizedInputBoxMixin` — size variant styling

Unrefined:
- Value controller: `createTextInputValue` may need adaptation for listbox-style value management
- `createContentLengthMixin` — may or may not be needed

## Accepts Props

**Own props:**

- `items: Accessor<string[]>` — array of item keys/ids
- `value?: Accessor<string | undefined>` — selected key
- `onValueChange: (key: string) => void`
- `selectedItem: (props: { key: string }) => JSX.Element` — render prop for selected item display (trigger)
- `children: (props: { key: string }) => JSX.Element` — render prop for each list item

**Composed props:**

From `createPopover` — `id`, `onShow`, `onHide`
From `createListInputBoxMixin` — `open`
From `createInputStateMixin` — `disabled`, `invalid`, `modified`
From `createSizedInputBoxMixin` — `size`

## Component

Is a `ParentComponent` with a render-prop `children`.

### Props

Accepts also standard DOM attributes as `$others` (for spread on the root element).

### Parts

**Trigger** — Renders the currently selected item using the `selectedItem` render prop. Clicking the trigger calls `context.toggle()` from the popover.

**Panel** — Renders the list of items inside a popover. Each item is rendered using the `children` render prop, wrapped with the composed `_option` ARIA attributes, `createPressable` handlers, and `createListInputBoxItemMixin` classes.

### Renders

**Structure**

```
<div {...$root} onClick={togglePopover}>
  {selectedItem({ key: value() })}
</div>
<div {...popover.$root}>
  <For each={items()}>
    {(key) => <ListInputBoxItem {..._option} {...pressable} {...itemMixin} />}
  </For>
</div>
```

**Responsibilities**

- Root trigger div — click to toggle popover, displays selected item via render prop
- Popover panel — the dropdown, uses native `popover="auto"` for show/hide, dismisses on focus-out
- Each item wraps the consumer render prop with ARIA option attributes, pressable handlers, and item mixin classes

## Unrefined

- Render prop contract: `selectedItem` vs `children` — both receive `{ key }` but `children` may also receive `state` (selected, focused). Need to decide if they share the same signature.
- Value controller: `createTextInputValue` exists but is built for free-text inputs. A listbox may need a simpler value controller that just tracks the selected key.
- ContentLength mixin: needed or not? TextInput uses it but it may not apply to listbox.
- The trigger element: should it be a `<button>` for accessibility? Currently planned as a `<div>` with onClick.

## Follow ups

- Combobox in standard-ui — when typeahead/search is needed, decompose ListInputBox and recompose with a text input
- Virtualisation of list items
