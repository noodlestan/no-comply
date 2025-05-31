# No Comply

## Responsive Flex and Grid

## remove flex defaults

go throw existing components and discover the patterns - <Column> => column / justify-start / align-start - <Stack> => column / justify-start / align-stretch - <Row> => row / justify-start / align-start - <Bar> => row / justify-between / align-center
same for the app

compose flex / grid into surface?

## user-select and pointer-events

action and link already have pointer-events:all
(test with rest pointer-events:none)

test out both "selectable/not" base resets with [data-selectable] and [data-not-selectable] overrides
make sure actions and links are still ALWAYS not selectable

if display/text components expose [data-display] [data-text] it would be possible to have the reset layer exclude them from the "not selectable" rule

think also labels, data values

## data-\* in all components

## AlignToFirstLineMixin and FirstLineAlignMixin naming!

## use logical attributes everywhere

absolute positioning example:
inset-block-start: 0;
inset-inline-end: 0;

## Layout width references

reading length
max-width: 600px; // WIP Layout width references

## Separator

aria-separator

## Callout

use Flex padding-inline / padding-block instead of double padding
offset the closeButton if there is one
do not render children wrapper if no children present

## Button

```
<Button>
  {iconProps => (
    <>
      some text
      <Icon icon="" {...iconProps} />)
    </>
  )}
</Button>
```

## IconButton

aspect-ratio

## Display, Heading, Text

add aria-heading (+aria-level) when not hX
and aria-paragraph when not p?

## BUG: with sidebar does not update all styles

- resize to mobile, open sidebar, resize to desktop
- navbar shadow not visible over sidebar

## supports test

- popover

```
function supportsPopover() {
return HTMLElement.prototype.hasOwnProperty("popover");
}
```

- container queries
- css functions
- layers

- not supported yet
  /_ abs(0.5 - var(--#{$name}-light)) _/ https://developer.mozilla.org/en-US/docs/Web/CSS/abs

## data-disabled data-active data-readonly

## IA

- LandingPage
  - Hero
    - => Showcase
  - Features
    - accessible
    - composable
    - performant
    - next CSS
    - "expressive"
    - customizable
  - Source Code / Docs / Showcase
  - Contribute
  - Footer
- Showcase
  - Splash
  - Login/Signup
  - TODO
- Features
  - Home
  - Accessibility
  - Architecture (solid, primitives, contexts, composables, component library)
  - Design
    - Space
    - Color
    - Typography
  - Contexts
  - Services
  - Components
  - Composables
- External Links
  - Docs
  - Github
  - Noodlestan
  - Discord
- Settings
  - Mode/Contrast/Space
  - Motion
  - Language

## TabNavigation direction inline/block

- composes NavLink
- make no assumptions about the target (could be full page navigation)
- add NavLink orientation prop, use cases:
  - navbar => underline/over line
  - sidebar (directional i.e. nav vs TOC) => edge

## sketch out TabContainer /context

```
<TabContainer>
    <TabNavigation>
    <TabTarget>
        <Content>
```

## motion helper

setTimeout(() => setIsActive(false), 150);

## createPressable({defaultPrevented})

// event.preventDefault();
=> it also cancels the focus-ring user feedback

## string | undefined => DataBooleanAttribute

'data-is-active': createDataBooleanProp(isActive),

## disabled => inactive

use only data-inactive in CSS

should be on when disabled, aria-disabled, or inactive are true
implement in pressable and others?

## generalize debug

- currently targets only data-surface

## rename setting vars

--color-name-foo => --setting-color-foo
--o-surface-foo => --setting-alpha-foo

## Aria

don't use AriaLabelledAPI directly when we can use AriaRegion (check all composing types)

## Links

vs router (or custom) via navigation service

## Inputs

## Form validation

## FormGroupContext

## Safari

- no scrollbars
- links are not focusable

## Scope surface vars

`@scope ([data-surface]) to ([data-surface])`
https://css-tricks.com/almanac/rules/s/scope/

## abstract input controller around a focus context

- abstract wasTouched

## Tree

- make headless
- provide state via context provider instead of prop

## List

- make headless
- provide state via context provider instead of prop

## ContextsProvider as pull

@no-comply/solid-contexts/providers/ContextsProvider/types.ts

## i18n

- ExpandButton - labels

```ts
export type ContextsProducerCleanupFn: () => void
export type ContextsProducerFn () => {key: UIContextKey, value: UIContextValue}

export type ContextsService = {
    createProducer: (producer: ContextsProducerFn) => ContextsProducerCleanupFn;
    getContext: (key: UIContextKey) => UIContextValue | undefined;
    matchContext: (when: Record<UIContextKey, UIContextValue>) => boolean;
    dispose: () => void;
};

createContextsServiceProducer(key, produce: () => contexts)

const cleanupProducer = createProducer(produce)
onCleanup(cleanupProducer)
```
