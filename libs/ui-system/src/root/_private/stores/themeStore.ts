import { Accessor, createSignal } from 'solid-js';

import { themesStore } from '../../stores';
import { SystemTheme } from '../../types';

const [theme, setTheme] = createSignal<string>('');

type ThemeStore = {
    theme: Accessor<SystemTheme>;
    setTheme: (name: string) => void;
};

const { themeByName } = themesStore;

export const themeStore: ThemeStore = {
    theme: () => themeByName(theme()),
    setTheme: (name: string) => {
        themeByName(name);
        setTheme(name);
    },
};
