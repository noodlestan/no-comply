import { merge } from 'ts-deepmerge';

import { themesStore } from '../stores';
import { surfacesStore } from '../stores/surfacesStore';
import { ColorSchemeName, SystemSurface, SystemTheme, TokenMap } from '../types';

export const contextTokens = (
    mode: ColorSchemeName,
    theme: SystemTheme,
    surface: SystemSurface,
): TokenMap => {
    const { themeByName } = themesStore;
    const { surfaceByName } = surfacesStore;

    const extendedThemes = theme.extend.reduce((acc, themeName) => {
        return {
            ...acc,
            ...contextTokens(mode, themeByName(themeName), surface),
        };
    }, {});

    const extendedSurfaces = surface.extend.reduce((acc, surfaceName) => {
        return {
            ...acc,
            ...contextTokens(mode, theme, surfaceByName(surfaceName)),
        };
    }, {});

    const baseTokens = {
        ...theme.tokens.base.global,
        ...theme.tokens.base.surfaces[surface.name],
    };
    const globalTokens = theme.mode !== mode ? theme.tokens.alt.global : {};
    const surfacetokens = theme.mode !== mode ? theme.tokens.alt.surfaces[surface.name] : {};
    const modeTokens = {
        ...globalTokens,
        ...surfacetokens,
    };

    return merge(extendedThemes, extendedSurfaces, baseTokens, modeTokens);
};
