import type { Component, JSX } from 'solid-js';

import { type FocusServiceAPI } from '../../services';

import { FocusProviderContext } from './private';

type FocusProviderProps = {
    focusService: FocusServiceAPI;
    children?: JSX.Element;
};

export const FocusServiceProvider: Component<FocusProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <FocusProviderContext.Provider value={props.focusService}>
            {props.children}
        </FocusProviderContext.Provider>
    );
};
