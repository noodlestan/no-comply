import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { PRESSABLE_PROPS } from '../../../actions';

import type { LinkProps } from './types';

export const LINK_PROPS = definePropKeys<LinkProps>()([
    ...PRESSABLE_PROPS,
    'href',
    'label',
    'target',
    'disabled',
    'rel',
]);
