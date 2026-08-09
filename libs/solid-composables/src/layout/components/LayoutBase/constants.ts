import { definePropKeys } from '@no-comply/solid-primitives';

import { LAYOUT_MIXIN_PROPS } from '../../mixins';

import type { LayoutBaseProps } from './types';

export const $LAYOUT_BASE = 'component:composable:layout-base';

export const LAYOUT_BASE_PROPS = definePropKeys<LayoutBaseProps>()([...LAYOUT_MIXIN_PROPS, 'tag']);
