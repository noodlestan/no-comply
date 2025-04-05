import type { UIContextKey, UIContextValue } from '../../controllers';

import type { ContextsService } from './types';

export const createContextsService = (): ContextsService => {
    console.info('createContextsService()');

    const contexts = new Map<UIContextKey, UIContextValue>();

    const setContext = (key: UIContextKey, value: UIContextValue) => {
        contexts.set(key, value);
    };

    const getContext = (key: UIContextKey): UIContextValue | undefined => {
        return contexts.get(key);
    };

    const matchContext = (when: Record<UIContextKey, UIContextValue>): boolean => {
        for (const [key, expectedValue] of Object.entries(when)) {
            const contextValue = contexts.get(key);
            if (contextValue !== expectedValue) {
                return false;
            }
        }
        return true;
    };

    const unsetContext = (key: UIContextKey) => {
        contexts.delete(key);
    };

    const dispose = () => {
        contexts.clear();
    };

    const api: ContextsService = {
        setContext,
        getContext,
        matchContext,
        unsetContext,
        dispose,
    };

    return api;
};
