import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { LAYOUT_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { LayoutProps } from './types';

export const LAYOUT_PROPS = definePropKeys<LayoutProps>()([...LAYOUT_MIXIN_PROPS, 'padding']);
