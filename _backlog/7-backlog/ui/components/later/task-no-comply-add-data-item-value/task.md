# Draft: ADD DataItem + DataValue (complete existing)

## Classification

`composed` / `content` / `visual-only` / `public` — label+value data display pair.

## Identity

Package: `@no-comply/standard-ui`
Module: `content/components/DataItem`, `content/components/DataValue`
Status: prototypes exist — need completion (API alignment, styling)

## Dependencies

Composes existing:
- `LayoutMixin` — padding/arrangement
- `Typography` components — label/value rendering
- (optional) `createDataValue` controller for formatting

## API (provisional)

```tsx
// DataItem — labeled data row
type DataItemProps = LayoutMixinProps & {
  label: string;
  orientation?: 'horizontal' | 'vertical';
  children: ComponentProps;       // the DataValue or custom content
};

// DataValue — formatted value display
type DataValueProps = {
  value: Accessor<unknown>;
  format?: 'text' | 'number' | 'date' | 'code';
  locale?: string;
  placeholder?: string;           // shown when value is null/undefined
  size?: ContentSize;
};
```

## Styling

- `.DataItem` — flex row/col with gap
- `.DataItem-label` — typography muted
- `.DataValue` — value typography
- `.DataValue.is-placeholder` — muted/italic when no value

## Decomposition

- `createDataItemMixin` in standard-ui — layout + label styling
- `createDataValueMixin` in standard-ui — value formatting + styling
- Value formatting: could use existing i18n service for number/date locale
