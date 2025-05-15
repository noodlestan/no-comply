import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { TOGGLE_BUTTON_PROPS as HEADLESS_TOGGLE_BUTTON_PROPS } from '@noodlestan/headless-ui';

import type { ToggleButtonProps } from './types';

export const TOGGLE_BUTTON_PROPS = definePropKeys<ToggleButtonProps>()([
    'size',
    'onPress',
    'disabled',
    ...HEADLESS_TOGGLE_BUTTON_PROPS,
]);
