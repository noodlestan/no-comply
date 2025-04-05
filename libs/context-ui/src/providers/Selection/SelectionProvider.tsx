import type { ParentComponent } from 'solid-js';

import { SelectionContext } from './private';
import type { SelectionAPI } from './types';

type SelectionProviderProps = {
    selection: SelectionAPI;
};

export const SelectionProvider: ParentComponent<SelectionProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <SelectionContext.Provider value={props.selection}>
            {props.children}
        </SelectionContext.Provider>
    );
};
