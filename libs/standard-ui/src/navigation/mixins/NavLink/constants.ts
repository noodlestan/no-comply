import { definePropKeys } from '@no-comply/solid-primitives';

import { LINK_MIXIN_PROPS } from '../Link';

import type { NavLinkMixinProps } from './types';

export const $NAV_LINK_MIXIN = 'mixin:standard:nav-link';

export const NAV_LINK_MIXIN_PROPS = definePropKeys<NavLinkMixinProps>()([
    ...LINK_MIXIN_PROPS,
    'layout',
    'size',
    'nowrap',
    'highlight',
]);
