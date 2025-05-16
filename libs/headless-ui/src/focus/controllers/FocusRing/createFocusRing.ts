import { createComputedProps } from '@noodlestan/context-ui-primitives';
import { createSignal } from 'solid-js';

import type { FocusRingAPI } from './types';

export const createFocusRing = (): FocusRingAPI => {
    const [hadFocus, setHadFocus] = createSignal(false);
    const [isActive, setIsActive] = createSignal(false);

    const onKeyDown = (ev: KeyboardEvent) => {
        if (ev.target !== ev.currentTarget) {
            return;
        }
        if (ev.key === 'Enter') {
            setIsActive(true);
            setHadFocus(true);
            setTimeout(() => {
                setIsActive(false);
                setTimeout(() => {
                    setHadFocus(false);
                }, 75);
            }, 75);
        }
    };

    const $static = { onKeyDown };

    const $localRoot = createComputedProps($static, {
        'data-had-focus': () => (hadFocus() ? '' : undefined),
        'data-is-active': () => (isActive() ? '' : undefined),
    });

    return {
        $root: $localRoot,
    };
};
