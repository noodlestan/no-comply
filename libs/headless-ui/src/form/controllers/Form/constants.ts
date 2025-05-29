import { FORM_CONTEXT_OPTIONS } from '@noodlestan/context-ui';
import { ARIA_FORM_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { FormProps } from './types';

export const FORM_PROPS = definePropKeys<FormProps>()([
    ...FORM_CONTEXT_OPTIONS,
    ...ARIA_FORM_PROPS,
    'tag',
    'onSubmit',
]);
