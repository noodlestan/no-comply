import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { TEXT_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { TextProps } from './types';

export const TEXT_PROPS = definePropKeys<TextProps>()([...TEXT_MIXIN_PROPS, 'tag', 'variant']);
