import { LAYOUT_MIXIN_PROPS as HEADLESS_LAYOUT_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { LayoutMixinProps } from './types';

export const $LAYOUT_MIXIN = 'mixin:standard:layout';

export const LAYOUT_MIXIN_PROPS = definePropKeys<LayoutMixinProps>()(HEADLESS_LAYOUT_MIXIN_PROPS);
