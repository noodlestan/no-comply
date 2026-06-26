import { definePropKeys } from '@no-comply/solid-primitives';

import type { ToggleActionMixinProps } from './types';

export const $TOGGLE_ACTION_MIXIN = 'mixin:standard:toggle-action';

export const TOGGLE_ACTION_MIXIN_PROPS = definePropKeys<ToggleActionMixinProps>()(['value']);
