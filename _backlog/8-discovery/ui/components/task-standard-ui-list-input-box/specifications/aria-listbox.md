# ADD controller:accessibility:listbox

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/glossary.md`
- `no-comply/knowledge/packages.md`

## Why

Solid-accessibility currently provides `createAriaList` (role `list`) and `createAriaListItem` (role `listitem`) but NOT `createAriaListbox` (role `listbox`). A listbox has different ARIA attributes (`aria-activedescendant`, `aria-multiselectable`) and the options use a different role (`option` instead of `listitem`). This controller is required for the ListInputBox component.

## Example Usage

```tsx
const aria = createAriaListbox({
  id: 'my-listbox',
  multiselectable: false,
  activeDescendantId: focusedId,
});
// On container:
<div {...aria.$root}>...</div>
// On each option:
<div {...aria._option}>...</div>
```

## Identity

Package: `@no-comply/solid-accessibility`
Module: `controllers/listbox`
Name: `AriaListboxController`
Factory: `createAriaListbox`
CSS Module?: NO
Id: `controller:accessibility:listbox`

## Responsibility

Apply WAI-ARIA listbox pattern attributes to `$root` and expose an `_option` sub-API for individual option items.

## Accessibility (if applicable)

**Role:**

- `$root`: `listbox`
- `_option`: `option`

**Keyboard:** None — delegated to `createListKeyboardController`

**Attributes:**

- `$root`: `aria-activedescendant` (from `activeDescendantId` prop), `aria-multiselectable`, `aria-orientation`, `aria-labelledby` / `aria-label`, `aria-describedby`, `id`
- `_option`: `aria-selected`, `aria-posinset`, `aria-setsize`

**Focus:** Roving tabindex — managed by the keyboard + roving index controllers, not by this ARIA controller

## Accepts Props

- `id?: string` — for the listbox element
- `multiselectable?: boolean` (default false)
- `orientation?: 'vertical' | 'horizontal'` (default 'vertical')
- `activeDescendantId?: Accessor<string | undefined>` — for `aria-activedescendant`
- From `AriaLabelledProps`: `aria-label`, `aria-labelledby`, `aria-describedby`

## Exposes API

- `$root`: `{ role: 'listbox', 'aria-activedescendant'?: string, 'aria-multiselectable': boolean, 'aria-orientation': string, id: string }` plus `AriaLabelledAPI` members
- `_option`: `{ role: 'option', 'aria-selected': boolean, 'aria-posinset': number, 'aria-setsize': number }`

## Unrefined

- Whether to use `aria-activedescendant` (pointing to the active option's id) vs roving tabindex (setting tabindex on the focused element). The decision affects how `_option` exposes the `id` and `tabindex` attributes. Both are valid per WAI-ARIA. Roving tabindex is more compatible with virtualised lists.

## Follow ups

- Add support for `aria-multiselectable` dynamic toggle
- `createAriaListbox` could also expose a `_group` sub-API for option groups (`<optgroup>` equivalent)
