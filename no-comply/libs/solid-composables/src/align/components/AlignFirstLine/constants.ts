import { definePropKeys } from '@no-comply/solid-primitives';

import { ALIGN_FIRST_LINE_RESOLVER_PROPS } from '../../private';

import type { AlignFirstLineProps } from './types';

export const $ALIGN_FIRST_LINE = 'component:composable:align-first-line';

export const ALIGN_FIRST_LINE_PROPS = definePropKeys<AlignFirstLineProps>()([
	...ALIGN_FIRST_LINE_RESOLVER_PROPS,
]);
