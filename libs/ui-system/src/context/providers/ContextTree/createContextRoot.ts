import type { Accessor } from 'solid-js';

import type {
    BaseContext,
    ContextFactory,
    ContextNodeOptions,
    ContextOwnerAPI,
} from '../../private';

import { createContextNodeAPI } from './private';

export const createContextRoot = (
    contexts: Accessor<ContextFactory<BaseContext>[]>,
    options: ContextNodeOptions = {},
): ContextOwnerAPI => {
    const root = createContextNodeAPI(contexts, undefined, options);

    return root;
};
