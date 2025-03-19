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

## ContextsProvider as pull

libs/ui-system/src/providers/ContextsProvider/types.ts

export type ContextsProducerCleanupFn: () => void
export type ContextsProducerFn () => {key: UIContextKey, value: UIContextValue}

export type ContextsService = {
createProducer: (producer: ProducerFn) => CleanupProducerFn);
getContext: (key: UIContextKey) => UIContextValue | undefined;
matchContext: (when: Record<UIContextKey, UIContextValue>) => boolean;
dispose: () => void;
};

createContextsServiceProducer(key, produce: () => contexts)

const cleanupProducer = createProducer(produce)
onCleanup(cleanupProducer)
