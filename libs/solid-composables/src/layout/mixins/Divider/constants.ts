import { definePropKeys } from '@no-comply/solid-primitives';

import type { DividerMixinProps } from './types';

export const DIVIDER_MIXIN_PROPS = definePropKeys<DividerMixinProps>()(['tag', 'orientation']);
