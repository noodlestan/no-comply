/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { ContextNodeProvider, createContextNode } from '../../../context';
import type { SelectionContextValue } from '../../contexts';

import { SelectionContextCTX } from './private';

type SelectionProviderProps = {
    value: SelectionContextValue;
};

export const SelectionProvider: ParentComponent<SelectionProviderProps> = props => {
    const node = () => createContextNode(props.value[0]);

    return (
        <SelectionContextCTX.Provider value={props.value}>
            <ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
        </SelectionContextCTX.Provider>
    );
};
