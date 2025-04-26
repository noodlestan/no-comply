import { FOCUS_CONTEXT_OPTIONS } from '@noodlestan/context-ui';
import { ARIA_REGION_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { FocusableProps } from './types';

export const FOCUSABLE_PROPS = definePropKeys<FocusableProps>()([
    ...ARIA_REGION_PROPS,
    ...FOCUS_CONTEXT_OPTIONS,
    'tag',
    'tabIndex',
]);
