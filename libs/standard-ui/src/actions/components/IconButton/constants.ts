import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { ICON_BUTTON_PROPS as HEADLESS_ICON_BUTTON_PROPS } from '@noodlestan/headless-ui';

import { BUTTON_PROPS } from '../Button';

import type { IconButtonProps } from './types';

export const ICON_BUTTON_PROPS = definePropKeys<IconButtonProps>()([
    ...BUTTON_PROPS,
    ...HEADLESS_ICON_BUTTON_PROPS,
    'rounded',
]);
