import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { SCROLLABLE_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { ScrollableProps } from './types';

export const SCROLLABLE_PROPS = definePropKeys<ScrollableProps>()([
    ...SCROLLABLE_MIXIN_PROPS,
    'padding',
]);
