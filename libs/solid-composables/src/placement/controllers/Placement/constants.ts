import { definePropKeys } from '@no-comply/solid-primitives';

import type { PlacementProps } from './types';

export const PLACEMENT_PROPS = definePropKeys<PlacementProps>()([
    'anchor',
    'direction',
    'flip',
    'gap',
    'placement',
]);
