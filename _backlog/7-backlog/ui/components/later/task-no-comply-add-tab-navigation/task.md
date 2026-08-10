# Draft: ADD TabNavigation + TabsContainer

## Classification

`composed` / `navigation` / `stateful` / `public` — compound tab components.

## Identity

Package: `@no-comply/standard-ui`
Module: `navigation/components/TabNavigation`
Status: new entities — sketched in NOCOMPLY.md as:

```tsx
<TabsContainer>     // provider — manages selected tab state
  <TabNavigation>   // nav bar — renders TabNavigationItems
  <TabContain>      // content container
    <TabContent>    // individual tab panel
```

## Dependencies

- `TabNavigationItem` composes `NavLink` with `mode="section"`
- `TabNavigation` composes `Flex` / `Layout` — horizontal/vertical orientation
- `createAriaTabs` from `solid-accessibility` — ARIA tab pattern (tablist, tab, tabpanel)

## Props

```tsx
type TabsContainerProps = {
  value: Accessor<string>;
  onChange: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  children: ComponentProps;
};

type TabNavigationProps = {
  'aria-label'?: string;
  children: ComponentProps;
};

type TabNavigationItemProps = NavLinkProps & {
  value: string;
};

type TabContainProps = {
  children: ComponentProps;
};

type TabContentProps = {
  value: string;
  children: ComponentProps;
};
```

## Accessibility

- **Container:** `role="tablist"`, `aria-orientation`
- **Nav items:** `role="tab"`, `aria-selected`, `aria-controls`
- **Content panels:** `role="tabpanel"`, `aria-labelledby`
- **Keyboard:** Arrow keys to switch tabs, Home/End for first/last

## Decomposition

- `TabsContainer` — context provider wrapping the compound
- `TabNavigation` — flex row/col with `role="tablist"`
- `TabNavigationItem` — extends `NavLink`, binds `aria-selected` from context
- `TabContain` — wrapper container for content
- `TabContent` — solo tabpanel, visibility controlled by `value` match

## Abstraction

- `createAriaTabs` in `solid-accessibility` — ARIA pattern (tablist/tab/tabpanel roles, keyboard nav)
- `createTabs` controller in `solid-composables` — selection state, value binding
- Themed components in `standard-ui` — styling, orientation variants
