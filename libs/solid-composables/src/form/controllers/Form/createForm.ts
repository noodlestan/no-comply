import { createAriaForm } from '@no-comply/solid-accessibility';
import { createExposable, createFormContext, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

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
		'data-disabled': () => (context.isDisabled() ? '' : undefined),
		'data-form-readonly': () => (context.isReadonly() ? '' : undefined),
		'data-form-pending': () => (context.isPending() ? '' : undefined),
		'data-form-touched': () => (context.isTouched() ? '' : undefined),
		'data-form-modified': () => (context.isModified() ? '' : undefined),
		'data-form-invalid': () => (context.isInvalid() ? '' : undefined),
		'data-form-submitted': () => (context.isSubmitted() ? '' : undefined),
		'data-form-feedback-enabled': () => (context.isFeedbackEnabled() ? '' : undefined),
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
