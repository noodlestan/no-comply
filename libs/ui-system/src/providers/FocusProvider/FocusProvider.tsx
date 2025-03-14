import { Component, JSX } from 'solid-js';

import { FocusContext } from './private';
import { FocusServiceAPI } from './types';

type FocusProviderProps = {
    focus: FocusServiceAPI;
    children?: JSX.Element;
};

export const FocusProvider: Component<FocusProviderProps> = props => {
    return <FocusContext.Provider value={props.focus}>{props.children}</FocusContext.Provider>;
};
