import { useSettingSafely } from '@no-comply/solid-contexts';
import type { Styles } from '@no-comply/solid-primitives';

import {
	THEME_SETTING_COLORS_ACTION,
	THEME_SETTING_COLORS_FOCUSED,
	THEME_SETTING_COLOR_SELECTED,
	THEME_SETTING_OPACITY_BG,
	THEME_SETTING_OPACITY_FG,
} from '../../../constants';

import { getOpacityScale } from './getOpacityScale';

export const contextVars = (): Styles => {
	const actionColorName = useSettingSafely(THEME_SETTING_COLORS_ACTION);
	const selectedColorName = useSettingSafely(THEME_SETTING_COLOR_SELECTED);
	const focusedColorName = useSettingSafely(THEME_SETTING_COLORS_FOCUSED);

	const opacityFg = useSettingSafely(THEME_SETTING_OPACITY_FG);
	const opacityBg = useSettingSafely(THEME_SETTING_OPACITY_BG);

	return {
		[`--color-name-action`]: String(actionColorName),
		[`--color-name-selected`]: String(selectedColorName),
		[`--color-name-focused`]: String(focusedColorName),
		...getOpacityScale('fg', Number(opacityFg)),
		...getOpacityScale('bg', Number(opacityBg)),
	};
};
