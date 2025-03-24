import { createSignal } from 'solid-js';

import type { ContextNode } from '../../context/private';

import type { FocusContext, FocusContextHandlers, FocusContextOptions } from './types';

export const createFocusContext = (
    options: FocusContextOptions = {},
    node?: ContextNode,
): FocusContext => {
    const [, parentFocus] = node?.parentWith<FocusContext>('focus') || [];

    const [hasFocus, setHasFocus] = createSignal(false);

    const handlers: FocusContextHandlers = {
        onFocusIn: () => {
            if (!hasFocus()) {
                setHasFocus(true);
            }
        },
        onFocusOut: (ev: FocusEvent) => {
            const target = ev.currentTarget as Node | null;
            if (target?.contains(ev.relatedTarget as Node)) {
                return;
            }
            if (hasFocus()) {
                setHasFocus(false);
            }
        },
    };

    const setFocus = () => {
        const target = options.target?.();
        if (target) {
            target();
            return;
        }
        parentFocus?.setFocus();
    };

    const hasFocusWithin = () => {
        return Boolean(
            hasFocus() ||
                node?.childrenWith<FocusContext>('focus', (_, focus) => focus.hasFocusWithin()),
        );
    };

    const context: FocusContext = {
        type: 'focus',
        node,
        index: options.index,
        handlers,
        setFocus,
        hasFocus,
        hasFocusWithin,
    };

    return context;
};
