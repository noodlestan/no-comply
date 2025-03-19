import { Component, JSX } from 'solid-js';

import { FocusParentContext } from './private';
import { FocusContextValue } from './types';

type FocusContextProviderProps = {
    focusContext: FocusContextValue;
    children?: JSX.Element;
};

export const FocusContextProvider: Component<FocusContextProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <FocusParentContext.Provider value={props.focusContext}>
            {props.children}
        </FocusParentContext.Provider>
    );
};
