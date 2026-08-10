# Draft: Add NoSelect (Component + Mixin)

> Generated from NOCOMPLY.md item "Idea: NoSelect — as a component and as a mixin"
> Status: Draft — classification, API design, decomposition

---

## Classification

| Aspect     | Value                                                     |
| ---------- | --------------------------------------------------------- |
| Type       | `primitive` — CSS-utility wrapper, no complex composition |
| Structure  | `standalone` — single component + single mixin            |
| State      | `visual-only` — no state, purely reactive to `when` prop  |
| Visibility | `public` — exported utility for external use              |
| Package    | `solid-composables` (mixin) + `standard-ui` (component)   |

---

## API Design

### Identity

- **NoSelect** — `component:standard-ui:no-select` at `$PROJECT/src/content/components/NoSelect/` (or `$PROJECT/src/utility/components/NoSelect/`)
- **createNoSelectMixin** — `mixin:solid-composables:no-select` at `$PROJECT/src/content/mixins/NoSelect/`
- New entities — no existing no-select utility

### Context from NOCOMPLY.md

```
Idea: NoSelect — as a component and as a mixin

action and link already have pointer-events:all
(test with rest pointer-events:none)

test out both "selectable/not" base resets with [data-selectable] and [data-not-selectable] overrides
make sure actions and links are still ALWAYS not selectable

if display/text components expose [data-display] [data-text] it would be possible
to have the reset layer exclude them from the "not selectable" rule

think also labels, data values
```

### Dependencies

| Dependency         | Package                       | Role                          |
| ------------------ | ----------------------------- | ----------------------------- |
| `solid-primitives` | `@no-comply/solid-primitives` | Props types, class list utils |

No external behavior dependencies — pure CSS utility.

#### Props shape (provisional)

```tsx
type NoSelectProps = {
  when?: boolean; // conditionally apply (default: true)
  as?: 'div' | 'span'; // render element (default: 'div')
  children: ComponentProps;
};
```

### Renders

- Wraps children in a `<div>` (or `<span>`) with `user-select: none` and `pointer-events: none`
- When `when={false}`, renders children without the wrapper (or passes through)

### Alternate approach: data-attribute based

Instead of a wrapper component, the `createNoSelectMixin` could:

- Expose `data-no-select` / `data-not-selectable` attributes based on the `when` prop
- Be composed into other components/mixins at the attribute level
- Work with a global CSS reset that targets `[data-no-select]`

This aligns with the NOCOMPLY.md notes about `[data-selectable]` and `[data-not-selectable]` base resets.

### Styling

```scss
// In solid-composables (structural)
[data-no-select] {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

[data-no-select] * {
  // ensure children also don't select
}
```

Additionally the `pointer-events: none` aspect is for "interactive disabled" mode where disabled elements should not capture pointer events but remain keyboard-accessible.

---

## Decomposition

### Proposed entities

| Entity                                 | Kind      | Package             | Responsibility                                                                               |
| -------------------------------------- | --------- | ------------------- | -------------------------------------------------------------------------------------------- |
| `createNoSelectMixin`                  | Mixin     | `solid-composables` | Exposes `data-no-select` attribute based on `when` prop, CSS module with `user-select: none` |
| `createNotInteractiveMixin` (optional) | Mixin     | `solid-composables` | Exposes `pointer-events: none` logic, possibly combined with disabled state                  |
| `NoSelect`                             | Component | `standard-ui`       | Thin wrapper component applying the mixin                                                    |

### WAI: Alternative scope placement

Instead of `content/`, could live under:

- `solid-composables/src/utility/mixins/NoSelect/` — generic utility
- `standard-ui/src/utility/components/NoSelect/` — themed wrapper

Or its concerns could be folded into:

- `solid-composables/src/accessibility/mixins/PointerEvents/` — if also handling interactive disabled state

---

## Deduplication

| Candidate                                             | Match                                     | Action                                  |
| ----------------------------------------------------- | ----------------------------------------- | --------------------------------------- |
| `user-select: none` in SCSS files                     | Scattered ad-hoc across 9 files           | Consolidate into shared mixin           |
| `pointer-events: none` in disabled/interactive system | Partial overlap                           | Coordinate with disabled state system   |
| `ActionMixin` (solid-composables)                     | Already resets pointer-events for actions | NoSelect should not re-override actions |

---

## Notes

- **Key design decision**: Is this a wrapper component or a data-attribute mixin? The NOCOMPLY.md suggests both. The mixin approach (`data-no-select`) is more composable and aligns with the existing attribute-based convention (`[data-disabled]`, `[data-surface]`).
- Must ensure actions and links remain clickable even inside a NoSelect region — the note specifically calls out that "action and link already have pointer-events:all".
- The `pointer-events: none` aspect may already be handled by the interactive/disabled system — worth auditing before duplicating.
- Consider naming: `NoSelect`, `NotSelectable`, or `[data-no-select]` attribute. The NOCOMPLY.md also mentions `[data-selectable]` and `[data-not-selectable]` — maybe a two-attribute system is the right abstraction.
