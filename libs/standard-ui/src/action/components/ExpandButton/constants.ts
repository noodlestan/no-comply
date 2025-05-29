import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { EXPAND_ACTION_PROPS } from '@noodlestan/headless-ui';

import type { ExpandButtonProps } from './types';

export const EXPAND_BUTTON_PROPS = definePropKeys<ExpandButtonProps>()([
    'size',
    'onPress',
    'disabled',
    'aligned',
    ...EXPAND_ACTION_PROPS,
]);
