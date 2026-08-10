# Draft: ADD Layout components (Column, Stack, Row, Bar, Centered)

## Classification

`wrapper` / `layout` / `visual-only` / `public` — presets of Flex/Layout with fixed defaults.

## Identity

Package: `@no-comply/standard-ui`
Module: `layout/components/`
Status: new entities — thin wrappers around Flex/Layout with opinionated defaults.

**Not in scope:** Compose into Surface (dropped).

## Each component

| Component | Defaults | Renders |
|---|---|---|
| `<Column>` | `flex-direction: column`, `justify: start`, `align: start` | `<Flex>` |
| `<Stack>` | `flex-direction: column`, `justify: start`, `align: stretch` | `<Flex>` |
| `<Row>` | `flex-direction: row`, `justify: start`, `align: start` | `<Flex>` |
| `<Bar>` | `flex-direction: row`, `justify: between`, `align: center` | `<Flex>` |
| `<Centered>` | `flex-direction: row`, `justify: center`, `align: center` | `<Flex>` |

All accept standard `FlexProps` — defaults can be overridden.

## API

```tsx
// All share FlexProps — no new props
type ColumnProps = FlexProps;   // defaults: direction=column, justify=start, align=start
type StackProps = FlexProps;    // defaults: direction=column, justify=start, align=stretch
type RowProps = FlexProps;      // defaults: direction=row, justify=start, align=start
type BarProps = FlexProps;      // defaults: direction=row, justify=space-between, align=center
type CenteredProps = FlexProps; // defaults: direction=row, justify=center, align=center
```

## Decomposition

Each is a 5-line wrapper:

```tsx
const Column: Component<FlexProps> = props => (
  <Flex {...props} direction="column" justify="start" align="start" />
);
```

No new mixins or controllers — pure prop forwarding.
