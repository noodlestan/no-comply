import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { TEXT_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { LabelProps } from './types';

export const LABEL_PROPS = definePropKeys<LabelProps>()([...TEXT_MIXIN_PROPS, 'variant']);
