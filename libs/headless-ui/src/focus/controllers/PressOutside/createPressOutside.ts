import { onCleanup } from 'solid-js';

import type { PressOutsideAPI, PressOutsideProps } from './types';

export const createPressOutside = (props: PressOutsideProps): PressOutsideAPI => {
    let rootEl: HTMLElement | undefined;

    const setElementRef = (el: HTMLElement) => {
        rootEl = el;
    };

    const onDocumentPointerDown = (ev: MouseEvent) => {
        if (!rootEl || rootEl.contains(ev.target as Node)) {
            return;
        }
        if (props.exclude?.().some(el => el && el.contains(ev.target as Node))) {
            return;
        }
        props.onPressOutside(ev);
    };

    document.addEventListener('pointerdown', onDocumentPointerDown);

    onCleanup(() => {
        document.removeEventListener('pointerdown', onDocumentPointerDown);
    });

    const $root = {
        ref: setElementRef,
    };

    return { $root };
};
