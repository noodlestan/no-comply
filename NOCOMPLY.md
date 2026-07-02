# No Comply / Standard UI

## PendingText

<Display><PendingText>{resource()}</PendingText></Display>

## PendingInputBox

<PendingInputBox><TextInput ...></PendingInputBox>

## ToggleButton / ToggleAction

keyboard press not working?

- enter: no trigger
- space: double trigger

## Form inputs

- TextareaInput
- Checkbox
- RadioGroup + RadioGroupItem
- Select
- RangeInput
- SegmentedButton

## interactive

when disabled + interactive

- turns off aria-disabled
- turns on data-disabled instead
- keyboard, mouse should work as normal

## Segmented button - expose variant

## NavLink - add visual indicator for active state

## Pill/Tag

Use it in docs to render tags

## Surface

### nested surfaces

- when nesting a page surface within a panel surface it should have an inset drop shadow that matches the panel's drop shadow

### Scope surface vars

`@scope ([data-surface]) to ([data-surface])`
https://css-tricks.com/almanac/rules/s/scope/

## Layouts

- compose flex + grid into standard Surface?
- Responsive Flex and Grid

### add FlexChildMixin and make Layout compose it

use here apps/standard-ui-demo/src/app/ ... PlaygroundExample + PlaygroundProps
props:

- flex (move it from Flex)

### remove flex defaults

go through existing components and discover the patterns

- <Column> => column / justify-start / align-start
- <Stack> => column / justify-start / align-stretch
- <Row> => row / justify-start / align-start
- <Bar> => row / justify-between / align-center
- <Centered> => stretch row
  same for the app

## OverflowItems

not rendering trigger and content

## Instrumentation

```js
[exposable, api] = _byId('_0b17b') || [];
if (!exposable) {
  console.error('<not-found>');
} else {
  console.log('name:', exposable.name);
  console.log('_id:', api._id);
  Object.keys(api).forEach(k => {
    if (k !== '_id' && k !== '_c') {
      console.log(`api:${k}:`, { ...api[k] });
    }
  });
  console.log('props:', exposable.props);
  exposable.composes().forEach(c => {
    const [x] = _byId(c._id) || [];
    console.log('composes:', c._id, x ? x.name : '<not-found>');
  });
}
```

## user-select and pointer-events

Idea: NoSelect - as a component and as a mixin

action and link already have pointer-events:all
(test with rest pointer-events:none)

test out both "selectable/not" base resets with [data-selectable] and [data-not-selectable] overrides
make sure actions and links are still ALWAYS not selectable

if display/text components expose [data-display] [data-text] it would be possible to have the reset layer exclude them from the "not selectable" rule

think also labels, data values

## use logical attributes everywhere

absolute positioning example:
inset-block-start: 0;
inset-inline-end: 0;

## Layout width references

reading length
max-width: 600px; // WIP Layout width references

## Micro Layout

inset-inline-end: calc(-1 \* var(--\_\_padding-inline));

## Interactive Divider / Panel resizer

aria-separator

## Callout

use Flex padding-inline / padding-block instead of double padding
offset the closeButton if there is one
do not render children wrapper if no children present

## Button

```tsx
<Button>
  {iconProps => (
    <>
      some text
      <Icon icon="" {...iconProps} />
    </>
  )}
</Button>
```

## IconButton / Icon

aspect-ratio

## Popover

- fix: not displaying when there is no space to the right
- fix: events not triggered
- docs: demo `[data-popover-focus-target]`

## MenuItem - hover state for primary

## MenuItem - disabled prop not working

## MenuItem - disallow action variant primary

## Menu - dismiss on scroll

## Menu - max/min width

## Menu - fallback popover placement

- add [data-popover-overflow], center it and style backdrop
- when overflown, what to do with submenu?
  - show "in place", animate?
  - add label and < to submenu?

## MenuItemGroup and MenuItem

- descriptions not syled yet

## MenuItemRadio and MenuItemCheckbox

```ts
export type MenuItemCheckboxProps = MenuItemBaseProps & {
  checked: boolean;
};

export type MenuItemRadioProps = MenuItemBaseProps & {
  checked: boolean;
};
```

## Placement - missing gap implementation

## Scrollable

scrollable controller, can be mixed in anywhere

scrolling component renders own <div> wrapper

- style scrollbar to transparent
- on hover, set scrollbar to hover
- on hover near the scrollbar track highlight it
  - changing to thick probably requires a completely fake scrollbar, no go
