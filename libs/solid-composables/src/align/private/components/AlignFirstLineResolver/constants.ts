import { definePropKeys } from '@no-comply/solid-primitives';

import type { AlignFirstLineResolverProps } from './types';

export const $ALIGN_FIRST_LINE_RESOLVER = 'component:composable:align-first-line-resolver';

export const ALIGN_FIRST_LINE_RESOLVER_PROPS = definePropKeys<AlignFirstLineResolverProps>()([
	'tag',
]);
