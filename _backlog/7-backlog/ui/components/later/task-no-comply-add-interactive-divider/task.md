# Draft: Add Interactive Divider / Panel Resizer

> Generated from NOCOMPLY.md item "Interactive Divider / Panel Resizer"
> Status: Draft — classification, API design, decomposition

---

## Classification

| Aspect | Value |
|---|---|
| Type | `composed` — builds on existing Divider + AriaSeparator infrastructure |
| Structure | `standalone` — single component, optional compound with panel containers |
| State | `stateful` / `interactive` — owns drag state, responds to pointer events |
| Visibility | `public` — exported component |
| Package | `standard-ui` (component) + `solid-composables` (controller) |

---

## API Design

### Identity

- **InteractiveDivider** — `component:standard-ui:interactive-divider` at `$PROJECT/src/layout/components/InteractiveDivider/`
- New entity — no existing interactive divider to extend

### Reference: Existing Divider architecture

The current `Divider` is purely visual:

```
AriaSeparator (solid-accessibility)  ← role="separator", aria-orientation
  └── DividerMixin (solid-composables)  ← headless, data-separator
        └── DividerMixin (standard-ui)  ← variant, length, CSS module
              └── Divider (standard-ui)  ← thin component, role="presentation"
```

`InteractiveDivider` extends this by adding drag-to-resize behavior.

### Dependencies

| Dependency | Package | Role |
|---|---|---|
| `createAriaSeparator` | `@no-comply/solid-accessibility` | ARIA `separator` role, orientation |
| `createDividerMixin` (headless) | `@no-comply/solid-composables` | Base data attributes |
| `createDividerMixin` (themed) | `standard-ui` | Variant + length styling |
| `createPanelResizer` **(NEW)** | `solid-composables` | Drag resize logic |

#### Props shape (provisional)

```tsx
type InteractiveDividerProps = {
  // Divider props
  variant?: DividerVariant;        // 'base' | 'strong' | 'muted' | 'alt'
  length?: DividerLengthProp;      // number | 'short' | 'medium' | 'long' | 'full'
  orientation?: 'horizontal' | 'vertical';

  // Interactive props
  onResize?: (delta: number) => void;
  onResizeStart?: () => void;
  onResizeEnd?: () => void;
  minWidth?: number;
  maxWidth?: number;

  // Aria
  'aria-controls'?: string;
  'aria-valuenow'?: number;
  'aria-valuemin'?: number;
  'aria-valuemax'?: number;
};
```

### Renders

- InteractiveDivider renders a `<div>` (or `<hr>`) with `role="separator"`, `aria-orientation`, `aria-valuenow`, `tabindex="0"`
- Adds drag handle region (thicker hit area than visual divider)

### State & Interaction

- **States**: `idle`, `hover`, `active` (dragging), `focused`
- **Keyboard**: Arrow keys to resize by stepped increments
- **Pointer**: mousedown + mousemove drag to resize, touch support
- **ARIA**: `separator` role with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` for adjustable splitter pattern

### Styling (standard-ui)

- Variant classes: `.variant-{variant}` (inherited from divider)
- State classes: `.is-active` (dragging), `.is-hover`, `.is-focused`
- Orientation: `.orientation-horizontal`, `.orientation-vertical`
- Additional: `--interactive-divider-hit-area` CSS variable for drag handle thickness
- CSS module: `InteractiveDivider.module.scss`

---

## Decomposition

### Proposed entities

| Entity | Kind | Package | Responsibility |
|---|---|---|---|
| `createPanelResizer` | Controller | `solid-composables` | Pointer tracking, delta calculation, keyboard step resize, constraints |
| `InteractiveDividerMixin` | Mixin | `standard-ui` | Themed styles for interactive states |
| `InteractiveDivider` | Component | `standard-ui` | Composes resizer + divider mixins, renders themed element |

### Potential abstractions to solid-composables

- `createPanelResizer` should be generic — no styling, no markup assumption. Just drag logic with callbacks for `onResize(delta)`.
- Could also expose a `createPanelResizerMixin` that binds `data-resizing` attribute.
- The component in standard-ui composes `createPanelResizer` + `createDividerMixin` + `InteractiveDividerMixin`.

---

## Deduplication

| Candidate | Match | Action |
|---|---|---|
| `createAriaSeparator` (solid-accessibility) | Full match for separator role | Compose directly |
| `createDividerMixin` (solid-composables) | Full match for headless divider | Compose directly |
| `createDividerMixin` (standard-ui) | Full match for themed styling | Compose directly |
| `Divider` (standard-ui) | Reference — visual-only, not interactive | Build upon its mixins |
| Drag/resize logic in codebase | **None found** | New entity |

---

## Notes

- The `aria-separator` with `aria-valuenow` is the WAI-ARIA "adjustable splitter" pattern, not the static `role="separator"` used by Divider. `InteractiveDivider` should use `role="separator"` with `aria-valuenow` (the separator role supports valuenow when the element is focusable and adjustable).
- The existing `Divider` uses `role="presentation"`, so `InteractiveDivider` is a semantic departure from the visual-only divider — they share mixins but have different ARIA semantics.
- Consider using a `div` with `role="separator"` and `tabindex="0"` rather than `<hr>` for keyboard accessibility.
