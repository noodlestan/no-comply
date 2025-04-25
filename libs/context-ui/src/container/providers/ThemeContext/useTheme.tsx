import { useContext } from 'solid-js';

import type { ThemeContext } from '../../contexts';

import { ThemeContextCTX } from './private';

export const useTheme = (): ThemeContext => {
    const [context] = useContext(ThemeContextCTX) || [];
    if (!context) {
        throw new Error('useTheme() must be wrapped in <ThemeContextProvider/>');
    }

    return context;
};
