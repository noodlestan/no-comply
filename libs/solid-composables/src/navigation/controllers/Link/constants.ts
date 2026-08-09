import { definePropKeys } from '@no-comply/solid-primitives';

import { PRESSABLE_PROPS } from '../../../action';

import type { LinkProps } from './types';

export const $LINK = 'controller:composable:link';

export const LINK_PROPS = definePropKeys<LinkProps>()([
	...PRESSABLE_PROPS,
	'href',
	'target',
	'rel',
]);
