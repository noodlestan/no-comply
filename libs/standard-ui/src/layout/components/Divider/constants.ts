import { definePropKeys } from '@no-comply/solid-primitives';

import { DIVIDER_MIXIN_PROPS } from '../../mixins';

import type { DividerProps } from './types';

export const $DIVIDER = 'component:standard:divider';

export const DIVIDER_PROPS = definePropKeys<DividerProps>()([...DIVIDER_MIXIN_PROPS]);
