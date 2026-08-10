# Draft: ADD FlexChildMixin

## Classification

`composed` / `layout` / `visual-only` / `public` — reusable flex child behavior.

## Identity

Package: `@no-comply/standard-ui`
Module: `layout/mixins/FlexChild`
Factory: `createFlexChildMixin`
Status: new entity

## Context

Currently `flex` props exist only on `Flex` (the container). `FlexChildMixin` moves per-child flex props (grow, shrink, basis, align-self) into a shared mixin that `Layout`, `Flex`, `Grid`, `Surface`, and standalone components can compose.

## Dependencies

- `createHeadlessFlexChildMixin` from `solid-composables` (new) — attribute-based `data-flex-*` 
- Or: inline computed props in `standard-ui` mixin

## Props

```tsx
type FlexChildMixinProps = {
  flex?: string;                // shorthand: flex: 1 1 auto
  grow?: boolean | number;
  shrink?: boolean | number;
  basis?: string | number;
  alignSelf?: 'start' | 'center' | 'end' | 'stretch';
  order?: number;
};
```

## Composition

`Layout` composes `FlexChildMixin` when `flex` prop is provided:
```
Layout
  └── createLayoutMixin()
  └── createFlexChildMixin()   ← NEW, conditionally applied
```

## Deduplication

Current `Flex.tsx` has inline `flex` prop handling — extract into shared mixin.

## Abstraction

- Headless: `createFlexChildMixin` in `solid-composables/src/layout/mixins/FlexChild/` — exposes `data-flex-*` attributes
- Themed: `createFlexChildMixin` in `standard-ui/src/layout/mixins/FlexChild/` — CSS module classes
