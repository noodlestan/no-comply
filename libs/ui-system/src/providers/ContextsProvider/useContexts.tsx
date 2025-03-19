import { useContext } from 'solid-js';

import { ContextsContext } from './private';
import { ContextsService } from './types';

export const useContexts = (): ContextsService => {
    const context = useContext(ContextsContext);
    if (!context) {
        throw new Error('useContexts() must be wrapped in <ContextsProvider/>');
    }

    return context;
};
