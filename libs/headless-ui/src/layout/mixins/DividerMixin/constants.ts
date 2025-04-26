import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { DividerMixinProps } from './types';

export const DIVIDER_MIXIN_PROPS = definePropKeys<DividerMixinProps>()(['tag', 'orientation']);
