import { ARIA_LABELLED_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { StaticMessageProps } from './types';

export const STATIC_MESSAGE_PROPS = definePropKeys<StaticMessageProps>()([
    ...ARIA_LABELLED_PROPS,
    'variant',
]);
