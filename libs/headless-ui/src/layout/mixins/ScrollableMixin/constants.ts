import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ScrollableMixinProps } from './types';

export const SCROLLABLE_MIXIN_PROPS = definePropKeys<ScrollableMixinProps>()(['tag', 'x', 'y']);
