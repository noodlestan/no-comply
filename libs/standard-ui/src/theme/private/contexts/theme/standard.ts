import { createThemeVariant } from '@noodlestan/context-ui';

import { contextVars } from './functions';

export const STANDARD_UI_THEME_STANDARD = createThemeVariant({
    name: 'standard',
    mode: 'dark',
    contextVars,
});
