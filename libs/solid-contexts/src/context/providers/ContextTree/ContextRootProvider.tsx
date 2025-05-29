/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import type { ContextNodeValue } from '../../private';
import { ContextNodeCTX, ContextRootCTX } from '../../private';

type ContextTreeProviderProps = {
    root: ContextNodeValue;
};

export const ContextRootProvider: ParentComponent<ContextTreeProviderProps> = props => {
    return (
        <ContextRootCTX.Provider value={props.root}>
            <ContextNodeCTX.Provider value={props.root}>{props.children}</ContextNodeCTX.Provider>
        </ContextRootCTX.Provider>
    );
};
