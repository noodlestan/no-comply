import type { Component, JSX } from 'solid-js';

import type { IconsServiceAPI } from '../../types';

import { IconsContext } from './private';

type IconsProviderProps = {
    icons: IconsServiceAPI;
    children?: JSX.Element;
};

export const IconsProvider: Component<IconsProviderProps> = props => {
    // eslint-disable-next-line solid/reactivity
    return <IconsContext.Provider value={props.icons}>{props.children}</IconsContext.Provider>;
};
