import type { Component, JSX } from 'solid-js';

import { type ContextOwnerAPI } from '../../private';

import { ContextNodeContext } from './private';

type ContextTreeProviderProps = {
    value: ContextOwnerAPI;
    children?: JSX.Element;
};

export const ContextProvider: Component<ContextTreeProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <ContextNodeContext.Provider value={props.value}>
            {props.children}
        </ContextNodeContext.Provider>
    );
};
