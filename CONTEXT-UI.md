## use logical attributes everywhere

example:
inset-block-start: 0;
inset-inline-end: 0;

## selected color vs NavLink

- NavLink variant horizontal (tab-like, underline) vs vertical (sidebar)

## icon button symmetrical padding

## compact class names in all CSS modules

## outline mixin

add outline offset effect to keyboard interaction

## generalize debug

- currently targets only data-surface

## rename setting vars

--color-name-foo => --setting-color-foo
--o-surface-foo => --setting-alpha-foo

## omit --l --p ?

## scss nested rule warning

## App Header

## Aria

AriaLabelledAPI, => AriaRegion ???

## Links

vs router (or custom) via navigation service

## Inputs

## Form validation

## FormGroupContext

## Display, Heading, Text

add aria-heading (+aria-level)
and aria-paragraph

## Callout

add aria-note

## Separator

aria-separator

## Scope surface vars

`@scope ([data-surface]) to ([data-surface])`
https://css-tricks.com/almanac/rules/s/scope/

## data-disabled

make sure it is added to all disable-able controllers (from aria up)

## abstract input controller around a focus context

- abstract wasTouched

## Tree

- make headless
- provide state via context provider instead of prop

## List

- make headless
- provide state via context provider instead of prop

## ContextsProvider as pull

@noodlestan/context-ui/providers/ContextsProvider/types.ts

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
