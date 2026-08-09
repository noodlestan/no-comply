import { definePropKeys } from '@no-comply/solid-primitives';

import type { InputBoxMixinProps } from './types';

export const $INPUT_BOX_MIXIN = 'mixin:standard:input-box';

export const INPUT_BOX_MIXIN_PROPS = definePropKeys<InputBoxMixinProps>()(['disabled']);
