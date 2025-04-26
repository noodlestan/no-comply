import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { FLEX_MIXIN_PROPS } from '../../mixins';
import { LAYOUT_BASE_PROPS } from '../LayoutBase';

import type { FlexBaseProps } from './types';

export const FLEX_BASE_PROPS = definePropKeys<FlexBaseProps>()([
    ...LAYOUT_BASE_PROPS,
    ...FLEX_MIXIN_PROPS,
]);
