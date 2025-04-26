import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { BUTTON_PROPS as HEADLESS_BUTTON_PROPS } from '@noodlestan/headless-ui';

import type { ButtonProps } from './types';

//
export const BUTTON_PROPS = definePropKeys<ButtonProps>()([
    ...HEADLESS_BUTTON_PROPS,
    'variant',
    'size',
]);
