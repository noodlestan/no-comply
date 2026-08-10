# Draft: ADD RangeInput (complete existing)

## Classification

`composed` / `input` / `stateful` / `public` — range/slider input.

## Identity

Package: `@no-comply/standard-ui`
Module: `input/components/RangeInput`
Status: exists — needs completion (value binding, styling, accessibility)

## Dependencies

Composes existing:
- `createBaseInput` — root props, id
- `createTextInputValue` (or dedicated range value controller) — value state
- `createInputBoxMixin` / `createSizedInputBoxMixin` — sizing
- `createAriaSlider` (solid-accessibility) — ARIA slider pattern

## Props (provisional)

```tsx
type RangeInputProps = BaseInputProps &
  SizedInputBoxMixinProps & {
    value: Accessor<number>;
    onChange: (value: number) => void;
    min?: number;          // default 0
    max?: number;          // default 100
    step?: number;         // default 1
    minLabel?: string;     // aria-valuemin label
    maxLabel?: string;     // aria-valuemax label
    showValue?: boolean;   // display current value
  };
```

## Accessibility

- Role: `slider`
- Keyboard: Arrow keys to increment/decrement, Home/End for min/max
- ARIA: `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-orientation`

## Styling

- Track: `.RangeInput-Track`, `.RangeInput-Track.is-active`
- Thumb: `.RangeInput-Thumb`, `.RangeInput-Thumb.is-focused`
- State: `.is-disabled`
- Variants: `size-{size}` from `SizedInputBoxMixin`

## Decomposition

- `createRangeInputValue` controller in `solid-composables` — value clamping, stepping, keyboard
- No new mixins needed — sizing via existing mixins
- Track/thumb rendering — private parts or inline in component
