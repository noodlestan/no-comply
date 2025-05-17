import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { NavLinkMixinProps } from './types';

export const NAV_LINK_MIXIN_PROPS = definePropKeys<NavLinkMixinProps>()([
    'layout',
    'size',
    'nowrap',
    'highlight',
]);
