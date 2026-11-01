import { ICON_PROPS as HEADLESS_ICON_PROPS } from '@no-comply/solid-composables';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { SIZED_CONTENT_MIXIN_PROPS } from '../../../content';

import type { IconProps } from './types';

export const $ICON = 'component:standard:icon';

export const ICON_PROPS = definePropKeys<IconProps>()([
	...HEADLESS_ICON_PROPS,
	...omitPropKeys(SIZED_CONTENT_MIXIN_PROPS, ['scale'] as const),
]);
