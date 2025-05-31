import { ICON_ACTION_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { ICON_BUTTON_MIXIN_PROPS } from '../../mixins';
import { BUTTON_PROPS } from '../Button';

import type { IconButtonProps } from './types';

export const $ICON_BUTTON = 'component:standard:icon-button';

export const ICON_BUTTON_PROPS = definePropKeys<IconButtonProps>()([
    ...BUTTON_PROPS,
    ...ICON_ACTION_PROPS,
    ...ICON_BUTTON_MIXIN_PROPS,
]);
