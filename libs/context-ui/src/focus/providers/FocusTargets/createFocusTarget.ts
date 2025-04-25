import { useContext } from 'solid-js';

import {
    type FocusTargetName,
    type FocusTargetProducerAPI,
    createFocusTargetAPI,
} from '../../services';

import { FocusTargetsCTX } from './private';

export const createFocusTarget = (target: FocusTargetName): FocusTargetProducerAPI => {
    const context = useContext(FocusTargetsCTX);
    if (!context) {
        throw new Error('createFocusTarget() must be wrapped in <FocusServiceProvider/>');
    }

    return createFocusTargetAPI(context, target);
};
