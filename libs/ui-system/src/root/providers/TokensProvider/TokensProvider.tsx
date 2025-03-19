import { Component, JSX, createContext, useContext } from 'solid-js';

import { ThemesError } from '../../errors';
import { contextTokens } from '../../helpers/contextTokens';
import { TokenMap } from '../../types';
import { useColorSchemeContext } from '../ColorSchemeProvider';
import { useSurfacesContext } from '../SurfaceProvider';
import { useThemeContext } from '../ThemeProvider';

type TokensContextAPI = { tokens: TokenMap };

export const TokensContext = createContext<TokensContextAPI>();

export const useTokensContext = (): TokensContextAPI => {
    const context = useContext(TokensContext);
    if (!context) {
        throw new ThemesError(`No TokensContext found`);
    }
    return context;
};

type TokensProviderProps = {
    children: JSX.Element;
};

export const TokensProvider: Component<TokensProviderProps> = props => {
    const tokens = () => {
        const { colorScheme } = useColorSchemeContext();
        const { theme } = useThemeContext();
        const { surface } = useSurfacesContext();
        return contextTokens(colorScheme(), theme(), surface());
    };

    const value = () => ({ tokens: tokens() });

    return <TokensContext.Provider value={value()}>{props.children}</TokensContext.Provider>;
};
