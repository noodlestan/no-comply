import {
    ActiveContextsProvider,
    ContextVariantsProvider,
    FocusTargetsProvider,
    ModalsProvider,
    NavigationProvider,
    SettingsProvider,
    ShortcutsProvider,
    createActiveContextsService,
    createFocusTargetsService,
    createModalsService,
    createNavigationService,
    createSettingsService,
    createShortcutsService,
} from '@no-comply/solid-contexts';
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
    const contexts = createActiveContextsService();
    const shortcuts = createShortcutsService(contexts);

    onCleanup(() => {
        focus.dispose();
        shortcuts.dispose();
        contexts.dispose();
    });

    return (
        <NavigationProvider service={navigation}>
            <SettingsProvider service={settings}>
                <AppServicesContext.Provider value={appServices}>
                    <FocusTargetsProvider service={focus}>
                        <ModalsProvider service={modals}>
                            <ShortcutsProvider service={shortcuts}>
                                <ActiveContextsProvider service={contexts}>
                                    <ContextVariantsProvider>
                                        {props.children}
                                    </ContextVariantsProvider>
                                </ActiveContextsProvider>
                            </ShortcutsProvider>
                        </ModalsProvider>
                    </FocusTargetsProvider>
                </AppServicesContext.Provider>
            </SettingsProvider>
        </NavigationProvider>
    );
};
