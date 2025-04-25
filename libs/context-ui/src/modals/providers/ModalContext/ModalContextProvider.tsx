/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { ContextNodeProvider, createContextNode } from '../../../context';
import type { ModalContextValue } from '../../contexts';

import { ModalContextCTX } from './private';

type ModalContextProviderProps = {
    context: ModalContextValue;
};

export const ModalContextProvider: ParentComponent<ModalContextProviderProps> = props => {
    const node = () => createContextNode(props.context[0]);

    return (
        <ModalContextCTX.Provider value={props.context}>
            <ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
        </ModalContextCTX.Provider>
    );
};
