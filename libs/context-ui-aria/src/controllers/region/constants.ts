import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaRegionProps } from './types';

export const ARIA_REGION_PROPS = definePropKeys<AriaRegionProps>()([
    ...ARIA_LABELLED_PROPS,
    'role',
]);
