import { ContextNodeProvider, createContextNode } from '@noodlestan/context-ui';
import { type ParentComponent } from 'solid-js';

import type { OverflowItemsContextValue } from '../../contexts';

import { OverflowItemsContextCTX } from './private';
import { useOverflowItemsMaybe } from './useOverflowItemsMaybe';

type OverflowItemsProviderProps = {
    context: OverflowItemsContextValue;
};

export const OverflowItemsProvider: ParentComponent<OverflowItemsProviderProps> = props => {
    const contextValue = useOverflowItemsMaybe();

    if (contextValue) {
        throw new Error(
            'OverflowItemsProvider must not be nested in another OverflowItemsContextProvider',
        );
    }

    const node = () => createContextNode(props.context[0]);

    return (
        // eslint-disable-next-line solid/reactivity
        <OverflowItemsContextCTX.Provider value={props.context}>
            <ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
        </OverflowItemsContextCTX.Provider>
    );
};
