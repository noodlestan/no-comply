import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { LINK_PROPS as HEADLESS_LINK_PROPS } from '@noodlestan/headless-ui';

import { SKIP_LINK_MIXIN_PROPS } from '../../mixins';

import type { SkipLinkProps } from './types';

export const SKIP_LINK_PROPS = definePropKeys<SkipLinkProps>()([
    ...HEADLESS_LINK_PROPS,
    ...SKIP_LINK_MIXIN_PROPS,
    'size',
]);
