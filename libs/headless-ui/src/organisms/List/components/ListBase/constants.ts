import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { LIST_PROPS } from '../../controllers';

import type { ListBaseProps } from './types';

export const LIST_BASE_PROPS = definePropKeys<ListBaseProps>()(LIST_PROPS);
