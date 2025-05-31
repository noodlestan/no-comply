import { definePropKeys } from '@no-comply/solid-primitives';

import type { ExpandActionProps } from './types';

export const $EXPAND_ACTION = 'controller:composable:expand-action';

export const EXPAND_ACTION_PROPS = definePropKeys<ExpandActionProps>()([
    'controls',
    'expanded',
    'labels',
    'icons',
]);
