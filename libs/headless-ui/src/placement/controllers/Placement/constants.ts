import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { PlacementProps } from './types';

export const PLACEMENT_PROPS = definePropKeys<PlacementProps>()([
    'anchor',
    'direction',
    'flip',
    'gap',
    'placement',
]);
