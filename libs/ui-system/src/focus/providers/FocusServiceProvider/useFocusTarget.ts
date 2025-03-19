import { useContext } from 'solid-js';

import { FocusTargetConsumerAPI, FocusTargetId } from '../../services';

import { FocusProviderContext } from './private';

export const useFocusTarget = (target: FocusTargetId): FocusTargetConsumerAPI => {
    const api = useContext(FocusProviderContext);
    if (!('setTarget' in api)) {
        throw new Error('useFocus() must be wrapped in <FocusServiceProvider/>');
    }

    const setFocus = () => api.setFocus(target);

    return [setFocus];
};
