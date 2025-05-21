import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { FOCUS_RING_MIXIN_PROPS } from '../../../focus';

import type { LinkMixinProps } from './types';

export const LINK_MIXIN_PROPS = definePropKeys<LinkMixinProps>()(FOCUS_RING_MIXIN_PROPS);
