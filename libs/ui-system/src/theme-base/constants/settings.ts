import type { Setting, SettingGroup } from '../../settings';
import {
    THEME_SETTING_COLORS_ACTION,
    THEME_SETTING_COLORS_FOCUSED,
    THEME_SETTING_COLOR_SELECTED,
    THEME_SETTING_MODE,
    THEME_SETTING_OPACITY_BG,
    THEME_SETTING_OPACITY_FG,
} from '../private';

export const CONTEXT_UI_BASE_THEME_SETTINGS: Setting[] = [
    THEME_SETTING_MODE,
    THEME_SETTING_COLORS_ACTION,
    THEME_SETTING_COLOR_SELECTED,
    THEME_SETTING_COLORS_FOCUSED,
    THEME_SETTING_OPACITY_FG,
    THEME_SETTING_OPACITY_BG,
];

export const CONTEXT_UI_BASE_THEME_SETTINGS_GROUPS: SettingGroup[] = [
    {
        key: 'theme-base',
        name: 'Theme',
        order: 1000,
        icon: 'AppWindowIcon',
        groups: [
            {
                key: 'theme-base.mode',
                name: 'Color Scheme',
            },
            {
                key: 'theme-base.colors',
                name: 'Colors',
            },
            {
                key: 'theme-base.opacity',
                name: 'Opacity',
            },
        ],
    },
];
