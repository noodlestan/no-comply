# ADD controller:composable:roving-index

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/glossary.md`

## Why

A signal-based roving tabindex controller is needed because the existing `createListKeyboardController` in `organisms/List/` is tied to `[data-item-id]` DOM queries and cannot be reused. An abstract roving index is the foundation for list keyboard navigation across all list-like components (listbox, menu, radio group, tabs).

## Example Usage

```tsx
const items = () => ['a', 'b', 'c'];
const roving = createRovingIndex({ items, loop: true });
roving.focusNext();   // index() → 0
roving.focusLast();   // index() → 2
```

## Identity

Package: `@no-comply/solid-composables`
Module: `navigation/controllers/RovingIndex`
Name: `RovingIndexController`
Factory: `createRovingIndex`
CSS Module?: NO
Id: `controller:composable:roving-index`

## Responsibility

Manage a reactive focused index within a list of items. Expose imperative `focusNext`, `focusPrev`, `focusFirst`, `focusLast`, `focusIndex` methods. Does NOT handle keyboard events — those are the keyboard controller's responsibility.

## Accessibility (if applicable)

**Focus:** The controller manages which index has conceptual focus, but does not set actual DOM focus. Focus management is delegated to the keyboard controller that consumes this API.

## Accepts Props

- `items: Accessor<unknown[]>` — derived length determines bounds
- `initialIndex?: number` — starting index (default 0)
- `loop?: boolean` — wrap from last to first and vice versa (default true)

## Exposes API

- `index: Accessor<number>` — current focused index
- `focusNext: () => void`
- `focusPrev: () => void`
- `focusFirst: () => void`
- `focusLast: () => void`
- `focusIndex: (index: number) => void`

## Unrefined

- Orientation does not affect roving index behavior (it is consumed by the keyboard controller and ARIA attributes instead)

## Follow ups

- Support for `disabledItems` to skip disabled items when navigating
