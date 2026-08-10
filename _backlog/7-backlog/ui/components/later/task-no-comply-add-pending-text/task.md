# Draft: Add PendingText + SkeletonText

## Classification

`composed` / `feedback` / `public` — wraps any typography component with Suspense fallback.

## Entities

| Entity | Kind | Package | Responsibility |
|---|---|---|---|
| `PendingText` | Component | `standard-ui` | Wraps children/`resource()` in Suspense, falls back to `SkeletonText` |
| `SkeletonText` | Component | `standard-ui` | Renders a gray static block matching typography dimensions |
| `SkeletonTextMixin` | Mixin | `standard-ui` | CSS for skeleton: gray bg, rounded, pulse animation |

## PendingText API

```tsx
type PendingTextProps = {
  resource?: Resource<unknown>;
  children?: ComponentProps;
  // Forwarded to child typography component
  as?: ComponentType;       // e.g. Text, Display, Label
  size?: ContentSize;
  // Skeleton sizing
  skeletonWidth?: string;   // e.g. '60%', '200px'
  skeletonHeight?: string;  // overrides line-height default
};
```

## SkeletonText API

```tsx
type SkeletonTextProps = {
  width?: string;
  height?: string;
  lines?: number;           // multi-line skeleton
  class?: string;
};
```

## Composition

```
PendingText
  └── Suspense (resource)
        ├── fallback: <SkeletonText>
        └── children: <Text> or <Display> etc.
```

`SkeletonText` → `createSkeletonTextMixin` → CSS module `.SkeletonText` (gray bg, rounded, pulse)
