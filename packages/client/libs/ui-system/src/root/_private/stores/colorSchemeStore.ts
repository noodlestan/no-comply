import { Accessor, createSignal } from 'solid-js';

import { ColorSchemeName } from '../../types';

const [colorScheme, setColorScheme] = createSignal<ColorSchemeName>('dark');

type ColorSchemeStore = {
    colorScheme: Accessor<ColorSchemeName>;
    setColorScheme: (name: ColorSchemeName) => void;
};

export const colorSchemeStore: ColorSchemeStore = {
    colorScheme,
    setColorScheme,
};
