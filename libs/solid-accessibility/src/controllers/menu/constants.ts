import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaMenuProps } from './types';

export const ARIA_MENU_PROPS = definePropKeys<AriaMenuProps>()([...ARIA_LABELLED_PROPS, 'role']);
