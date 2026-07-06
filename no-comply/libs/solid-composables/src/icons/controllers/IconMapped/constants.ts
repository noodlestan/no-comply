import { definePropKeys } from '@no-comply/solid-primitives';

import type { IconMappedProps } from './types';

export const $ICON_MAPPED = 'controller:composable:icon-mapped';

export const ICON_MAPPED_PROPS = definePropKeys<IconMappedProps>()(['key', 'map']);
