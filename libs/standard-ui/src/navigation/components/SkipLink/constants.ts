import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { SKIP_LINK_MIXIN_PROPS } from '../../mixins';
import { LINK_PROPS } from '../Link';

import type { SkipLinkProps } from './types';

export const SKIP_LINK_PROPS = definePropKeys<SkipLinkProps>()([
    ...LINK_PROPS,
    ...SKIP_LINK_MIXIN_PROPS,
    'size',
]);
