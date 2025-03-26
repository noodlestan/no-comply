import { type Accessor, onCleanup, useContext } from 'solid-js';

import type {
    BaseContext,
    ContextFactory,
    ContextNodeOptions,
    ContextOwnerAPI,
} from '../../private';

import { ContextNodeContext } from './private';

export const createContextNode = (
    contexts: Accessor<ContextFactory<BaseContext>[]>,
    options: ContextNodeOptions = {},
): ContextOwnerAPI => {
    const parent = useContext(ContextNodeContext);
    if (!parent) {
        throw new Error('createContextNode() must be wrapped in <Context/>');
    }

    const node = parent.createChildNode(contexts, options);

    onCleanup(() => {
        parent.removeChildNode(node);
    });

    return node;
};
