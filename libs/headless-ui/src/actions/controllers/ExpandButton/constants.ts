import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ExpandButtonProps } from './types';

export const EXPAND_BUTTON_PROPS = definePropKeys<ExpandButtonProps>()([
    'controls',
    'expanded',
    'labels',
    'icons',
]);
