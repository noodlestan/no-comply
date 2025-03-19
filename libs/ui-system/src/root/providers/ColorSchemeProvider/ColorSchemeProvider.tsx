import { Accessor, Component, JSX, createContext, createEffect, useContext } from 'solid-js';

import { ThemesError } from '../../errors';
import { colorSchemeStore } from '../../private';
import { ColorSchemeName } from '../../types';

type ColorSchemeContextState = {
    colorScheme: Accessor<ColorSchemeName>;
    setColorScheme: (name: ColorSchemeName) => void;
};

export const ColorSchemeContext = createContext<ColorSchemeContextState>();

export const useColorSchemeContext = (): ColorSchemeContextState => {
    const context = useContext(ColorSchemeContext);
    if (!context) {
        throw new ThemesError(`No ColorSchemeContext found`);
    }
    return context;
};

type ColorSchemeProviderProps = {
    children: JSX.Element;
    colorScheme?: ColorSchemeName;
};

export const ColorSchemeProvider: Component<ColorSchemeProviderProps> = props => {
    const { colorScheme, setColorScheme } = colorSchemeStore;
    const context: ColorSchemeContextState = {
        colorScheme,
        setColorScheme: name => setColorScheme(name),
    };

    createEffect(() => {
        if (props.colorScheme) {
            setColorScheme(props.colorScheme);
        }
    });

    return (
        <ColorSchemeContext.Provider value={context}>{props.children}</ColorSchemeContext.Provider>
    );
};
