import { useContext } from 'solid-js';

import type { ContextNode } from '../../private';

import { ContextRootContext } from './private';

export const useContextRoot = (): ContextNode => {
    const root = useContext(ContextRootContext);
    if (!root) {
        throw new Error('useContextRoot() must be wrapped in <ContextRootProvider/>');
    }

    return root.node;
};
