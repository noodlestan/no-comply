import { useContext } from 'solid-js';

import { FocusTargetId, FocusTargetProducerAPI, createFocusTargetAPI } from '../../services';

import { FocusProviderContext } from './private';

export const createFocusTarget = (target: FocusTargetId): FocusTargetProducerAPI => {
    const api = useContext(FocusProviderContext);
    if (!('createFocusTarget' in api)) {
        throw new Error('createFocusTarget() must be wrapped in <FocusServiceProvider/>');
    }

    return createFocusTargetAPI(api, target);
};
