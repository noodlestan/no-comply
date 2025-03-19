import { Component, JSX } from 'solid-js';

import { FocusParentContext } from './private';
import { FocusContextValue } from './types';

type FocusContextProviderProps = {
    value: FocusContextValue;
    children?: JSX.Element;
};

export const FocusContextProvider: Component<FocusContextProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <FocusParentContext.Provider value={props.value}>
            {props.children}
        </FocusParentContext.Provider>
    );
};
