import { ARIA_LIST_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import { LIST_CONTEXT_OPTIONS } from '../../contexts';

import type { ListProps } from './types';

export const LIST_PROPS = definePropKeys<ListProps>()([
    ...LIST_CONTEXT_OPTIONS,
    ...ARIA_LIST_PROPS,
    'keyboard',
]);
