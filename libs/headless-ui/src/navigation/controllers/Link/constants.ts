import { PRESS_EVENT_HANDLERS, definePropKeys } from '@noodlestan/context-ui-primitives';

import type { LinkProps } from './types';

export const LINK_PROPS = definePropKeys<LinkProps>()([
    ...PRESS_EVENT_HANDLERS,
    'href',
    'label',
    'target',
    'disabled',
    'rel',
]);
