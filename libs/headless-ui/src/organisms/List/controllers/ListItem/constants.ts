import { ARIA_LIST_ITEM_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';

import type { ListItemProps } from './types';

export const LIST_ITEM_PROPS = definePropKeys<ListItemProps>()([
    ...omitPropKeys(ARIA_LIST_ITEM_PROPS, ['component', 'selected'] as const),
    'item',
]);
