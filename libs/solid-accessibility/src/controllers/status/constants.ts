import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaStatusProps } from './types';

export const ARIA_STATUS_PROPS = definePropKeys<AriaStatusProps>()(ARIA_LABELLED_PROPS);
