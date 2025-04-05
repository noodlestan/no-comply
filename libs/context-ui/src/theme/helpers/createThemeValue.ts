import type { ThemeContextValue } from '../types';

type ThemeValueOptions = Partial<Omit<ThemeContextValue, 'type'>> & { name: string };

export const createThemeValue = (params: ThemeValueOptions): ThemeContextValue => {
    const { extend = [], mode = 'light', tokens = {}, ...rest } = params;
    return { type: 'theme', extend, mode, tokens, ...rest };
};
