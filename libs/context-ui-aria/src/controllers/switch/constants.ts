import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaSwitchProps } from './types';

export const ARIA_SWITCH_PROPS = definePropKeys<AriaSwitchProps>()([
    ...ARIA_LABELLED_PROPS,
    'tag',
    'checked',
    'disabled',
]);
