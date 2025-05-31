import { LINK_PROPS as HEADLESS_LINK_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { SKIP_LINK_MIXIN_PROPS } from '../../mixins';

import type { SkipLinkProps } from './types';

export const $SKIP_LINK = 'component:standard:skip-link';

export const SKIP_LINK_PROPS = definePropKeys<SkipLinkProps>()([
    ...HEADLESS_LINK_PROPS,
    ...SKIP_LINK_MIXIN_PROPS,
    'size',
]);
