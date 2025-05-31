import { definePropKeys } from '@no-comply/solid-primitives';

import { LIST_PROPS } from '../../controllers';

import type { ListBaseProps } from './types';

export const $LIST_BASE = 'component:composable:list-base';

export const LIST_BASE_PROPS = definePropKeys<ListBaseProps>()(LIST_PROPS);
