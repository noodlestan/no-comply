import { ARIA_SEPRATOR_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { DividerMixinProps } from './types';

export const DIVIDER_MIXIN_PROPS = definePropKeys<DividerMixinProps>()([...ARIA_SEPRATOR_PROPS]);
