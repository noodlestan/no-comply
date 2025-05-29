import { definePropKeys } from '@no-comply/solid-primitives';

import type { ScrollableMixinProps } from './types';

export const SCROLLABLE_MIXIN_PROPS = definePropKeys<ScrollableMixinProps>()(['tag', 'x', 'y']);
