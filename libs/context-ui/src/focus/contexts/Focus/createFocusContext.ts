import { createSignal } from 'solid-js';

import type { ContextNode } from '../../../context';

import type { FocusContext, FocusContextOptions } from './types';

export const createFocusContext = (
    options: FocusContextOptions = {},
    node?: ContextNode,
): FocusContext => {
    let targetEl: HTMLElement;

    const [, parentFocus] = node?.parentWith<FocusContext>('focus') ?? [];

    const [hasFocus, setHasFocus] = createSignal(false);
    const [hasFocusWithin, setHasFocusWithin] = createSignal(false);

    const setFocus = () => {
        if (targetEl) {
            targetEl.focus();
            return;
        }
        parentFocus?.setFocus();
    };

    const setTargetRef = (el: HTMLElement) => {
        targetEl = el;
        if (options.autoFocus) {
            setFocus();
        }
    };

    const hasFocusWithinOrNested = () => {
        if (hasFocusWithin()) {
            return true;
        }
        return Boolean(
            node?.hasChildWith<FocusContext>('focus', (_, focus) => focus.hasFocusWithin()),
        );
    };

    const context: FocusContext = {
        type: 'focus',
        node,
        index: options.index,
        setTargetRef,
        setFocus,
        hasFocus,
        setHasFocus,
        hasFocusWithin: hasFocusWithinOrNested,
        setHasFocusWithin,
    };

    return context;
};
