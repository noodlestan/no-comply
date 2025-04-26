import { ARIA_LIST_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { LIST_CONTEXT_OPTIONS } from '../../contexts';

import type { ListProps } from './types';

export const LIST_PROPS = definePropKeys<ListProps>()([
    ...LIST_CONTEXT_OPTIONS,
    ...ARIA_LIST_PROPS,
    'keyboard',
]);
