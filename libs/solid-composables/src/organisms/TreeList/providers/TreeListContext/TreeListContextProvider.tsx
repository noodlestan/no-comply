import {
    ContextNodeProvider,
    LocalIconsProvider,
    LocalLabelsProvider,
    createContextNode,
} from '@no-comply/solid-contexts';
import { type ParentComponent } from 'solid-js';

import type { TreeListContextValue } from '../../contexts';

import { TreeListContextCTX } from './private';

type TreeListContextProviderProps = {
    context: TreeListContextValue;
};

export const TreeListContextProvider: ParentComponent<TreeListContextProviderProps> = props => {
    const node = () => createContextNode(props.context[0]);

    return (
        // eslint-disable-next-line solid/reactivity
        <TreeListContextCTX.Provider value={props.context}>
            <ContextNodeProvider node={node()}>
                <LocalLabelsProvider labels={props.context[0].labels()}>
                    <LocalIconsProvider icons={props.context[0].icons()}>
                        {props.children}
                    </LocalIconsProvider>
                </LocalLabelsProvider>
            </ContextNodeProvider>
        </TreeListContextCTX.Provider>
    );
};
