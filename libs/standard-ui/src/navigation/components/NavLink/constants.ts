import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { NAV_LINK_PROPS as HEADLESS_NAV_LINK_PROPS, LINK_PROPS } from '@noodlestan/headless-ui';

import type { NavLinkProps } from './types';

export const NAV_LINK_PROPS = definePropKeys<NavLinkProps>()([
    ...LINK_PROPS,
    ...HEADLESS_NAV_LINK_PROPS,
    'size',
]);
