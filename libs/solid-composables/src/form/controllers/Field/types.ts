import type {
	FieldContext,
	FieldContextOptions,
	FieldContextValue,
} from '@no-comply/solid-contexts';
import type { DataAttributeBoolean } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

export type FieldProps = FieldContextOptions;

export type FieldAPI = {
	$root: {
		'data-disabled': DataAttributeBoolean;
		'data-field-readonly': DataAttributeBoolean;
		'data-field-pending': DataAttributeBoolean;
		'data-field-touched': DataAttributeBoolean;
		'data-field-modified': DataAttributeBoolean;
		'data-field-invalid': DataAttributeBoolean;
		'data-field-submitted': DataAttributeBoolean;
		'data-field-has-feedback': DataAttributeBoolean;
	};
	$label: {
		for: string;
	};
	$description: object;
	$input: {
		id: string;
		ref: (el: HTMLElement) => void;
	};
	$feedback: object;
	context: FieldContext;
	contextValue: FieldContextValue;
	hasFeedback: Accessor<boolean>;
};
