import {
    ContextsProvider,
    FocusTargetsProvider,
    ModalsProvider,
    NavigationProvider,
    SettingsProvider,
    ShortcutsProvider,
    createContextsService,
    createFocusTargetsService,
    createModalsService,
    createNavigationService,
    createSettingsService,
    createShortcutsService,
} from '@noodlestan/context-ui';
import { useLocation } from '@solidjs/router';
import { type ParentComponent, onCleanup } from 'solid-js';

import { AppServicesContext } from './private';
import { createAppServices } from './private/createAppServices';

export const AppServicesProvider: ParentComponent = props => {
    const appServices = createAppServices();
    const location = useLocation();
    const navigation = createNavigationService({
        current: () => location.pathname,
    });
    const settings = createSettingsService();
    const focus = createFocusTargetsService();
    const modals = createModalsService();
    const contexts = createContextsService();
    const shortcuts = createShortcutsService(contexts);

    onCleanup(() => {
        focus.dispose();
        shortcuts.dispose();
        contexts.dispose();
    });

    return (
        <NavigationProvider navigation={navigation}>
            <SettingsProvider settings={settings}>
                <AppServicesContext.Provider value={appServices}>
                    <FocusTargetsProvider service={focus}>
                        <ModalsProvider service={modals}>
                            <ShortcutsProvider service={shortcuts}>
                                <ContextsProvider service={contexts}>
                                    {props.children}
                                </ContextsProvider>
                            </ShortcutsProvider>
                        </ModalsProvider>
                    </FocusTargetsProvider>
                </AppServicesContext.Provider>
            </SettingsProvider>
        </NavigationProvider>
    );
};
