import { definePropKeys } from '../props';

import type { ExtendedPressEventHandlers, PressEventHandlers } from './types';

export const PRESS_EVENT_HANDLERS = definePropKeys<PressEventHandlers>()(['onPress']);

export const EXTENDED_PRESS_EVENT_HANDLERS = definePropKeys<ExtendedPressEventHandlers>()([
	'onAltPress',
	'onShiftPress',
	'onLongPress',
	'onDoublePress',
]);
