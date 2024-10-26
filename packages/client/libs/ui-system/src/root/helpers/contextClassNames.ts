import { colorSchemeClassNames } from '../_private/functions/colorSchemeClassNames';
import { surfaceClassNames } from '../_private/functions/surfaceClassNames';
import { themeClassNames } from '../_private/functions/themeClassNames';
import { NUI_PREFIX } from '../constants';

export const contextClassNames = (): string[] => {
    return [NUI_PREFIX, ...colorSchemeClassNames(), ...themeClassNames(), ...surfaceClassNames()];
};
