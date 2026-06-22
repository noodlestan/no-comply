import { definePropKeys } from '@no-comply/solid-primitives';

import { LAYOUT_MIXIN_PROPS } from '../../mixins';

import type { LayoutProps } from './types';

export const $LAYOUT = 'component:standard:layout';

export const LAYOUT_PROPS = definePropKeys<LayoutProps>()([...LAYOUT_MIXIN_PROPS, 'tag', 'role']);
