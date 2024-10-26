import { Component, JSX } from 'solid-js';

import { ShortcutsContext } from './private';
import { ShortcutsService } from './types';

type SettingsProviderProps = {
    keyboardShortcuts: ShortcutsService;
    children?: JSX.Element;
};

export const ShortcutsProvider: Component<SettingsProviderProps> = props => {
    return (
        <ShortcutsContext.Provider value={props.keyboardShortcuts}>
            {props.children}
        </ShortcutsContext.Provider>
    );
};
