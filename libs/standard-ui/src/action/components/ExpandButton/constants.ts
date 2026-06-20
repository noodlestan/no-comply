import { EXPAND_ACTION_PROPS } from '@no-comply/solid-composables';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { ICON_BUTTON_PROPS } from '../IconButton';

import type { ExpandButtonProps } from './types';

export const $EXPAND_BUTTON = 'component:standard:expand-button';

export const EXPAND_BUTTON_PROPS = definePropKeys<ExpandButtonProps>()([
	...omitPropKeys(ICON_BUTTON_PROPS, ['label', 'icon'] as const),
	...EXPAND_ACTION_PROPS,
]);
