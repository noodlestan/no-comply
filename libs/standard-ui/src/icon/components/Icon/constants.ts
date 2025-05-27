import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { ICON_PROPS as HEADLESS_ICON_PROPS, ICON_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { IconProps } from './types';

export const ICON_PROPS = definePropKeys<IconProps>()([
    ...HEADLESS_ICON_PROPS,
    ...ICON_MIXIN_PROPS,
    'size',
]);
