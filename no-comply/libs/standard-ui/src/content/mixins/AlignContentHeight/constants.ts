import { definePropKeys } from '@no-comply/solid-primitives';

import type { AlignContentHeightMixinProps } from './types';

export const $ALIGN_CONTENT_HEIGHT_MIXIN = 'mixin:standard:align-first-line-content-height';

export const ALIGN_CONTENT_HEIGHT_MIXIN_PROPS = definePropKeys<AlignContentHeightMixinProps>()([
	'height',
]);
