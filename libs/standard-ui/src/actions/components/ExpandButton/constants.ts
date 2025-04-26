import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { EXPAND_BUTTON_PROPS as HEADLESS_EXPAND_BUTTON_PROPS } from '@noodlestan/headless-ui';

import type { ExpandButtonProps } from './types';

export const EXPAND_BUTTON_PROPS = definePropKeys<ExpandButtonProps>()([
    'variant',
    'size',
    'onPress',
    ...HEADLESS_EXPAND_BUTTON_PROPS,
]);
