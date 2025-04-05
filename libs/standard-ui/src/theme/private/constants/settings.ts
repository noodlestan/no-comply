import type { Setting } from '@noodlestan/context-ui';

export const THEME_SETTING_MODE: Setting = {
    id: 'standard-ui.mode.value',
    name: 'Color Scheme Mode',
    type: 'options',
    defaultValue: 'system',
    options: ['dark', 'light', 'system'],
    description: 'Sets the color scheme mode for the entire UI.',
};

export const THEME_SETTING_COLORS_ACTION: Setting = {
    id: 'standard-ui.colors.action',
    name: 'Action Color',
    type: 'color-name',
    index: '400',
    defaultValue: 'ocean',
    description: 'Sets the color of the UI actions.',
};

export const THEME_SETTING_COLOR_SELECTED: Setting = {
    id: 'standard-ui.colors.selected',
    name: 'Selected Color',
    type: 'color-name',
    index: '400',
    defaultValue: 'olive',
    description: 'Sets the color of selected items.',
};

export const THEME_SETTING_COLORS_FOCUSED: Setting = {
    id: 'standard-ui.colors.focused',
    name: 'Focused Color',
    type: 'color-name',
    index: '400',
    defaultValue: 'indigo',
    description: 'Sets the outline color of focused items.',
};

export const THEME_SETTING_OPACITY_FG: Setting = {
    id: 'standard-ui.opacity.fg',
    name: 'Foreground',
    type: 'range',
    range: [0.5, 1],
    defaultValue: 1,
    description: 'Sets the opacity of foreground UI elements.',
};

export const THEME_SETTING_OPACITY_BG: Setting = {
    id: 'standard-ui.opacity.bg',
    name: 'Background',
    type: 'range',
    range: [0.5, 1],
    defaultValue: 1,
    description: 'Sets the opacity of background UI elements.',
};
