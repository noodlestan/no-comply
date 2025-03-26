/* eslint-disable solid/reactivity */
import type { Component, JSX } from 'solid-js';

import { type ContextOwnerAPI } from '../../private';

import { ContextNodeContext, ContextRootContext } from './private';

type ContextTreeProviderProps = {
    value: ContextOwnerAPI;
    children?: JSX.Element;
};

export const ContextRootProvider: Component<ContextTreeProviderProps> = props => {
    return (
        <ContextRootContext.Provider value={props.value}>
            <ContextNodeContext.Provider value={props.value}>
                {props.children}
            </ContextNodeContext.Provider>
        </ContextRootContext.Provider>
    );
};
