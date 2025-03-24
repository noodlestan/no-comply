import type { ThemeContextValue } from '../types';

type ThemeOptions = Partial<Omit<ThemeContextValue, 'type'>> & { name: string };

export function createTheme(params: ThemeOptions): ThemeContextValue {
    const { extend = [], mode = 'light', tokens = {}, ...rest } = params;
    return { type: 'theme', extend, mode, tokens, ...rest };
}