- on leave, slow transition back to transparent
- touch devices?

## Divider

fix: tag span (vertical) demo not showing

## Display, Heading, Text

add aria-heading (+aria-level) when not hX
and aria-paragraph when not p?

## BUG: with sidebar does not update all styles

- resize to mobile, open sidebar, resize to desktop
- navbar shadow not visible over sidebar (class is-expanded stays behind)

## TabNavigation direction inline/block

- TabNavigationItem composes NavLink mode=section (can be set to page if target is main)
- make no assumptions about the target (could be full page navigation)
- add NavLink orientation prop, use cases:
  - navbar => underline/over line
  - sidebar (directional i.e. nav vs TOC) => edge

## sketch out TabsContainer /context

```tsx
<TabsContainer> // provider
  <TabNavigation>
  <TabContain>
    <TabContent>
```

## motion helper

setTimeout(() => setIsActive(false), 150);

## generalize debug

- currently targets only data-surface

## rename setting vars

--color-name-foo => --setting-color-foo
--o-surface-foo => --setting-alpha-foo

## Links

vs router (or custom) via navigation service

router vs scroll restoration

### Expose

- search id
  - list components (on component hover )
- click on page
  - traverse to parent collect ids
  - list components
- list component types / counts
  - list component instances by type
- click component => inspect

- inspector
  - id / type
  - parent (type) "rendered by"
  - props
    - key: value
  - composes (type)
  - api
    - key: value
    - data-key: value
    - aria-key: value
    - classList

## Form validation

## FormGroupContext

## Safari

- no scrollbars
- links are not focusable

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

## LTR ExpandButton

```ts
const icons = {
  expanded: createIconValue(ChevronDownIcon),
  collapsed: createIconValue(ChevronRightIcon, ChevronLeftIcon),
};
```

```ts

export type IconComponentValue = { component: IconComponent, rtlComponent: IconComponent };

export type IconValue<A extends unknown[] = []> =
    | IconComponentValue
    | ((...args: A) => IconComponent);


export const createIconValue = (icon: IconComponent, iconRtl?: ... ): IconValue => {
  return {
      component: icon,
      rtlComponent: iconRtl ?? icon
  };
};

```

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

# Standard UI Demo

## Code blocks

- use serializer + prettier + shiki (link nodes!)

## Examples

- ability to express a body function for wrappers (e.g.: declare a signal)
- wrap JSX expressions (if prop says it is, but serialized value not <>)

## Prop Fields

### PropFieldJSX

- evalate before emitting onChange (wrap with <></> before evaluation)
- set input to error if evalation fails

## Code splitting not effective

`babel` loaded by default on everypage

`import type { CompilerAPI, CompilerScope } from '../../../../modules/TSXCompilerModule';`

check also for typescript

## Cacth example compilation errors

Good oportunity to test propagation of errors through resources

## Compile examples with function body

## Sepecialised prop unputs

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

# Purrtrait

add serialize() function to use with syntax highlighters

# Purrtrait Client TSX

// WIP handle render children prop here

// WIP This contract is a duplication from in @purrpose/client-babel but it is unreasonable to depend on that package here.

# Purrception

## Fix: module without name

in `libs/standard-ui/dist/meta.json`

```
{
  "type": "module",
  "name": "content",
  "package": "@no-comply/standard-ui",
  "module": "",
  "path": "src/content",
},
```

## Auto links in descriptions

step 1 - decorate the links at extraction time in `extractDescription()`
step 2 - auto link

## Utility to render links in any JSDoc

apps/standard-ui-demo/src/app/components/code/CodeDocDescription/CodeDocDescription.tsx

## ambient resolutions

make them configurable
package them in `purrception-ambient-jsdom` and `purrception-ambient-solidjs`

examples :
http://localhost:3000/api/@no-comply/solid-contexts/icons#IconComponent
Unresolved token "JSX.Element" in entity "module:icons" (unknown symbol).

http://localhost:3000/features/components/Button#main
Unresolved token "typeof Dynamic" in entity "component:Button" (unknown symbol). getSymbolEntityMaybe.tsx:19:11
Unresolved token "KeyboardEvent" in entity "component:Button" (unknown symbol). getSymbolEntityMaybe.tsx:19:11
Unresolved token "MouseEvent" in entity "component:Button" (unknown symbol).

package in a new package `purrception-ambient-solidjs`

## make component types and prop extraction configurable

currently works with

- returns JSX
- Component
- ParentComponent

