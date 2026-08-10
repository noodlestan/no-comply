# ADD controller:composable:list-keyboard

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/glossary.md`

## Why

Keyboard navigation for a listbox needs ArrowUp / ArrowDown / Home / End mapped to focus changes, plus Enter / Space mapped to selection. This controller consumes the abstract `createRovingIndex` and adds keyboard event handling.

## Example Usage

```tsx
const items = () => ['a', 'b', 'c'];
const roving = createRovingIndex({ items });
const keyboard = createListKeyboardController({ roving, onSelect: handleSelect });
// Bind to container:
<div {...keyboard.$root}>...</div>
```

## Identity

Package: `@no-comply/solid-composables`
Module: `navigation/controllers/ListKeyboard`
Name: `ListKeyboardController`
Factory: `createListKeyboardController`
CSS Module?: NO
Id: `controller:composable:list-keyboard`

## Responsibility

Consume a `createRovingIndex` instance and map keyboard events to its focus methods. Expose `$root` for binding event handlers to the container element. This is a rewrite of the existing `organisms/List/controllers/ListKeyboard` — the old one is source material only.

## Composes

Composes `createRovingIndex` directly (receives the instance as a prop, does not create its own).

## Accepts Props

- `roving: RovingIndexController` — the roving index instance to drive
- `onSelect?: (index: number) => void` — called on Enter
- `onToggle?: (index: number) => void` — called on Space (optional, for multiselect context)

## Exposes API

- `$root: { onKeyDown: (ev: KeyboardEvent) => void }`
- `index: Accessor<number>` (delegated from roving index)
- `focusNext`, `focusPrev`, `focusFirst`, `focusLast`, `focusIndex` (delegated from roving index)

## Accessibility (if applicable)

**Keyboard:**

| Key | Action |
|-----|--------|
| ArrowUp | `focusPrev` |
| ArrowDown | `focusNext` |
| Home | `focusFirst` |
| End | `focusLast` |
| Enter | Calls `onSelect` |
| Space | Calls `onToggle` (if provided) |

## Unrefined

- Space behavior: ARIA listbox spec says Space toggles selection in multiselect mode. In single-select, Space may be equivalent to Enter. Need to verify.
- Should `onToggle` be called always or only in multiselect context? May need a `multiselectable` prop.

## Follow ups

- Support for typeahead (character key navigation)
