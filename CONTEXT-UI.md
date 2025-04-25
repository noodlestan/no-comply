## resolveValue()

is it still needed (versus createComputedProps)

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
