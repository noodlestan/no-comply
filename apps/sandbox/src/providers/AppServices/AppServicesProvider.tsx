import {
    ContextsProvider,
    FocusServiceProvider,
    SettingsProvider,
    ShortcutsProvider,
    createContextsService,
    createFocusService,
    createSettingsService,
    createShortcutsService,
} from '@noodlestan/context-ui';
import { type Component, type JSX, onCleanup } from 'solid-js';

import { AppServicesContext } from './private';
import type { AppServicesAPI } from './types';

type AppServicesProviderProps = {
    appServices: AppServicesAPI;
    children?: JSX.Element;
};

export const AppServicesProvider: Component<AppServicesProviderProps> = props => {
    const settings = createSettingsService();
    const focus = createFocusService();
    const contexts = createContextsService();
    const shortcuts = createShortcutsService(contexts);

    // eslint-disable-next-line solid/reactivity
    const appServices = props.appServices;

    onCleanup(() => {
        focus.dispose();
        shortcuts.dispose();
        contexts.dispose();
    });

    return (
        <SettingsProvider settings={settings}>
            <AppServicesContext.Provider value={appServices}>
                <FocusServiceProvider focusService={focus}>
                    <ShortcutsProvider shortcutsService={shortcuts}>
                        <ContextsProvider contextsService={contexts}>
                            {props.children}
                        </ContextsProvider>
                    </ShortcutsProvider>
                </FocusServiceProvider>
            </AppServicesContext.Provider>
        </SettingsProvider>
    );
};
