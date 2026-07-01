import { definePropKeys } from '@no-comply/solid-primitives';

import { CODE_MIXIN_PROPS } from '../../mixins';

import type { CodeProps } from './types';

export const $CODE = 'component:standard:code';

export const CODE_PROPS = definePropKeys<CodeProps>()([...CODE_MIXIN_PROPS, 'tag']);
