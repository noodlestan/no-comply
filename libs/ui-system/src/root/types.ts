export type TokenMap = {
    [key: string]: string;
};

export type ColourSchemeName = 'dark' | 'light';

export type SurfaceTokenMap = {
    [key: string]: TokenMap;
};

export type ThemeModeTokens = {
    global: TokenMap;
    surfaces: SurfaceTokenMap;
};

export type ThemeTokens = {
    base: ThemeModeTokens;
    alt: ThemeModeTokens;
};

export type SystemTheme = {
    name: string;
    mode: ColourSchemeName;
    extend: string[];
    tokens: ThemeTokens;
};

export type SystemSurface = {
    name: string;
    extend: string[];
};
