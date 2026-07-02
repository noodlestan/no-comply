import { SIZED_TYPOGRAPHY_MIXIN_PROPS, TYPOGRAPHY_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { CodeMixinProps } from './types';

export const $CODE_MIXIN = 'mixin:standard:code';

export const CODE_MIXIN_PROPS = definePropKeys<CodeMixinProps>()([
	...TYPOGRAPHY_MIXIN_PROPS,
	...SIZED_TYPOGRAPHY_MIXIN_PROPS,
	'size',
]);
