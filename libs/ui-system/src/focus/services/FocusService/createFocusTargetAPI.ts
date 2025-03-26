import { onCleanup } from 'solid-js';

import type { FocusServiceAPI, FocusTargetName } from './types';

type FocusTargetAPI = [setTarget: (target: () => void) => void, setFocus: () => void];

export const createFocusTargetAPI = (
    service: FocusServiceAPI,
    target: FocusTargetName,
): FocusTargetAPI => {
    const setTarget = (handler: () => void) => service.setTarget(target, handler);
    const setFocus = () => service.setFocus(target);

    onCleanup(() => service.unsetTarget(target));

    return [setTarget, setFocus];
};
