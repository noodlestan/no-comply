import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { ICON_ACTION_PROPS } from '@noodlestan/headless-ui';

import { ICON_BUTTON_MIXIN_PROPS } from '../../mixins';
import { BUTTON_PROPS } from '../Button';

import type { IconButtonProps } from './types';

export const ICON_BUTTON_PROPS = definePropKeys<IconButtonProps>()([
    ...BUTTON_PROPS,
    ...ICON_ACTION_PROPS,
    ...ICON_BUTTON_MIXIN_PROPS,
]);
