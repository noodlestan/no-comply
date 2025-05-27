import { ARIA_LABELLED_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';
import { STATIC_MESSAGE_PROPS } from '@noodlestan/headless-ui';

import type { CalloutProps } from './types';

export const CALLOUT_PROPS = definePropKeys<CalloutProps>()([
    ...omitPropKeys(STATIC_MESSAGE_PROPS, ARIA_LABELLED_PROPS),
    'size',
    'length',
]);
