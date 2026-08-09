import type { AriaFormAPI, AriaFormProps, AriaLabelledAPI } from '@no-comply/solid-accessibility';
import type { FormContext, FormContextOptions, FormContextValue } from '@no-comply/solid-contexts';
import type { DataAttributeBoolean } from '@no-comply/solid-primitives';

import type { PressableProps } from '../../../action';

export type FormProps = AriaFormProps &
	FormContextOptions & {
		onSubmit?: (form: FormAPI) => void;
	};

export type FormAPI = {
	$root: AriaFormAPI['$root'] & {
		onSubmit: () => void;
		'data-disabled': DataAttributeBoolean;
		'data-form-readonly': DataAttributeBoolean;
		'data-form-pending': DataAttributeBoolean;
		'data-form-touched': DataAttributeBoolean;
		'data-form-modified': DataAttributeBoolean;
		'data-form-invalid': DataAttributeBoolean;
		'data-form-submitted': DataAttributeBoolean;
		'data-form-feedback-enabled': DataAttributeBoolean;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
	$submitButton: PressableProps & {
		type: 'submit';
	};
	context: FormContext;
	contextValue: FormContextValue;
};
