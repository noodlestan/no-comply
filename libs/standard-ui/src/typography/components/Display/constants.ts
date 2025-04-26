import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { TEXT_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { DisplayProps } from './types';

export const DISPLAY_PROPS = definePropKeys<DisplayProps>()([
    ...TEXT_MIXIN_PROPS,
    'tag',
    'level',
    'variant',
]);
