import type { ParentComponent } from 'solid-js';

import { ContextsContext } from './private';
import type { ContextsService } from './types';

type SettingsProviderProps = {
    service: ContextsService;
};

export const ContextsProvider: ParentComponent<SettingsProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <ContextsContext.Provider value={props.service}>{props.children}</ContextsContext.Provider>
    );
};
