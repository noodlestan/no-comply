import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaMenuItemProps } from './types';

export const ARIA_MENU_ITEM_PROPS = definePropKeys<AriaMenuItemProps>()([
    ...ARIA_LABELLED_PROPS,
    'role',
]);
