import { LINK_PROPS as HEADLESS_LINK_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { LinkProps } from './types';

export const LINK_PROPS = definePropKeys<LinkProps>()(HEADLESS_LINK_PROPS);
