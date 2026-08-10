# Draft: MODIFY Button — accept MaybeRenderProp children

## Classification

`modify` / `action` / `public` — change Button's children type to support render prop forwarding.

## Identity

Package: `@no-comply/standard-ui`
Module: `action/components/Button`
Status: exists — modify children prop

## Why

Allow consumers to receive forwarded props (e.g. `_icon` from Pressable/ButtonMixin) via render prop without needing additional context or manual prop plumbing.

## Example Usage

```tsx
<Button>
  {({_icon}) => (
    <>
      some text
      <Icon icon="" {..._icon} />
    </>
  )}
</Button>
```

## Changes

### Props

- CHANGE `ButtonProps` — children from `ParentComponent['children']` to `MaybeRenderProp<ButtonChildrenRenderProp>`
- ADD `ButtonChildrenRenderProp` type with forwarded members:

```tsx
type ButtonChildrenRenderProp = {
  _icon: IconProps;    // icon sizing/color props from ButtonMixin
  // future: _label, _spinner, etc.
};
```

### Composition

- `createButton` already returns `_icon` from `ButtonMixinAPI` — this is the data that the render prop receives
- `Button.tsx` uses `resolveRenderProp(children, { _icon })` instead of direct `children` rendering

### Button.tsx (after)

```tsx
type Props = ClosedTagProps & PopoverTriggerTagProps & ButtonProps & {
  children?: MaybeRenderProp<ButtonChildrenRenderProp>;
};

export const Button: Component<Props> = props => {
  const [locals, $others] = splitProps(props, BUTTON_PROPS);
  const { $root, _icon } = createButton(locals);
  const $ = combineProps($others, $root);
  const c = () => resolveRenderProp(props.children, { _icon });
  return <Dynamic {...$}>{c()}</Dynamic>;
};
```

## Impact

Non-breaking — `MaybeRenderProp` accepts both `JSX.Element` (existing usage) and `(props) => JSX.Element` (new). All current `<Button>text</Button>` usage continues to work.
