import type { Setting } from '../../../settings';

export const THEME_SETTING_MODE: Setting = {
    id: 'theme-base.mode.value',
    name: 'Color Scheme Mode',
    type: 'options',
    defaultValue: 'system',
    options: ['dark', 'light', 'system'],
    description: 'Sets the color scheme mode for the entire UI.',
};

export const THEME_SETTING_COLORS_ACTION: Setting = {
    id: 'theme-base.colors.action',
    name: 'Action Color',
    type: 'color-hue',
    lightness: '--color-fg-light-6',
    defaultValue: 11,
    description: 'Sets the color of the UI actions.',
};

export const THEME_SETTING_COLOR_SELECTED: Setting = {
    id: 'theme-base.colors.selected',
    name: 'Selected Color',
    type: 'color-hue',
    lightness: '--surface-mid-light',
    defaultValue: 14,
    description: 'Sets the color of selected items.',
};

export const THEME_SETTING_COLORS_FOCUSED: Setting = {
    id: 'theme-base.colors.focused',
    name: 'Focused Color',
    type: 'color-hue',
    lightness: '--surface-mid-light',
    defaultValue: 8,
    description: 'Sets the outline color of focused items.',
};

export const THEME_SETTING_OPACITY_FG: Setting = {
    id: 'theme-base.opacity.fg',
    name: 'Foreground',
    type: 'range',
    range: [0.5, 1],
    defaultValue: 1,
    description: 'Sets the opacity of foreground UI elements.',
};

export const THEME_SETTING_OPACITY_BG: Setting = {
    id: 'theme-base.opacity.bg',
    name: 'Background',
    type: 'range',
    range: [0.5, 1],
    defaultValue: 1,
    description: 'Sets the opacity of background UI elements.',
};
