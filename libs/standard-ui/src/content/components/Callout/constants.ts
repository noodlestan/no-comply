import { ARIA_LABELLED_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';
import { STATIC_MESSAGE_PROPS } from '@noodlestan/headless-ui';

import type { CalloutProps } from './types';

const MESSAGE_PROPS = omitPropKeys(STATIC_MESSAGE_PROPS, ARIA_LABELLED_PROPS);

export const CALLOUT_PROPS = definePropKeys<CalloutProps>()([...MESSAGE_PROPS, 'size', 'length']);
