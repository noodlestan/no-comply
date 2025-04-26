import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { NavLinkProps } from './types';

export const NAV_LINK_PROPS = definePropKeys<NavLinkProps>()(['href', 'exact', 'current']);
