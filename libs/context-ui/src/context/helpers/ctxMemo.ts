import { createMemo } from 'solid-js';

import type { BaseContext, ContextFactory, ContextNode } from '../private';

export const ctxMemo = <T extends BaseContext>(f: ContextFactory<T>): ContextFactory<T> => {
    const memo = createMemo(node => f(node as ContextNode));
    return memo;
};
