import { ContextNodeProvider, createContextNode } from '@noodlestan/context-ui';
import { type ParentComponent } from 'solid-js';

import type { PopoverContextValue } from '../../contexts';

import { PopoverContextCTX } from './private';

type PopoverContextProviderProps = {
    context: PopoverContextValue;
};

export const PopoverContextProvider: ParentComponent<PopoverContextProviderProps> = props => {
    const node = () => createContextNode(props.context[0]);

    return (
        // eslint-disable-next-line solid/reactivity
        <PopoverContextCTX.Provider value={props.context}>
            <ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
        </PopoverContextCTX.Provider>
    );
};
