# Fix: OverflowItems

## Summary

Fix the broken OverflowItems component in `@no-comply/solid-composables` that fails to display the popup trigger and popup, while correctly analyzing overflow.

## Scope

- `$PROJECT = @no-comply/solid-composables`
- `$SCOPE = src/responsive/components/OverflowItems`

## User story

As a developer using the responsive OverflowItems component, I need the popup trigger and popup to display correctly so users can access overflowed items.

## Unrefined plan

- **Fix double-render problem**: Memoize children to avoid creating fresh VNodes twice (measure + render containers)
    - Add `const c = children(() => props.children);`
    - Use `c()` in measure container: `<OverflowItemsMeasureProvider>{c()}</OverflowItemsMeasureProvider>`
    - Keep `{props.children}` in render container (or use `c()` - verify behavior)
- **Remove dead extraction**: Remove `'children'` from the `splitProps` destructure:
    ```tsx
    const [locals, $others] = splitProps(props, OVERFLOW_ITEMS_PROPS);
    ```
- The component uses two sibling containers:
    1. **Measure container** (`<div inert ...$measure>`) - hidden, detects overflow via `scrollWidth > clientWidth`
    2. **Render container** (`<div ...$render>`) - visible, what users see
- On resize (via `ResizeObserver`), `createOverflowItems` runs a test loop:
    - Measures if content overflows the measure container
    - If overflowing, pops one item from `testVisibleItems` → `testOverflowItems`, re-measures after 100ms timeout
    - When no more overflow, commits via `finishTest()` → copies test signals to live signals
- `OverflowItemsContent` and `OverflowItemsToggle` consume the context to render visible items vs overflow toggle

### Cannot memoize at the container level

Children need access to `OverflowItemsContextProvider` (the parent wrapper). Memoizing with `children(() => props.children)` before the provider renders evaluates children outside the context, causing context consumers inside children to crash.

### Fix approach

**Render the provider first, delegate children to a nested part, memoize inside the part:**

1. Extract the `<div {...$}>` subtree (measure + render containers + `OverflowItemsMeasureProvider`) into a separate inner component (e.g., `OverflowItemsInner`)
2. `OverflowItems` renders `<OverflowItemsContextProvider>` and passes `props.children` as a prop to `<OverflowItemsInner>`
3. Inside `OverflowItemsInner`, children now have access to the context provider. There, `children(() => props.children)` can safely memoize, and one of the two render paths uses the memoized value while the other keeps direct access

## Notes

- No IntersectionObserver used — only `ResizeObserver` + manual `scrollWidth` measurement
- The `inert` attribute on the measure container prevents interaction but doesn't avoid VNode creation
- Child components (`OverflowItemsContent`, `OverflowItemsToggle`) read from context to determine which items to render, so children are dynamic/context-dependent

## Doubts

- Whether the active nav item (determined by `currentItemId`) is always kept visible and never moved to the overflow — currently the test loop pops from the end independently of which item is active
- How `renderItem` ensures the current item renders in the right location (visible vs overflow) — the `OverflowItemsContent` component renders `visibleItems()` via `renderItem`, and the overflow toggle renders `overflowItems()`. No DOM element tracking, only data (item IDs)
- Whether both containers need children rendered for the measure to work correctly, or if only the measure container could be fed a bare list of items

## Acceptance criteria

- Popup trigger shows correctly (not just a number with overflown items)
- Popup displays when triggered
- Component still correctly analyzes overflow
- No double-render of reactive effects in children
- Dead `'children'` extraction removed from `splitProps`
