import { definePropKeys } from '@no-comply/solid-primitives';

import { PRESSABLE_PROPS } from '../../../action';

import type { LinkProps } from './types';

export const LINK_PROPS = definePropKeys<LinkProps>()([
    ...PRESSABLE_PROPS,
    'href',
    'label',
    'target',
    'disabled',
    'rel',
]);
