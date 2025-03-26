import { createSignal } from 'solid-js';

import type { ContextNode } from '../../context/private';

import type {
    FocusContext,
    FocusContextContainerProps,
    FocusContextOptions,
    FocusContextTargetProps,
} from './types';

export const createFocusContext = (
    options: FocusContextOptions = {},
    node?: ContextNode,
): FocusContext => {
    let targetEl: HTMLElement;

    const setTargetRef = (el: HTMLElement) => {
        targetEl = el;
    };

    const [, parentFocus] = node?.parentWith<FocusContext>('focus') || [];

    const [isFocused, setIsFocused] = createSignal(false);
    const [isFocusWithin, setIsFocusWithin] = createSignal(false);

    const containerProps: FocusContextContainerProps = {
        onFocusIn: () => {
            if (!isFocusWithin()) {
                setIsFocusWithin(true);
            }
        },
        onFocusOut: (ev: FocusEvent) => {
            const container = ev.currentTarget as Node | null;
            if (container?.contains(ev.relatedTarget as Node)) {
                return;
            }
            if (isFocusWithin()) {
                setIsFocusWithin(false);
            }
        },
    };

    const targetProps: FocusContextTargetProps = {
        ref: setTargetRef,
        onFocus: () => {
            if (!isFocused()) {
                setIsFocused(true);
            }
        },
        onBlur: () => {
            if (isFocused()) {
                setIsFocused(false);
            }
        },
    };

    const setFocus = () => {
        if (targetEl) {
            targetEl.focus();
            return;
        }
        parentFocus?.setFocus();
    };

    const hasFocusWithin = () => {
        return Boolean(
            isFocusWithin() ||
                node?.childrenWith<FocusContext>('focus', (_, focus) => focus.hasFocusWithin()),
        );
    };

    const context: FocusContext = {
        type: 'focus',
        node,
        index: options.index,
        containerProps,
        targetProps,
        setFocus,
        hasFocus: isFocused,
        hasFocusWithin,
    };

    return context;
};
