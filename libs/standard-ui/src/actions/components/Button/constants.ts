import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { BUTTON_PROPS as HEADLESS_BUTTON_PROPS } from '@noodlestan/headless-ui';

import { BUTTON_MIXIN_PROPS } from '../../mixins';

import type { ButtonProps } from './types';

//
export const BUTTON_PROPS = definePropKeys<ButtonProps>()([
    ...HEADLESS_BUTTON_PROPS,
    ...BUTTON_MIXIN_PROPS,
]);
