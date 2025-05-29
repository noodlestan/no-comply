import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { LAYOUT_MIXIN_PROPS } from '../../mixins';

import type { LayoutProps } from './types';

export const LAYOUT_PROPS = definePropKeys<LayoutProps>()([...LAYOUT_MIXIN_PROPS, 'tag']);
