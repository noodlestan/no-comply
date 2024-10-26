import { NUI_THEME_PREFIX } from '../../constants';
import { useThemeContext } from '../../providers/ThemeProvider';
import { themesStore } from '../../stores';
import { SystemTheme } from '../../types';

import { makeNuiClassName } from './makeNuiClassName';

const themeNames = (theme: SystemTheme): string[] => {
    const { themeByName } = themesStore;

    return [theme.name, ...theme.extend.flatMap(theme => themeNames(themeByName(theme)))];
};

export const themeClassNames = (): string[] => {
    const { theme } = useThemeContext();
    return themeNames(theme()).map(t => makeNuiClassName(NUI_THEME_PREFIX, t));
};
