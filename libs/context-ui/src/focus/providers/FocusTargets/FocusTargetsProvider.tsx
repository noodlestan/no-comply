/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { type FocusTargetsServiceAPI } from '../../services';

import { FocusTargetsCTX } from './private';

type FocusTargetsProviderProps = {
    service: FocusTargetsServiceAPI;
};

export const FocusTargetsProvider: ParentComponent<FocusTargetsProviderProps> = props => {
    return (
        <FocusTargetsCTX.Provider value={props.service}>{props.children}</FocusTargetsCTX.Provider>
    );
};
