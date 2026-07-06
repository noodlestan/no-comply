import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaRadioGroupProps } from './types';

export const ARIA_RADIO_GROUP_PROPS = definePropKeys<AriaRadioGroupProps>()(ARIA_LABELLED_PROPS);
