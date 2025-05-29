import { EXPAND_ACTION_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { ExpandButtonProps } from './types';

export const EXPAND_BUTTON_PROPS = definePropKeys<ExpandButtonProps>()([
    'size',
    'onPress',
    'disabled',
    'aligned',
    ...EXPAND_ACTION_PROPS,
]);
