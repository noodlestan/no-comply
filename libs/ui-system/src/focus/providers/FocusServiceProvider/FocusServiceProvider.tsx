import { Component, JSX } from 'solid-js';

import { FocusServiceAPI } from '../../services';

import { FocusProviderContext } from './private';

type FocusProviderProps = {
    focus: FocusServiceAPI;
    children?: JSX.Element;
};

export const FocusServiceProvider: Component<FocusProviderProps> = props => {
    return (
        <FocusProviderContext.Provider value={props.focus}>
            {props.children}
        </FocusProviderContext.Provider>
    );
};
