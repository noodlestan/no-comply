import { Component, JSX, createContext, useContext } from 'solid-js';

import { useSettings } from '../../../providers';
import { ThemesError } from '../../errors';
import { themesStore } from '../../stores';
import { SystemTheme } from '../../types';
import { TokensProvider } from '../TokensProvider';

import { THEME_SETTINGS, THEME_SETTINGS_GROUPS } from './constants';

type ThemeContextState = { theme: () => SystemTheme };

export const ThemeContext = createContext<ThemeContextState>();

export const useThemeContext = (): ThemeContextState => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new ThemesError(`No ThemeContext found`);
    }
    return context;
};

type ThemeProviderProps = {
    children?: JSX.Element;
    theme: string;
    shallow?: boolean;
};

export const ThemeProvider: Component<ThemeProviderProps> = props => {
    const { themeByName } = themesStore;
    const { addSettings, addGroups } = useSettings();

    addSettings(THEME_SETTINGS);
    addGroups(THEME_SETTINGS_GROUPS);

    const value = () => ({ theme: () => themeByName(props.theme) });

    return (
        <ThemeContext.Provider value={value()}>
            {props.shallow ? props.children : <TokensProvider>{props.children}</TokensProvider>}
        </ThemeContext.Provider>
    );
};
