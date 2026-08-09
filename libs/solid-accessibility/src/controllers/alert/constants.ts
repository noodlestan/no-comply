import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaAlertProps } from './types';

export const ARIA_ALERT_PROPS = definePropKeys<AriaAlertProps>()(ARIA_LABELLED_PROPS);
