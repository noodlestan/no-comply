import type { ParentComponent } from 'solid-js';

import { type ContextOwnerAPI } from '../../private';

import { ContextNodeContext } from './private';

type ContextTreeProviderProps = {
    value: ContextOwnerAPI;
};

export const ContextProvider: ParentComponent<ContextTreeProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <ContextNodeContext.Provider value={props.value}>
            {props.children}
        </ContextNodeContext.Provider>
    );
};
