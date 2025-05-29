import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { LAYOUT_MIXIN_PROPS as HEADLESS_LAYOUT_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { LayoutMixinProps } from './types';

export const LAYOUT_MIXIN_PROPS = definePropKeys<LayoutMixinProps>()(HEADLESS_LAYOUT_MIXIN_PROPS);
