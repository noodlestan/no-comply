import { createEffect, onCleanup } from 'solid-js';

import type { ContextNode } from '../../context';

import { collectContextVars, updateElementStyles } from './private';

export const createContextVarsEffect = (
    context: ContextNode,
    contextElement: HTMLElement,
): void => {
    const previous: ReturnType<typeof updateElementStyles> = {};

    createEffect((previous?: ReturnType<typeof updateElementStyles>) => {
        return updateElementStyles(contextElement, collectContextVars(context), previous);
    });

    onCleanup(() => {
        updateElementStyles(contextElement, {}, previous);
    });
};
