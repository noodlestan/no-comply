import { useContext } from 'solid-js';

import type { FocusTargetConsumerAPI, FocusTargetName } from '../../services';

import { FocusProviderContext } from './private';

export const useFocusTarget = (target: FocusTargetName): FocusTargetConsumerAPI => {
    const context = useContext(FocusProviderContext);
    if (!context) {
        throw new Error('useFocus() must be wrapped in <FocusServiceProvider/>');
    }

    const setFocus = () => context.setFocus(target);

    return [setFocus];
};
