import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaLogProps } from './types';

export const ARIA_LOG_PROPS = definePropKeys<AriaLogProps>()(ARIA_LABELLED_PROPS);
