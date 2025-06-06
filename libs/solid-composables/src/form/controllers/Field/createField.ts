import {
	createExposable,
	createFieldContext,
	exposeAPI,
	useFormMaybe,
} from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';
import { createSignal } from 'solid-js';

import { $FIELD } from './constants';
import type { FieldAPI, FieldProps } from './types';

export const createField = (props: FieldProps): FieldAPI => {
	const [locals, expose, compose] = createExposable($FIELD, props);

	const [isTouched, setIsTouched] = createSignal(false);
	const [isModified, setIsModified] = createSignal(false);
	const [isInvalid, setIsInvalid] = createSignal(false);

	const fieldContextState = computedProps({
		touched: isTouched,
		modified: isModified,
		invalid: isInvalid,
	});
	const fieldContextOptions = combineProps(locals, fieldContextState);
	const contextValue = createFieldContext(fieldContextOptions);
	const [context] = contextValue;
	compose(context);

	let inputEl: HTMLElement;
	const form = useFormMaybe();

	const setInputRef = (el: HTMLElement) => {
		inputEl = el;
		// WIP
		console.info(setIsTouched, setIsInvalid, setIsModified, inputEl);
	};

	const hasFeedback = () => context.isInvalid() && (!form || form?.isFeedbackEnabled());

	const $root = computedProps({
		'data-disabled': () => (context.isDisabled() ? '' : undefined),
		'data-field-readonly': () => (context.isReadonly() ? '' : undefined),
		'data-field-pending': () => (context.isPending() ? '' : undefined),
		'data-field-touched': () => (context.isTouched() ? '' : undefined),
		'data-field-modified': () => (context.isModified() ? '' : undefined),
		'data-field-invalid': () => (context.isInvalid() ? '' : undefined),
		'data-field-submitted': () => (context.isSubmitted() ? '' : undefined),
		'data-field-has-feedback': () => (hasFeedback() ? '' : undefined),
	});

	const $label = {
		for: context.id,
	};

	const $description = {};

	const $input = {
		id: context.id,
		ref: setInputRef,
		onInput: () => setIsTouched(true),
	};

	const $feedback = {};

	return exposeAPI(expose, '$root', {
		$root,
		$label,
		$description,
		$input,
		$feedback,
		context,
		contextValue,
		hasFeedback,
	});
};
