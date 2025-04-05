import { createThemeValue } from '@noodlestan/context-ui';

import { contextVars } from './functions';

export const STANDARD_UI_THEME_STANDARD = createThemeValue({
    name: 'standard',
    mode: 'dark',
    contextVars,
});
