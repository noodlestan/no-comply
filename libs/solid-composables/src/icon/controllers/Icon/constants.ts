import { definePropKeys } from '@no-comply/solid-primitives';

import type { IconProps } from './types';

export const $ICON = 'controller:composable:icon';

export const ICON_PROPS = definePropKeys<IconProps>()(['icon']);
