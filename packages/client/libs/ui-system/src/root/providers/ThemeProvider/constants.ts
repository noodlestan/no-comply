import { AppWindowIcon } from 'lucide-solid';

import { Setting, SettingGroup } from '../../../providers';

export const THEME_SETTINGS: Setting[] = [
    {
        id: 'ui-system.colors.action',
        name: 'Action Color',
        type: 'color-hue',
        lightness: '--color-fg-light-6',
        defaultValue: 11,
        description: 'Sets the color of the UI actions.',
    },
    {
        id: 'ui-system.colors.selected',
        name: 'Selected Color',
        type: 'color-hue',
        lightness: '--surface-mid-light',
        defaultValue: 14,
        description: 'Sets the color of selected items.',
    },
    {
        id: 'ui-system.colors.focused',
        name: 'Focused Color',
        type: 'color-hue',
        lightness: '--surface-mid-light',
        defaultValue: 8,
        description: 'Sets the outline color of focused items.',
    },
    {
        id: 'ui-system.opacity.fg',
        name: 'Foreground',
        type: 'range',
        range: [0.5, 1],
        defaultValue: 1,
        description: 'Sets the opacity of foreground UI elements.',
    },
    {
        id: 'ui-system.opacity.bg',
        name: 'Background',
        type: 'range',
        range: [0.5, 1],
        defaultValue: 1,
        description: 'Sets the opacity of background UI elements.',
    },
];

export const THEME_SETTINGS_GROUPS: SettingGroup[] = [
    {
        key: 'ui-system',
        name: 'Theme',
        order: 1000,
        icon: AppWindowIcon,
        groups: [
            {
                key: 'ui-system.colors',
                name: 'Colors',
            },
            {
                key: 'ui-system.opacity',
                name: 'Opacity',
            },
        ],
    },
];
