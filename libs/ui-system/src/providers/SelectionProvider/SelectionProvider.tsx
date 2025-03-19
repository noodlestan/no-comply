import { Component, JSX } from 'solid-js';

import { SelectionContext } from './private';
import { SelectionAPI } from './types';

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
