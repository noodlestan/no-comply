import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { LayoutMixinProps } from './types';

export const LAYOUT_MIXIN_PROPS = definePropKeys<LayoutMixinProps>()([
    'stretch',
    'uncontained',
    'overflow',
]);
