import { OWN_FOCUS_EVENT_HANDLERS, definePropKeys } from '@noodlestan/context-ui-primitives';

import { PRESSABLE_PROPS } from '../Pressable';

import type { ButtonProps } from './types';

export const BUTTON_PROPS = definePropKeys<ButtonProps>()([
    ...PRESSABLE_PROPS,
    ...OWN_FOCUS_EVENT_HANDLERS,
    'id',
    'href',
    'rel',
    'target',
]);
