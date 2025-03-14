import { Accessor, createSignal } from 'solid-js';

import { ThemesError } from '../errors';
import { SystemTheme } from '../types';

const [themes, setThemes] = createSignal<SystemTheme[]>([]);

type ThemesStore = {
    themes: Accessor<SystemTheme[]>;
    registerTheme: (theme: SystemTheme) => void;
    themeByName: (name: string) => SystemTheme;
};

const findTheme = (name: string): SystemTheme | undefined => {
    return themes().find(theme => theme.name === name);
};

const themeByName = (name: string): SystemTheme => {
    const found = findTheme(name);
    if (!found) {
        throw new ThemesError(`Unknown theme "${name}".`);
    }
    return found;
};

const registerTheme = (theme: SystemTheme): void => {
    if (!findTheme(theme.name)) {
        setThemes(t => [...t, theme]);
    }
};

export const themesStore: ThemesStore = {
    themes,
    registerTheme,
    themeByName,
};
