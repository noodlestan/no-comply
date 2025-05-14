import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { NAV_LINK_PROPS as HEADLESS_NAV_LINK_PROPS } from '@noodlestan/headless-ui';

import { LINK_PROPS } from '../Link';

import type { NavLinkProps } from './types';

export const NAV_LINK_PROPS = definePropKeys<NavLinkProps>()([
    ...LINK_PROPS,
    ...HEADLESS_NAV_LINK_PROPS,
    'size',
]);
