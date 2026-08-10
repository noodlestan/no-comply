# Draft: Add Toolbar

> Status: Basic identification + API props discovery
> Context: Needed in the demo app playground — a surface container for action rows.

---

## Classification

| Aspect | Value |
|---|---|
| Type | `composed` — builds on Surface + Layout mixins |
| Structure | `standalone` — single component, flexible container |
| State | `visual-only` — no state, purely presentational container |
| Visibility | `public` |

---

## API Props Discovery

### Toolbar

Toolbar is essentially a **themed Surface** configured for action/tool rows. It aligns with the existing `Surface` + `Layout` / `Flex` infrastructure.

```tsx
type ToolbarProps = {
  // Surface props (inherited)
  variant?: SurfaceVariant;         // 'stage', 'panel', etc.
  tag?: LayoutTagName;              // default: 'div'

  // Layout / Flex props (inherited)
  padding?: LayoutPadding;          // default: 's' or 'm'
  gap?: FlexGap;                    // spacing between toolbar items
  orientation?: 'horizontal' | 'vertical';
  wrap?: boolean;
  justify?: 'start' | 'center' | 'end' | 'space-between';
  align?: 'start' | 'center' | 'end' | 'stretch';

  // Toolbar-specific
  density?: 'comfortable' | 'compact';   // controls padding density

  // ARIA
  role?: 'toolbar' | 'group' | 'none';   // default: 'toolbar'
  'aria-label'?: string;
  'aria-controls'?: string;
};
```

### Expected Usage

```tsx
// In demo app playground
<Toolbar>
  <Select options={presets} />
  <SegmentedButton ... />
  <IconButton icon={Refresh} />
  <IconButton icon={Settings} />
</Toolbar>

<Toolbar variant="panel" density="compact">
  <Button size="small">Save</Button>
  <Button size="small" variant="muted">Cancel</Button>
</Toolbar>
```

### Decomposition Notes

| Entity | Kind | Package | Responsibility |
|---|---|---|---|
| `Toolbar` | Component | `standard-ui` | Thin component composing Surface + Flex/Layout mixins with toolbar defaults |
| `createToolbarMixin` | Mixin | `standard-ui` | Toolbar-specific CSS (density, role styling) — optional, may fold into Surface |

### Relationship to Existing Components

- **Surface** provides: variant, context vars, data-surface attributes
- **Layout** provides: padding
- **Flex** provides: gap, justify, align, wrap, orientation
- Toolbar just configures sensible defaults (padding='s', role='toolbar', orientation='horizontal')
- No new composable controller needed unless toolbar-specific behavior emerges (e.g., overflow menu for overflow items)

### Styling Expectations

- `role="toolbar"` with `aria-orientation` and `aria-label`
- Horizontal flex row with `gap` between children
- `density="compact"` reduces padding, ideal for icon-only toolbars
- Second surface level (variant `"panel"`) should work with nested Surface shadow rules
