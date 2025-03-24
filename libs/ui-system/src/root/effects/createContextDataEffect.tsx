import { createEffect, onCleanup } from 'solid-js';

import type { ContextNode } from '../../context';

import { collectContextData, updateElementData } from './private';

export const createContextDataEffect = (
    context: ContextNode,
    prefix?: string,
    contextElement?: HTMLElement,
): void => {
    let previous: ReturnType<typeof updateElementData> = [];

    createEffect(() => {
        previous = updateElementData(contextElement, prefix, collectContextData(context), previous);
    });

    onCleanup(() => {
        updateElementData(contextElement, prefix, {}, previous);
    });
};
