import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { LayoutMixinProps } from './types';

export const LAYOUT_MIXIN_PROPS = definePropKeys<LayoutMixinProps>()([
    'padding',
    'stretch',
    'uncontained',
    'overflow',
]);
