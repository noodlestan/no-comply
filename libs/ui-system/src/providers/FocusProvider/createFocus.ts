import { useContext } from 'solid-js';

import { FocusContext } from './private/FocusContext';
import { FocusAPI, FocusTarget } from './types';

export const createFocus = (target: FocusTarget): FocusAPI => {
    const api = useContext(FocusContext);
    if (!('setTarget' in api)) {
        throw new Error('createFocus() must be wrapped in <FocusProvider/>');
    }

    const setTarget = (handler: () => void) => api.setTarget(target, handler);
    const unsetTarget = () => api.unsetTarget(target);
    const setFocus = () => api.setFocus(target);

    return [setTarget, unsetTarget, setFocus];
};
