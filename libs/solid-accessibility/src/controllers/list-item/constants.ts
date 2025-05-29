import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaListItemProps } from './types';

export const ARIA_LIST_ITEM_PROPS = definePropKeys<AriaListItemProps>()([
    ...ARIA_LABELLED_PROPS,
    'tag',
    'selected',
    'setSize',
    'posInSet',
]);
