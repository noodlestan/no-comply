import { type Accessor, createSignal, onCleanup } from 'solid-js';

import type { SystemColorSchemeName } from '../types';

export const createSystemColorSchemeSignal = (): Accessor<SystemColorSchemeName> => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const [colorScheme, setColorScheme] = createSignal<SystemColorSchemeName>(
        mediaQuery.matches ? 'dark' : 'light',
    );

    const updateColorScheme = (ev: MediaQueryListEvent) => {
        setColorScheme(ev.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', updateColorScheme);
    onCleanup(() => mediaQuery.removeEventListener('change', updateColorScheme));

    return colorScheme;
};
