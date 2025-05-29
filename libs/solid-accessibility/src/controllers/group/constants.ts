import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaGroupProps } from './types';

export const ARIA_GROUP_PROPS = definePropKeys<AriaGroupProps>()([
    ...ARIA_LABELLED_PROPS,
    'expanded',
    'setSize',
]);
