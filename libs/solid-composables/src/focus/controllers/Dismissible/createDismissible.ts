import { computedProps, mergeProps } from '@no-comply/solid-primitives';
import { onCleanup } from 'solid-js';

import { createPressOutside } from '../PressOutside';

import type { DismissibleAPI, DismissibleProps } from './types';

export const createDismissible = (props: DismissibleProps): DismissibleAPI => {
    let rootEl: HTMLElement | undefined;

    const setDismissibleRef = (el: HTMLElement) => {
        rootEl = el;
    };

    const pressOutsideProps = computedProps({
        onPressOutside: () => props.onDismiss,
        exclude: () => props.exclude,
    });
    const { $root: $pressOutsideRoot } = createPressOutside(pressOutsideProps);

    const onKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') {
            props.onDismiss();
        }
    };

    const handleFocusIn = () => {
        if (!rootEl) {
            return;
        }
        const active = document.activeElement as HTMLElement | null;
        if (active && rootEl.contains(active)) {
            return;
        }
        if (props.exclude?.().some(el => el && el.contains(document.activeElement))) {
            return;
        }
        props.onDismiss();
    };

    document.addEventListener('focusin', handleFocusIn);

    onCleanup(() => {
        document.removeEventListener('focusin', handleFocusIn);
    });
    const $root = {
        ref: setDismissibleRef,
        onKeyDown,
    };

    return {
        $root: mergeProps($pressOutsideRoot, $root),
    };
};
