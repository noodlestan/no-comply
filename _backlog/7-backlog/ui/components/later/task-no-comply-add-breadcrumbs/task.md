# Draft: Add Breadcrumbs + BreadcrumbItem

> Status: Basic identification + API props discovery

---

## Classification

| Aspect | Value |
|---|---|
| Type | `composed` — compound: Breadcrumbs container + BreadcrumbItem |
| Structure | `compound` — two components designed to be used together |
| State | `interactive` — items navigate (Link/NavLink-based), last item is current page |
| Visibility | `public` |

---

## API Props Discovery

### Breadcrumbs

```tsx
type BreadcrumbsProps = {
  // Structure
  items?: BreadcrumbItemData[];         // alt: render children pattern
  separator?: 'slash' | 'chevron' | 'dot' | ComponentType<{ class?: string }>;
  maxItems?: number;                    // collapse threshold (e.g., 4)
  collapsedLabel?: string;              // e.g. "..." or "More"
  expandOnClick?: boolean;

  // ARIA
  'aria-label'?: string;               // default: "Breadcrumbs"

  // Visual
  size?: ContentSize;
  variant?: 'base' | 'muted';          // style variant
};

type BreadcrumbItemData = {
  href?: string;                       // omit for current/last item
  label: string;
  icon?: IconComponent;
  current?: boolean;                   // aria-current="page"
};
```

### BreadcrumbItem

```tsx
type BreadcrumbItemProps = {
  href?: string;
  icon?: IconComponent;
  children: ComponentProps;

  // ARIA (set automatically by Breadcrumbs when last item)
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time';
};

// Alternatively composed from NavLink + styling mixin
// BreadcrumbItem would essentially be a styled NavLink with:
// - No highlight bar
// - Compact size
// - Muted color (last item is current/emphasized)
```

### Typical Rendering

```html
<nav aria-label="Breadcrumbs">
  <ol>
    <li><a href="/">Home</a></li>         <!-- BreadcrumbItem -->
    <li aria-hidden="true">/</li>         <!-- separator -->
    <li><a href="/components">Components</a></li>
    <li aria-hidden="true">/</li>
    <li aria-current="page">Button</li>   <!-- current page, no href -->
  </ol>
</nav>
```

### Decomposition Notes

| Entity | Kind | Package | Responsibility |
|---|---|---|---|
| `Breadcrumbs` | Component | `standard-ui` | Container — renders `<nav>` > `<ol>` > items + separators |
| `BreadcrumbItem` | Component | `standard-ui` | Wraps NavLink with breadcrumb-specific styling |
| `createBreadcrumbItemMixin` | Mixin | `standard-ui` | Breadcrumb-specific CSS (compact, separator spacing) |

### Styling Expectations

- `ol` reset (list-style: none, flex row)
- Separator spacing via `gap` or `margin-inline`
- Last item: bold / current color, `aria-current="page"`
- Collapsed items: `...` button that expands on click or hover
- Variants: horizontal (default), maybe wrapped for mobile
