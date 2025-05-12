import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ButtonMixinProps } from './types';

export const BUTTON_MIXIN_PROPS = definePropKeys<ButtonMixinProps>()(['variant', 'size']);
