import { Component, JSX } from 'solid-js';

import { IconsContext } from './private/IconsContext';
import { IconsAPI } from './types';

type IconsProviderProps = {
    icons: IconsAPI;
    children?: JSX.Element;
};

export const IconsProvider: Component<IconsProviderProps> = props => {
    return <IconsContext.Provider value={props.icons}>{props.children}</IconsContext.Provider>;
};
