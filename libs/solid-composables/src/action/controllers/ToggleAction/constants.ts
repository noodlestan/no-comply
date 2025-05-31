import { definePropKeys } from '@no-comply/solid-primitives';

import type { ToggleActionProps } from './types';

export const $TOGGLE_ACTION = 'controller:composable:toggle-action';

export const TOGGLE_ACTION_PROPS = definePropKeys<ToggleActionProps>()([
    'value',
    'labels',
    'icons',
]);
