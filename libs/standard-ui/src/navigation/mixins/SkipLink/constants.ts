import { definePropKeys } from '@no-comply/solid-primitives';

import type { SkipLinkMixinProps } from './types';

export const $SKIP_LINK_MIXIN = 'mixin:standard:skip-link';

export const SKIP_LINK_MIXIN_PROPS = definePropKeys<SkipLinkMixinProps>()(['floating']);
