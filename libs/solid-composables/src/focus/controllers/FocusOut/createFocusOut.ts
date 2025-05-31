import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { $FOCUS_OUT, FOCUS_OUT_KEYBOARD, FOCUS_OUT_POINTER } from './constants';
import type { FocusOutAPI, FocusOutInteractionType, FocusOutProps } from './types';

export const createFocusOut = (props: FocusOutProps): FocusOutAPI => {
    const [locals, expose] = createExposable($FOCUS_OUT, props);

    let lastInteraction: FocusOutInteractionType = FOCUS_OUT_POINTER;

    const onKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Tab') {
            lastInteraction = FOCUS_OUT_KEYBOARD;
        }
    };

    const onPointerDown = () => {
        lastInteraction = FOCUS_OUT_POINTER;
    };

    const onFocusOut = () => {
        if (lastInteraction === FOCUS_OUT_POINTER) {
            return;
        }
        locals.onFocusOut();
    };

    const $root = {
        onKeyDown,
        onPointerDown,
        onFocusOut,
    } as const;

    return exposeAPI(expose, '$root', {
        $root,
    });
};
