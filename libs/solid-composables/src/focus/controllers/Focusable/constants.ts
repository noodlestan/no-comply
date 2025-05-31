import { ARIA_REGION_PROPS } from '@no-comply/solid-accessibility';
import { FOCUS_CONTEXT_OPTIONS } from '@no-comply/solid-contexts';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { FocusableProps } from './types';

export const $FOCUSABLE = 'controller:composable:focusable';

export const FOCUSABLE_PROPS = definePropKeys<FocusableProps>()([
    ...ARIA_REGION_PROPS,
    ...FOCUS_CONTEXT_OPTIONS,
    'tag',
    'tabIndex',
]);
