import { colorSchemeClassNames, surfaceClassNames, themeClassNames } from '../_private';
import { NUI_PREFIX } from '../constants';

export const contextClassNames = (): string[] => {
    return [NUI_PREFIX, ...colorSchemeClassNames(), ...themeClassNames(), ...surfaceClassNames()];
};
