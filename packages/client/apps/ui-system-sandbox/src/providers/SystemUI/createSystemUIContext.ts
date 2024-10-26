import { ColorSchemeName } from '@noodlestan/ui-system';
import { makePersisted } from '@solid-primitives/storage';
import { createSignal } from 'solid-js';

import { SystemUIContextState } from './types';

const initialColorScheme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';

const STORAGE_KEY_SYSTEM_UI_CONTEXT_COLOR_SCHEME = 'SystemUIContext:colorScheme';

export const createSystemUIContext = (): SystemUIContextState => {
    const [colorScheme, setColorScheme] = makePersisted(
        createSignal<ColorSchemeName>(initialColorScheme, {
            name: STORAGE_KEY_SYSTEM_UI_CONTEXT_COLOR_SCHEME,
        }),
    );

    const context: SystemUIContextState = {
        colorScheme,
        setColorScheme,
    };

    return context;
};
