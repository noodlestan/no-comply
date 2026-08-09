import { definePropKeys } from '@no-comply/solid-primitives';

import type { AriaLiveProps } from './types';

export const ARIA_LIVE_PROPS = definePropKeys<AriaLiveProps>()(['live', 'atomic', 'relevant']);
