import { createAriaForm } from '@no-comply/solid-accessibility';
import { createExposable, createFormContext, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, dataBoolean } from '@no-comply/solid-primitives';

import { $FORM } from './constants';
import type { FormAPI, FormProps } from './types';

export const createForm = (props: FormProps = {}): FormAPI => {
	const [locals, expose, compose] = createExposable($FORM, props);

	const state: { api: FormAPI } = { api: {} as FormAPI };

	const contextValue = compose(createFormContext(locals));
	const [context] = contextValue;

	const { $root: $formRoot, $label, $description } = createAriaForm(locals);

	const $static = {
		onSubmit: () => locals.onSubmit?.(state.api),
	};
	const $root = computedProps($static, {
		'data-disabled': () => dataBoolean(context.isDisabled()),
		'data-form-readonly': () => dataBoolean(context.isReadonly()),
		'data-form-pending': () => dataBoolean(context.isPending()),
		'data-form-touched': () => dataBoolean(context.isTouched()),
		'data-form-modified': () => dataBoolean(context.isModified()),
		'data-form-invalid': () => dataBoolean(context.isInvalid()),
		'data-form-submitted': () => dataBoolean(context.isSubmitted()),
		'data-form-feedback-enabled': () => dataBoolean(context.isFeedbackEnabled()),
	});

	const $submitButtonStatic = {
		type: 'submit' as const,
	};
	const $submitButton = computedProps($submitButtonStatic, {
		disabled: () => context.isDisabled() || context.isPending(),
	});

	state.api = {
		$root: combineProps($formRoot, $root),
		$label,
		$description,
		$submitButton,
		context,
		contextValue,
	};

	return exposeAPI(expose, '$root', state.api);
};
