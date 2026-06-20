import {
	LINK_PROPS as HEADLESS_LINK_PROPS,
	NAV_LINK_PROPS as HEADLESS_NAV_LINK_PROPS,
} from '@no-comply/solid-composables';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { NAV_LINK_MIXIN_PROPS } from '../../mixins';

import type { NavLinkProps } from './types';

export const $NAV_LINK = 'component:standard:nav-link';

export const NAV_LINK_PROPS = definePropKeys<NavLinkProps>()([
	...HEADLESS_LINK_PROPS,
	...omitPropKeys(HEADLESS_NAV_LINK_PROPS, ['href'] as const),
	...NAV_LINK_MIXIN_PROPS,
]);
