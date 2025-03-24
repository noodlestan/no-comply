import { createTheme } from '../../../../theme';

import { contextVars } from './functions';

export const CONTEXT_UI_THEME_BASE = createTheme({
    name: 'base',
    mode: 'dark',
    contextVars,
});
