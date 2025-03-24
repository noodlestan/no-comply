import { useContext } from 'solid-js';

import type { FocusTargetConsumerAPI, FocusTargetId } from '../../services';

import { FocusProviderContext } from './private';

export const useFocusTarget = (target: FocusTargetId): FocusTargetConsumerAPI => {
    const context = useContext(FocusProviderContext);
    if (!context) {
        throw new Error('useFocus() must be wrapped in <FocusServiceProvider/>');
    }

    const setFocus = () => context.setFocus(target);

    return [setFocus];
};
