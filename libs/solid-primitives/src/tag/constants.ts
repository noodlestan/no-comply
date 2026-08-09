import { definePropKeys } from '../props';

import type { PopoverTriggerTagProps } from './types';

export const POPVER_TRIGGER_TAG_PROPS = definePropKeys<PopoverTriggerTagProps>()([
	'popoverTarget',
	'popoverTargetAction',
]);
