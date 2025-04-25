import { LocalIconsProvider, LocalLabelsProvider } from '@noodlestan/context-ui';
import { type ParentComponent } from 'solid-js';

import type { TreeListContextValue } from '../../private';

import { TreeListContext } from './private';

type TreeListContextProviderProps = {
    context: TreeListContextValue;
};

export const TreeListContextProvider: ParentComponent<TreeListContextProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <TreeListContext.Provider value={props.context}>
            <LocalLabelsProvider labels={props.context.labels}>
                <LocalIconsProvider icons={props.context.icons}>
                    {props.children}
                </LocalIconsProvider>
            </LocalLabelsProvider>
        </TreeListContext.Provider>
    );
};
