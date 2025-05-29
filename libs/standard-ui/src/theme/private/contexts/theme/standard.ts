import { createThemeVariant } from '@no-comply/solid-contexts';

import { contextVars } from './functions';

export const STANDARD_UI_THEME_STANDARD = createThemeVariant({
    name: 'standard',
    mode: 'dark',
    contextVars,
});
