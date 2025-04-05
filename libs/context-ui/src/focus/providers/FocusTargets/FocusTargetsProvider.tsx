import type { ParentComponent } from 'solid-js';

import { type FocusTargetsServiceAPI } from '../../services';

import { FocusTargetsContext } from './private';

type FocusTargetsProviderProps = {
    service: FocusTargetsServiceAPI;
};

export const FocusTargetsProvider: ParentComponent<FocusTargetsProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <FocusTargetsContext.Provider value={props.service}>
            {props.children}
        </FocusTargetsContext.Provider>
    );
};
