# Draft: Add PendingInputBox + SkeletonInputBox

## Classification

`composed` / `feedback` / `public` — wraps form inputs with Suspense fallback.

## Entities

| Entity | Kind | Package | Responsibility |
|---|---|---|---|
| `PendingInputBox` | Component | `standard-ui` | Wraps TextInput/Select/etc in Suspense |
| `SkeletonInputBox` | Component | `standard-ui` | Gray placeholder matching input dimensions |
| `SkeletonInputBoxMixin` | Mixin | `standard-ui` | CSS skeleton + composes SizedInputBoxMixin + ContentLengthMixin |

## PendingInputBox API

```tsx
type PendingInputBoxProps = {
  resource?: Resource<unknown>;
  children?: ComponentProps;
  // Proxied to SkeletonInputBox
  size?: ContentSize;
  length?: ContentLengthProp;   // match the actual input's length
  // Which input component to render
  as?: ComponentType;           // TextInput | Select | NumberInput
};
```

## SkeletonInputBox API

```tsx
type SkeletonInputBoxProps = {
  size?: ContentSize;
  length?: ContentLengthProp;
};
```

## Composition

```
PendingInputBox
  └── Suspense (resource)
        ├── fallback: <SkeletonInputBox size={} length={} />
        └── children: <TextInput size={} length={} />
```

`SkeletonInputBox` → `createSkeletonInputBoxMixin` which composes:
- `createSizedInputBoxMixin` (from standard-ui input mixins) — gets correct height/padding
- `createContentLengthMixin` (from standard-ui content) — gets correct width
- Local CSS: gray bg, rounded, pulse animation
