import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ExpandActionProps } from './types';

export const EXPAND_ACTION_PROPS = definePropKeys<ExpandActionProps>()([
    'controls',
    'expanded',
    'labels',
    'icons',
]);
