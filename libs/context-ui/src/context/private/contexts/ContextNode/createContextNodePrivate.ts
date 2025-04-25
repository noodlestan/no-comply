import { shortId } from '@noodlestan/context-ui-primitives';
import { createSignal } from 'solid-js';

import type { BaseContext, ContextNode, ContextNodeOptions, ContextNodeValue } from '../..';

export const createContextNodePrivate = (
    context?: BaseContext,
    options: ContextNodeOptions = {},
    parent?: ContextNode,
): ContextNodeValue => {
    const [children, setChildren] = createSignal<ContextNode[]>([]);

    const node = {
        id: options.id?.ctxId ?? shortId(),
        value: context,
        parent,
        children,
    };

    const addChild = (child: ContextNode) => {
        setChildren(prev => [...prev, child]);
    };

    const removeChild = (child: ContextNode) => {
        setChildren(prev => prev.filter(context => context !== child));
    };

    const ownerAPI = {
        addChild,
        removeChild,
    };

    return [node, ownerAPI];
};
