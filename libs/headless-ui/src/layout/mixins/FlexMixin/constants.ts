import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { FlexMixinProps } from './types';

export const FLEX_MIXIN_PROPS = definePropKeys<FlexMixinProps>()([
    'direction',
    'align',
    'justify',
    'gap',
    'shrink',
    'inline',
    'wrap',
    'flex',
]);