make them configurable
inject into options at the top of the stack
trickle down contexts down to where heuristics applied

package in a new package `purrception-solid-js`

## some resolutions skip layers

http://localhost:3000/features/components/ExpandButton

- round - comes from IconButtonProps
- controls, expanded, and labels - from ExpandActionProps
- popoverTarget and popoverTargetAction correctly resolvedd to PopoverTriggerTagProps
- only icons is declared in ExpandButtonProps

culprit is most definitely the omit resolution

## some generics not resolved

example: children T
http://localhost:3000/features/components/Surface#main

## add @noresolve tag to skip resolution

example
http://localhost:3000/api/@no-comply/solid-composables/layout#LayoutPaddingProps
http://localhost:3000/features/components/Layout#main

## Streamline comment extraction

- search: `typeof tag.comment === 'string'`
- extract to function (if it doesn't exist yet)
- make sure arrays are captured as well

## Incomplete resolutions

http://localhost:3000/api/@no-comply/standard-ui/action/component/ExpandButton#ExpandButtonProps
icons?: { expanded: ;collapsed: ; };

http://localhost:3000/api/@no-comply/solid-contexts/container
Unresolved token "ThemeContextVariant" in entity "module:container" (unknown symbol).

http://localhost:3000/api/@no-comply/solid-contexts/icons#IconComponent
Unresolved token "unknown[]" in entity "module:icons" (unknown symbol).
Unresolved token "A" in entity "module:icons" (unknown symbol).

http://localhost:3000/features/components/Button#main
Unresolved token "ComponentProps" in entity "component:Button" (unknown symbol). getSymbolEntityMaybe.tsx:19:11

## Optimize meta.json file size

add `at` path to entities
make symbols `at` relative to entity `at`
make alias optional and remove when not different from name
remove `optional`, `readonly` and `private` when value is false

writer:

- remove `"indexSignatures": []` when empty
- remove `symbols`, `imported` and `declared` when empty
  reader:
- add them back

## Optimize even more

- hash dependencies => store a map of imported symbols
- consider making this optional on write
- check for hashed references on lookup (involves keeping "global" in lookup alongside entity)

```
"global": {
  "symbols": {
    "abc123",
      "name": "combineProps",
      "from": "@no-comply/solid-primitives"
  }
},
"entities": [
  "type": "component",
  "name": "MenuItemGroup",
  ...
  "symbols": {
    "imported": {
      combineProps": {
        "at": "MenuItemGroup.tsx",
        "$": 'abc123'
      },
    }
  }
]
```

# SolidJS

## `/*@once*/` and `textContent` Should we?

https://docs.solidjs.com/reference/jsx-attributes/textcontent

https://docs.solidjs.com/reference/jsx-attributes/once

## HUM!? https://docs.solidjs.com/reference/jsx-attributes/classlist

```
Because classList is a compile-time pseudo-attribute, it does not work in a prop spread like <div {...props} /> or in <Dynamic>.
```

# BROWSER SUPPORT

## supports test

- popover

```ts
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty('popover');
}
```

- container queries
- css functions
- layers

# FUTURE CSS

## Functions

### Color functions handled via SCSS mixin.

- functions for Chrome and Edge.
- fallback colors via calc() based on hue and level, Firefox and Safari.

### For other functions

Provide a fallback via:

```
@supports (-moz-appearance:none) {
    h1 { color:red; }
}
```

See [article](https://devgex.com/en/article/00004557) and[Stack Overflow](https://stackoverflow.com/questions/952861/targeting-only-firefox-with-css#answer-32455002).

## style queries

Not supported in Firefox yet.

```css
@container WithSidebarLayout (min-width: 600px) {
    .WithSidebarLayoutWrapper {
        --WithSidebarLayout-size: large;
    }
}
@container WithSidebarLayoutWrapper style(--WithSidebarLayout-size: large) { ... }
```

## abs() - not supported in Chrome

/_ abs(0.5 - var(--#{$name}-light)) _/ https://developer.mozilla.org/en-US/docs/Web/CSS/abs

## text-box-trim - not supported in Firefox

Potential to default to this mode and gave better control over vertical rhythm, eventually even grid alignment.

https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim

# TO WRITE

- First Line Alignment
- Palettes vs Algorithmic colors css CSS Functions
- Color Calibration
- CSS Layers
- Proxy props

# Studio UI

Toolbars

# Solid Data

https://docs.devexpress.com/WindowsForms/2449/controls-and-libraries/vertical-grid
