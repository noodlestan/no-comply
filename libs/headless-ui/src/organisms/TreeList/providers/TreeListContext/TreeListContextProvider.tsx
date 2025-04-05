import { LocalIconsProvider, LocalLabelsProvider } from '@noodlestan/context-ui';
import { type ParentComponent } from 'solid-js';

import type { TreeListContextValue } from '../../private';

import { TreeListContext } from './private';

type TreeListContextProviderProps = {
    value: TreeListContextValue;
};

export const TreeListContextProvider: ParentComponent<TreeListContextProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <TreeListContext.Provider value={props.value}>
            <LocalLabelsProvider labels={props.value.labels}>
                <LocalIconsProvider icons={props.value.icons}>{props.children}</LocalIconsProvider>
            </LocalLabelsProvider>
        </TreeListContext.Provider>
    );
};
