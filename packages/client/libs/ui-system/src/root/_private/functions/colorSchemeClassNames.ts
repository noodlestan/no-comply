import { NUI_COLOR_SCHEME_PREFIX } from '../../constants';
import { useColorSchemeContext } from '../../providers/ColorSchemeProvider';

import { makeNuiClassName } from './makeNuiClassName';

export const colorSchemeClassNames = (): string[] => {
    const { colorScheme } = useColorSchemeContext();
    return [makeNuiClassName(NUI_COLOR_SCHEME_PREFIX, colorScheme())];
};
