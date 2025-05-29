import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaFormProps } from './types';

export const ARIA_FORM_PROPS = definePropKeys<AriaFormProps>()([
    ...ARIA_LABELLED_PROPS,
    'tag',
    'role',
]);
