/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { type ContextOwnerAPI } from '../../private';

import { ContextNodeContext, ContextRootContext } from './private';

type ContextTreeProviderProps = {
    value: ContextOwnerAPI;
};

export const ContextRootProvider: ParentComponent<ContextTreeProviderProps> = props => {
    return (
        <ContextRootContext.Provider value={props.value}>
            <ContextNodeContext.Provider value={props.value}>
                {props.children}
            </ContextNodeContext.Provider>
        </ContextRootContext.Provider>
    );
};
