import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { FOCUSABLE_PROPS } from '../../controllers';

import type { FocusableBaseProps } from './types';

export const FOCUSABLE_BASE_PROPS = definePropKeys<FocusableBaseProps>()([
    ...FOCUSABLE_PROPS,
    'labels',
]);
