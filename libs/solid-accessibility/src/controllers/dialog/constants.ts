import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaDialogProps } from './types';

export const ARIA_DIALOG_PROPS = definePropKeys<AriaDialogProps>()(ARIA_LABELLED_PROPS);
