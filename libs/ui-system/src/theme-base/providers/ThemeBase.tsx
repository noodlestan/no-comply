import { Component } from 'solid-js';

import { useSettings } from '../../providers';
import { surfacesStore, themesStore } from '../../root';
import { THEME_SETTINGS, THEME_SETTINGS_GROUPS } from '../constants';
import { surfaces, theme } from '../constants/theme';

import '../styles/index.css';

export const ThemeBase: Component = () => {
    const { addSettings, addGroups } = useSettings();

    addSettings(THEME_SETTINGS);
    addGroups(THEME_SETTINGS_GROUPS);

    const { registerTheme } = themesStore;
    const { registerSurface } = surfacesStore;

    registerTheme(theme);
    surfaces.forEach(registerSurface);
    return <></>;
};
