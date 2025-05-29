import { ContextNodeProvider, createContextNode } from '@no-comply/solid-contexts';
import { type ParentComponent } from 'solid-js';

import type { ListContextValue } from '../../contexts';

import { ListContextCTX } from './private';

type ListContextProviderProps = {
    context: ListContextValue;
};

export const ListContextProvider: ParentComponent<ListContextProviderProps> = props => {
    const node = () => createContextNode(props.context[0]);
    return (
        // eslint-disable-next-line solid/reactivity
        <ListContextCTX.Provider value={props.context}>
            <ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
        </ListContextCTX.Provider>
    );
};
