import { type Accessor, createEffect, onCleanup } from 'solid-js';

import type { BaseContext } from '../../context';

import { mergeContextVars, updateElementStyles } from './private';

export const createContextVarsEffect = (
    contexts: Accessor<BaseContext[]>,
    contextElement: HTMLElement,
): void => {
    let previous: ReturnType<typeof updateElementStyles> = {};

    createEffect(() => {
        const vars = mergeContextVars(contexts());
        previous = updateElementStyles(contextElement, vars, previous);
    });

    onCleanup(() => {
        updateElementStyles(contextElement, {}, previous);
    });
};
