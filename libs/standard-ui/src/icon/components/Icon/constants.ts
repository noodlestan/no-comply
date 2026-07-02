import { ICON_PROPS as HEADLESS_ICON_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { SIZED_ICON_MIXIN_PROPS } from '../../mixins';

import type { IconProps } from './types';

export const $ICON = 'component:standard:icon';

export const ICON_PROPS = definePropKeys<IconProps>()([
	...HEADLESS_ICON_PROPS,
	...SIZED_ICON_MIXIN_PROPS,
]);
