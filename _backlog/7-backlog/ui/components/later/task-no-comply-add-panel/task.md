# Draft: Add Panel / ToolbarPanel

> Status: Basic identification + API props discovery
> Context: Needed in the demo app playground — coordinated surface containers.

---

## Classification

| Aspect | Value |
|---|---|
| Type | `composed` — builds on Surface + Layout mixins, potentially coordinated via context |
| Structure | `standalone` or `compound` — Panel can be standalone, ToolbarPanel is a Panel with integrated Toolbar |
| State | `stateful` — optionally collapsible, may track panel identity |
| Visibility | `public` |

---

## API Props Discovery

### Panel

A Panel is a **Surface with header and body sections** — a coordinated container.

```tsx
type PanelProps = {
  // Surface props
  variant?: SurfaceVariant;           // 'panel', 'page', 'stage', etc.
  tag?: LayoutTagName;                // default: 'section'

  // Layout
  padding?: LayoutPadding;            // default: 'm'

  // Panel-specific
  title?: string;                     // renders a header
  subtitle?: string;                  // secondary header text
  headerTag?: 'h1' | 'h2' | 'h3' | 'h4';    // header heading level

  // Collapsible
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  collapsed?: boolean;                // controlled
  onToggle?: (collapsed: boolean) => void;

  // Panel coordination (for split-panel layouts)
  panelId?: string;                   // identity for coordination
  minWidth?: number;
  maxWidth?: number;

  // ARIA
  role?: 'region' | 'group' | 'none';
  'aria-label'?: string;
  'aria-labelledby'?: string;

  // Children
  children: ComponentProps;
  header?: ComponentProps;            // slot for custom header content
  footer?: ComponentProps;            // slot for footer content
};
```

### ToolbarPanel

A ToolbarPanel is a **Panel with an integrated Toolbar** — likely a Panel whose header slot contains a Toolbar.

```tsx
type ToolbarPanelProps = PanelProps & {
  // Toolbar props (forwarded)
  toolbarVariant?: SurfaceVariant;
  toolbarDensity?: 'comfortable' | 'compact';
  toolbarItems?: ToolbarItem[];       // declarative toolbar items
  // or: children pattern with <Toolbar> slot
};
```

### Expected Usage

```tsx
// Standalone Panel
<Panel title="Properties" variant="panel">
  <Field label="Width">
    <NumberInput />
  </Field>
  <Field label="Height">
    <NumberInput />
  </Field>
</Panel>

// Panel with Toolbar
<ToolbarPanel title="Playground" toolbarDensity="compact">
  <Toolbar>
    <Button size="small">Run</Button>
  </Toolbar>
  <Canvas>...</Canvas>
</ToolbarPanel>

// Coordinated panels (split view)
<Panel panelId="explorer" minWidth={200} collapsible>
  <TreeList />
</Panel>
<Panel panelId="content" variant="page">
  {/* main content */}
</Panel>
```

### Decomposition Notes

| Entity | Kind | Package | Responsibility |
|---|---|---|---|
| `Panel` | Component | `standard-ui` | Surface + header/footer layout, optional collapsible |
| `ToolbarPanel` | Component | `standard-ui` | Panel with integrated Toolbar in header (extension of Panel) |
| `createPanelMixin` | Mixin | `standard-ui` | Panel-specific CSS (header, body, footer sections) |
| `PanelContext` | Context | `solid-contexts` | Optional — for coordinating multiple panels (e.g., resize handles) |

### Relationship to Existing Components

- **Surface** provides: variant, context vars, theme tokens
- **Surface children pattern** already exists (`<Surface>{({ surface }) => ...}</Surface>`)
- **Toolbar** (separate draft) would be the header content of ToolbarPanel
- **Interactive Divider** (separate draft) would be the resize handle between coordinated panels
- **Layout** provides: padding for body content
- **Scrollable** may compose into Panel body for overflow content

### Styling Expectations

- Panel header: flex row with title + optional actions
- Panel body: padded area, possibly scrollable
- Panel footer: muted background or border-top
- Collapsible: chevron icon in header, smooth height transition
- `variant="panel"` surfaces should work with nested shadow rules from `Surface`
