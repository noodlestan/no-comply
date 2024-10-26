import { ColourSchemeName } from '@noodlestan/ui-system';
import { makePersisted } from '@solid-primitives/storage';
import { createSignal } from 'solid-js';

import { SystemUIContextState } from './types';

const initialColourScheme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';

const STORAGE_KEY_SYSTEM_UI_CONTEXT_COLOUR_SCHEME = 'SystemUIContext:colourScheme';

export const createSystemUIContext = (): SystemUIContextState => {
    const [colourScheme, setColourScheme] = makePersisted(
        createSignal<ColourSchemeName>(initialColourScheme, {
            name: STORAGE_KEY_SYSTEM_UI_CONTEXT_COLOUR_SCHEME,
        }),
    );

    const context: SystemUIContextState = {
        colourScheme,
        setColourScheme,
    };

    return context;
};
