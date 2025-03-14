import { useContext } from 'solid-js';

import { FocusContext } from './private';
import { FocusClientAPI, FocusTarget } from './types';

export const useFocus = (target: FocusTarget): FocusClientAPI => {
    const api = useContext(FocusContext);
    if (!('setTarget' in api)) {
        throw new Error('useFocus() must be wrapped in <FocusProvider/>');
    }

    const setFocus = () => api.setFocus(target);

    return [setFocus];
};
