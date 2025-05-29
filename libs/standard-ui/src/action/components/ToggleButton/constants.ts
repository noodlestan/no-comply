import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { TOGGLE_ACTION_PROPS } from '@noodlestan/headless-ui';

import type { ToggleButtonProps } from './types';

export const TOGGLE_BUTTON_PROPS = definePropKeys<ToggleButtonProps>()([
    'size',
    'onPress',
    'disabled',
    ...TOGGLE_ACTION_PROPS,
]);
