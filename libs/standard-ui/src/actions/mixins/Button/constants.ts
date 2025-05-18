import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { ACTION_MIXIN_PROPS } from '../Action';

import type { ButtonMixinProps } from './types';

export const BUTTON_MIXIN_PROPS = definePropKeys<ButtonMixinProps>()(ACTION_MIXIN_PROPS);
