import type { Component, JSX } from 'solid-js';

import { IconsContext } from './private';
import type { IconsAPI } from './types';

type IconsProviderProps = {
    icons: IconsAPI;
    children?: JSX.Element;
};

export const IconsProvider: Component<IconsProviderProps> = props => {
    // eslint-disable-next-line solid/reactivity
    return <IconsContext.Provider value={props.icons}>{props.children}</IconsContext.Provider>;
};
