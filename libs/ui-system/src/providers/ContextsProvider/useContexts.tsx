import { useContext } from 'solid-js';

import { ContextsContext } from './private';
import { ContextsService } from './types';

export const useContexts = (): ContextsService => {
    const api = useContext(ContextsContext);
    if (!('setContext' in api)) {
        throw new Error('useContexts() must be wrapped in <ContextsProvider/>');
    }

    return api;
};
