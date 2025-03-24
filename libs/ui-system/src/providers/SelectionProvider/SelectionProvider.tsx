import type { Component, JSX } from 'solid-js';

import { SelectionContext } from './private';
import type { SelectionAPI } from './types';

type SelectionProviderProps = {
    selection: SelectionAPI;
    children?: JSX.Element;
};

export const SelectionProvider: Component<SelectionProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <SelectionContext.Provider value={props.selection}>
            {props.children}
        </SelectionContext.Provider>
    );
};
