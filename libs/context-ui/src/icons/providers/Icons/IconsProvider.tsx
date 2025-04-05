import type { ParentComponent } from 'solid-js';

import type { IconsServiceAPI } from '../../types';

import { IconsContext } from './private';

type IconsProviderProps = {
    icons: IconsServiceAPI;
};

export const IconsProvider: ParentComponent<IconsProviderProps> = props => {
    // eslint-disable-next-line solid/reactivity
    return <IconsContext.Provider value={props.icons}>{props.children}</IconsContext.Provider>;
};
