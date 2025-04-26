import { definePropKeys } from '../props';

import type { OwnFocusEventHandlers } from './types';

export const OWN_FOCUS_EVENT_HANDLERS = definePropKeys<OwnFocusEventHandlers>()([
    'onFocus',
    'onBlur',
]);
