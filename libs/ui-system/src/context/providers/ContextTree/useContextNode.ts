import { useContext } from 'solid-js';

import type { ContextNode } from '../../private';

import { ContextNodeContext } from './private';

export const useContextNode = (): ContextNode => {
    const current = useContext(ContextNodeContext);
    if (!current) {
        throw new Error(
            'useContextNode() must be wrapped in <ContextRootProvider/> or <ContextNodeProvider/>',
        );
    }

    return current.node;
};
