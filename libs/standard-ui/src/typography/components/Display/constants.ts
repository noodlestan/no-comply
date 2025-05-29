import { definePropKeys } from '@no-comply/solid-primitives';

import { DISPLAY_MIXIN_PROPS } from '../../mixins';

import type { DisplayOwnProps, DisplayProps } from './types';

export const DISPLAY_OWN_PROPS = definePropKeys<DisplayOwnProps>()(['tag']);

export const DISPLAY_PROPS = definePropKeys<DisplayProps>()([
    ...DISPLAY_MIXIN_PROPS,
    ...DISPLAY_OWN_PROPS,
]);
