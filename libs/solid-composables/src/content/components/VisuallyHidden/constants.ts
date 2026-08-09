import { definePropKeys } from '@no-comply/solid-primitives';

import type { VisuallyHiddenProps } from './types';

export const $VISUALLY_HIDDEN = 'component:composable:visually-hidden';

export const VISUALLY_HIDDEN_PROPS = definePropKeys<VisuallyHiddenProps>()(['tag', 'role']);
