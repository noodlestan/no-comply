import type { ParentComponent } from 'solid-js';

import { ShortcutsContext } from './private';
import type { ShortcutsService } from './types';

type SettingsProviderProps = {
    service: ShortcutsService;
};

export const ShortcutsProvider: ParentComponent<SettingsProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <ShortcutsContext.Provider value={props.service}>
            {props.children}
        </ShortcutsContext.Provider>
    );
};
