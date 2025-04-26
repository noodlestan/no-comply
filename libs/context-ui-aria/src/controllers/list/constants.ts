import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaListProps } from './types';

export const ARIA_LIST_PROPS = definePropKeys<AriaListProps>()([
    ...ARIA_LABELLED_PROPS,
    'tag',
    'orientation',
    'multiselectable',
]);
