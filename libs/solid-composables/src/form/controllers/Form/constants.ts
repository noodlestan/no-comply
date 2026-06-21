import { ARIA_FORM_PROPS } from '@no-comply/solid-accessibility';
import { FORM_CONTEXT_OPTIONS } from '@no-comply/solid-contexts';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { FormProps } from './types';

export const $FORM = 'controller:composable:form';

export const FORM_PROPS = definePropKeys<FormProps>()([
	...ARIA_FORM_PROPS,
	...FORM_CONTEXT_OPTIONS,
	'onSubmit',
]);
