import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { DISPLAY_OWN_PROPS } from '../Display';

import type { DisplayAlignedProps } from './types';

export const DISPLAY_ALIGNED_PROPS = definePropKeys<DisplayAlignedProps>()([...DISPLAY_OWN_PROPS]);
