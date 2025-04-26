import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ToggleButtonProps } from './types';

export const TOGGLE_BUTTON_PROPS = definePropKeys<ToggleButtonProps>()([
    'value',
    'labels',
    'icons',
]);
