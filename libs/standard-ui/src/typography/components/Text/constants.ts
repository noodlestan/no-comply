import { definePropKeys } from '@no-comply/solid-primitives';

import { TEXT_MIXIN_PROPS } from '../../mixins';

import type { TextProps } from './types';

export const $TEXT = 'component:standard:text';

export const TEXT_PROPS = definePropKeys<TextProps>()([...TEXT_MIXIN_PROPS, 'tag']);
