/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { ContextNodeProvider, createContextNode } from '../../../context';
import { type ModeContextValue } from '../../contexts';

import { ModeContextCTX } from './private';

type ModeContextProviderProps = {
    context: ModeContextValue;
};

export const ModeContextProvider: ParentComponent<ModeContextProviderProps> = props => {
    const node = () => createContextNode(props.context[0]);

    return (
        <ModeContextCTX.Provider value={props.context}>
            <ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
        </ModeContextCTX.Provider>
    );
};
