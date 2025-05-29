import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ToggleActionProps } from './types';

export const TOGGLE_ACTION_PROPS = definePropKeys<ToggleActionProps>()([
    'value',
    'labels',
    'icons',
]);
