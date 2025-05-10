import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { FLEX_MIXIN_PROPS } from '../../mixins';
import { LAYOUT_PROPS } from '../Layout';

import type { FlexProps } from './types';

export const FLEX_PROPS = definePropKeys<FlexProps>()([
    ...LAYOUT_PROPS,
    ...FLEX_MIXIN_PROPS,
    'gap',
]);
