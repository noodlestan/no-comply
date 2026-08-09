import { definePropKeys } from '@no-comply/solid-primitives';

import { DISPLAY_MIXIN_PROPS } from '../../mixins';

import type { DisplayProps } from './types';

export const $DISPLAY = 'component:standard:display';

export const DISPLAY_PROPS = definePropKeys<DisplayProps>()([...DISPLAY_MIXIN_PROPS, 'tag']);
