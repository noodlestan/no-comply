import { definePropKeys } from '@no-comply/solid-primitives';

import { LIST_ITEM_PROPS } from '../../controllers';

import type { ListItemBaseProps } from './types';

export const $LIST_ITEM_BASE = 'component:composable:list-item-base';

export const LIST_ITEM_BASE_PROPS = definePropKeys<ListItemBaseProps>()(LIST_ITEM_PROPS);
