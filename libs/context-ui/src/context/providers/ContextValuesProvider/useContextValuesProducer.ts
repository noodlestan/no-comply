import { type Accessor, onCleanup, useContext } from 'solid-js';

import type { ContextValue } from '../../types';

import { ContextValuesContext } from './private/ContextValuesContext';

export const useContextValuesProducer = (values: Accessor<ContextValue[]>): void => {
    const context = useContext(ContextValuesContext);
    if (!context) {
        throw new Error('useContextValuesProducer() must be wrapped in <ContextValuesProvider/>');
    }

    context.registerValues(values);
    onCleanup(() => {
        context.unregisterValues(values);
    });
};
