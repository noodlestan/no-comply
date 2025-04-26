import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaDialogProps } from './types';

export const ARIA_DIALOG_PROPS = definePropKeys<AriaDialogProps>()(ARIA_LABELLED_PROPS);
