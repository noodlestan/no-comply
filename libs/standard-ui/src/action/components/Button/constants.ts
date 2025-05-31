import { PRESSABLE_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { BUTTON_MIXIN_PROPS } from '../../mixins';

import type { ButtonProps } from './types';

export const $BUTTON = 'component:standard:button';

export const BUTTON_PROPS = definePropKeys<ButtonProps>()([
    ...PRESSABLE_PROPS,
    ...BUTTON_MIXIN_PROPS,
]);
