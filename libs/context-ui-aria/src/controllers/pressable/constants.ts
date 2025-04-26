import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { AriaPressableProps } from './types';

export const ARIA_PRESSABLE_PROPS = definePropKeys<AriaPressableProps>()([
    'tag',
    'role',
    'type',
    'tabIndex',
    'disabled',
]);
