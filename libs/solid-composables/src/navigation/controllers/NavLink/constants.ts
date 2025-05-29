import { definePropKeys } from '@no-comply/solid-primitives';

import type { NavLinkProps } from './types';

export const NAV_LINK_PROPS = definePropKeys<NavLinkProps>()(['href', 'exact', 'current', 'mode']);
