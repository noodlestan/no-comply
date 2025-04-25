import { onCleanup, useContext } from 'solid-js';

import {
    type BaseContext,
    ContextNodeCTX,
    type ContextNodeOptions,
    type ContextNodeValue,
    createContextNodePrivate,
} from '../../private';

export const createContextNode = (
    context: BaseContext,
    options: ContextNodeOptions = {},
): ContextNodeValue => {
    const [parent, ownerAPI] = useContext(ContextNodeCTX) || [];

    if (!parent || !ownerAPI) {
        throw new Error('createContextNode() must be wrapped in <ContextRootProvider/>');
    }

    const [node, nodeOwnerAPI] = createContextNodePrivate(context, options, parent);
    ownerAPI.addChild(node);

    onCleanup(() => {
        ownerAPI?.removeChild(node);
    });

    return [node, nodeOwnerAPI];
};
