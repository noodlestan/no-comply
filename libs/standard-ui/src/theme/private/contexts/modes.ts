import { createModeVariant } from '@noodlestan/context-ui';

export const STANDARD_UI_MODE_DARK = createModeVariant({
    name: 'dark',
});

export const STANDARD_UI_MODE_LIGHT = createModeVariant({
    name: 'light',
});

export const STANDARD_UI_MODES = [STANDARD_UI_MODE_DARK, STANDARD_UI_MODE_LIGHT];
