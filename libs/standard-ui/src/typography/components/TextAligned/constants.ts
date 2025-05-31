import { definePropKeys } from '@no-comply/solid-primitives';

import { TEXT_OWN_PROPS } from '../Text';

import type { TextAlignedProps } from './types';

export const $TEXT_ALIGNED = 'component:standard:text-aligned';

export const TEXT_ALIGNED_PROPS = definePropKeys<TextAlignedProps>()([...TEXT_OWN_PROPS]);
