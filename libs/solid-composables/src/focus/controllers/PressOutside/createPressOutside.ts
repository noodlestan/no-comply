import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { onCleanup } from 'solid-js';

import { $PRESS_OUTSIDE } from './constants';
import type { PressOutsideAPI, PressOutsideProps } from './types';

export const createPressOutside = (props: PressOutsideProps): PressOutsideAPI => {
    const [locals, expose] = createExposable($PRESS_OUTSIDE, props);

    let rootEl: HTMLElement | undefined;

    const setElementRef = (el: HTMLElement) => {
        rootEl = el;
    };

    const onDocumentPointerDown = (ev: MouseEvent) => {
        if (!rootEl || rootEl.contains(ev.target as Node)) {
            return;
        }
        if (locals.exclude?.().some(el => el && el.contains(ev.target as Node))) {
            return;
        }
        locals.onPressOutside(ev);
    };

    document.addEventListener('pointerdown', onDocumentPointerDown);

    onCleanup(() => {
        document.removeEventListener('pointerdown', onDocumentPointerDown);
    });

    const $root = {
        ref: setElementRef,
    };

    return exposeAPI(expose, '$root', {
        $root,
    });
};
