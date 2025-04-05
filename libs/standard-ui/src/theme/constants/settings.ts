import type { Setting, SettingGroup } from '@noodlestan/context-ui';

import {
    THEME_SETTING_COLORS_ACTION,
    THEME_SETTING_COLORS_FOCUSED,
    THEME_SETTING_COLOR_SELECTED,
    THEME_SETTING_MODE,
    THEME_SETTING_OPACITY_BG,
    THEME_SETTING_OPACITY_FG,
} from '../private';

export const STANDARD_UI_SETTINGS: Setting[] = [
    THEME_SETTING_MODE,
    THEME_SETTING_COLORS_ACTION,
    THEME_SETTING_COLOR_SELECTED,
    THEME_SETTING_COLORS_FOCUSED,
    THEME_SETTING_OPACITY_FG,
    THEME_SETTING_OPACITY_BG,
];

export const STANDARD_UI_SETTINGS_GROUPS: SettingGroup[] = [
    {
        key: 'standard-ui',
        name: 'Theme',
        order: 1000,
        icon: 'AppWindowIcon',
        groups: [
            {
                key: 'standard-ui.mode',
                name: 'Color Scheme',
            },
            {
                key: 'standard-ui.colors',
                name: 'Colors',
            },
            {
                key: 'standard-ui.opacity',
                name: 'Opacity',
            },
        ],
    },
];
