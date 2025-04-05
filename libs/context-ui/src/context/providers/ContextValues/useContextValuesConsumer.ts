import { type Accessor, useContext } from 'solid-js';

import type { ContextValue } from '../../private';

import { ContextValuesContext } from './private/ContextValuesContext';

export const useContextValuesConsumer = <T extends ContextValue>(
    type: string,
    name: string,
): Accessor<T[]> => {
    const context = useContext(ContextValuesContext);
    if (!context) {
        throw new Error('useContextValuesConsumer() must be wrapped in <ContextValuesProvider/>');
    }

    return () => context.resolveValue(type, name);
};
