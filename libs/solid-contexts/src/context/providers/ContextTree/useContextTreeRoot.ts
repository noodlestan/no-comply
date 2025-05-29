import { useContext } from 'solid-js';

import { type ContextNode, ContextRootCTX } from '../../private';

export const useContextTreeRoot = (): ContextNode => {
    const [root] = useContext(ContextRootCTX) || [];
    if (!root) {
        throw new Error('useContextRoot() must be wrapped in <ContextRootProvider/>');
    }

    return root;
};
