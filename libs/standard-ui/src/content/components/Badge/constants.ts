import { definePropKeys } from '@no-comply/solid-primitives';

import { BADGE_MIXIN_PROPS } from '../../mixins';

import type { BadgeProps } from './types';

export const $BADGE = 'component:standard:badge';

export const BADGE_PROPS = definePropKeys<BadgeProps>()([...BADGE_MIXIN_PROPS]);
