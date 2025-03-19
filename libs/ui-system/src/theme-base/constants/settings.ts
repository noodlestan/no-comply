import { AppWindowIcon } from 'lucide-solid';

import { Setting, SettingGroup } from '../../providers';

export const THEME_SETTINGS: Setting[] = [
    {
        id: 'theme-base.colors.action',
        name: 'Action Color',
        type: 'color-hue',
        lightness: '--color-fg-light-6',
        defaultValue: 11,
        description: 'Sets the color of the UI actions.',
    },
    {
        id: 'theme-base.colors.selected',
        name: 'Selected Color',
        type: 'color-hue',
        lightness: '--surface-mid-light',
        defaultValue: 14,
        description: 'Sets the color of selected items.',
    },
    {
        id: 'theme-base.colors.focused',
        name: 'Focused Color',
        type: 'color-hue',
        lightness: '--surface-mid-light',
        defaultValue: 8,
        description: 'Sets the outline color of focused items.',
    },
    {
        id: 'theme-base.opacity.fg',
        name: 'Foreground',
        type: 'range',
        range: [0.5, 1],
        defaultValue: 1,
        description: 'Sets the opacity of foreground UI elements.',
    },
    {
        id: 'theme-base.opacity.bg',
        name: 'Background',
        type: 'range',
        range: [0.5, 1],
        defaultValue: 1,
        description: 'Sets the opacity of background UI elements.',
    },
];

export const THEME_SETTINGS_GROUPS: SettingGroup[] = [
    {
        key: 'theme-base',
        name: 'Theme',
        order: 1000,
        icon: AppWindowIcon,
        groups: [
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
