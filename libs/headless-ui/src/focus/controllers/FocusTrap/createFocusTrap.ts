import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import { getFocusableElements } from '../../helpers';

import styles from './FocusTrap.module.css';
import type { FocusTrapAPI, FocusTrapProps } from './types';

export const createFocusTrap = (props: FocusTrapProps = {}): FocusTrapAPI => {
    let containerEl: HTMLElement | null = null;

    const getTrapElements = (): HTMLElement[] => {
        if (!containerEl) return [];
        const children = getFocusableElements(containerEl);
        return props.focusable ? [containerEl, ...children] : children;
    };

    const focusFirst = (els: HTMLElement[]) => {
        els[0]?.focus();
    };

    const focusLast = (els: HTMLElement[]) => {
        els[els.length - 1]?.focus();
    };

    const isFirstActive = (els: HTMLElement[]): boolean => {
        return document.activeElement === els[0];
    };

    const isLast = (els: HTMLElement[]): boolean => {
        return document.activeElement === els[els.length - 1];
    };

    const onKeyDown = (ev: KeyboardEvent) => {
        if (ev.key !== 'Tab') {
            return;
        }

        const els = getTrapElements();

        if (ev.shiftKey) {
            if (isFirstActive(els)) {
                ev.preventDefault();
                focusLast(els);
            }
        } else {
            if (isLast(els)) {
                ev.preventDefault();
                focusFirst(els);
            }
        }
    };

    const onFocusOut = (ev: FocusEvent) => {
        const next = ev.relatedTarget as Node | null;
        if (!containerEl?.contains(next)) {
            ev.preventDefault();
            focusFirst(getTrapElements());
        }
    };

    const setContainerRef = (el: HTMLElement | null) => {
        containerEl = el;
        if (el) focusFirst(getTrapElements());
    };

    const $static = {
        onFocusOut,
        onKeyDown,
        component: 'div' as const,
        ref: setContainerRef,
        classList: staticClassList(styles, 'FocusTrap'),
        'data-focus-trap': '' as const,
    };

    const $localRoot = createComputedProps($static, {
        tabIndex: () => (props.focusable ? 0 : undefined),
        'data-focus-trap-focusable': () => (props.focusable ? '' : undefined),
    });

    return {
        $root: $localRoot,
    };
};
