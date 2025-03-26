import type { Styles } from '../../../../../dom';
import { useSettingSafely } from '../../../../../settings';
import {
    THEME_SETTING_COLORS_ACTION,
    THEME_SETTING_COLORS_FOCUSED,
    THEME_SETTING_COLOR_SELECTED,
    THEME_SETTING_OPACITY_BG,
    THEME_SETTING_OPACITY_FG,
} from '../../../constants';

import { getColorStyleByHue } from './getColorStyleByHue';
import { getOpacityScale } from './getOpacityScale';

export const contextVars = (): Styles => {
    const actionHue = useSettingSafely(THEME_SETTING_COLORS_ACTION);
    const selectedHue = useSettingSafely(THEME_SETTING_COLOR_SELECTED);
    const focusedHue = useSettingSafely(THEME_SETTING_COLORS_FOCUSED);

    const opacityFg = useSettingSafely(THEME_SETTING_OPACITY_FG);
    const opacityBg = useSettingSafely(THEME_SETTING_OPACITY_BG);

    return {
        ...getColorStyleByHue('--color-i-rest-hue-sat', Number(actionHue)),
        ...getColorStyleByHue('--color-selected-hue-sat', Number(selectedHue)),
        ...getColorStyleByHue('--color-focused-hue-sat', Number(focusedHue)),
        ...getOpacityScale('fg', Number(opacityFg)),
        ...getOpacityScale('bg', Number(opacityBg)),
    };
};
