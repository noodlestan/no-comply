import { RootProvider, SettingsProvider, ThemeBase, createSettings } from '@noodlestan/ui-system';
import { render } from 'solid-js/web';

import { App } from './app';
import { SystemUIProvider, createSystemUIContext } from './providers';

import './styles/reset.css';

const root = document.getElementById('root') as HTMLElement;

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(() => {
    const systemUIContext = createSystemUIContext();
    const themeSettings = createSettings();
    const { colorScheme } = systemUIContext;

    return (
        <SystemUIProvider systemUI={systemUIContext}>
            <SettingsProvider settings={themeSettings}>
                {/* <ThemeStudio /> */}
                <ThemeBase />
                <RootProvider colorScheme={colorScheme()} theme="base" surface="stage">
                    <App />
                </RootProvider>
            </SettingsProvider>
        </SystemUIProvider>
    );
}, root);
