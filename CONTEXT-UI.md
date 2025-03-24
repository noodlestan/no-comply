## kill SurfaceUnstyled

and make Surface receive attributes and not have any inputHandlers

- expand focusContext ?
- add a createInteraction(focusContext) ?

## abstract input controller around a focus context

- abstract wasTouched

## Button

- make headless

## Tree

- make headless
- provide state via context provider instead of prop

## List

- make headless
- provide state via context provider instead of prop

## Surface / Buttons / Actions

onTap => onTouch

## ContextsProvider as pull

libs/ui-system/src/providers/ContextsProvider/types.ts

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
