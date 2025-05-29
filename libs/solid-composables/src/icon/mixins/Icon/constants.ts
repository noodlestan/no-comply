import { definePropKeys } from '@no-comply/solid-primitives';

import { ALIGN_TO_FIRST_LINE_MIXIN_PROPS } from '../../../text';

import type { IconMixinProps } from './types';

export const ICON_MIXIN_PROPS = definePropKeys<IconMixinProps>()([
    ...ALIGN_TO_FIRST_LINE_MIXIN_PROPS,
]);
