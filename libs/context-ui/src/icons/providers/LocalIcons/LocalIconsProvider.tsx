import { type ParentComponent } from 'solid-js';

import type { IconMap } from '../../types';

import { LocalIconsContext } from './private';

type LocalIconsProviderProps = {
    icons?: IconMap;
};

export const LocalIconsProvider: ParentComponent<LocalIconsProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <LocalIconsContext.Provider value={props.icons ?? {}}>
            {props.children}
        </LocalIconsContext.Provider>
    );
};
