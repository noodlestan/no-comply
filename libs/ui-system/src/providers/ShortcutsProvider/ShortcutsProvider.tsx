import { Component, JSX } from 'solid-js';

import { ShortcutsContext } from './private';
import { ShortcutsService } from './types';

type SettingsProviderProps = {
    shortcutsService: ShortcutsService;
    children?: JSX.Element;
};

export const ShortcutsProvider: Component<SettingsProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <ShortcutsContext.Provider value={props.shortcutsService}>
            {props.children}
        </ShortcutsContext.Provider>
    );
};
