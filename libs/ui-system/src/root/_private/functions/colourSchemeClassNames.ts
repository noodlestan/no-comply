import { NUI_COLOUR_SCHEME_PREFIX } from '../../constants';
import { useColourSchemeContext } from '../../providers/ColourSchemeProvider';

import { makeNuiClassName } from './makeNuiClassName';

export const colourSchemeClassNames = (): string[] => {
    const { colourScheme } = useColourSchemeContext();
    return [makeNuiClassName(NUI_COLOUR_SCHEME_PREFIX, colourScheme())];
};
