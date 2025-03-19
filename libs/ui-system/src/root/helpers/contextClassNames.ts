import { NUI_PREFIX } from '../constants';
import { colorSchemeClassNames, surfaceClassNames, themeClassNames } from '../private/helpers';

export const contextClassNames = (): string[] => {
    return [NUI_PREFIX, ...colorSchemeClassNames(), ...themeClassNames(), ...surfaceClassNames()];
};
