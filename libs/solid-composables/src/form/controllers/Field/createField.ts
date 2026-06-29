import {
	createExposable,
	createFieldContext,
	exposeAPI,
	useFormMaybe,
} from '@no-comply/solid-contexts';
import { combineProps, computedProps, dataBoolean } from '@no-comply/solid-primitives';
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
		'data-disabled': () => dataBoolean(context.isDisabled()),
		'data-field-readonly': () => dataBoolean(context.isReadonly()),
		'data-field-pending': () => dataBoolean(context.isPending()),
		'data-field-touched': () => dataBoolean(context.isTouched()),
		'data-field-modified': () => dataBoolean(context.isModified()),
		'data-field-invalid': () => dataBoolean(context.isInvalid()),
		'data-field-submitted': () => dataBoolean(context.isSubmitted()),
		'data-field-has-feedback': () => dataBoolean(hasFeedback()),
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
