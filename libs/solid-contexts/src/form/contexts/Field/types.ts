import type { Accessor } from 'solid-js';

import type { BaseContext } from '../../../context';

export type FieldContextOptions = {
	required?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	pending?: boolean;
	touched?: boolean;
	modified?: boolean;
	invalid?: boolean;
};

export type FieldContext = BaseContext & {
	type: 'form-field';
	id: string;
	isRequired: Accessor<boolean>;
	isDisabled: Accessor<boolean>;
	isReadonly: Accessor<boolean>;
	isPending: Accessor<boolean>;
	isTouched: Accessor<boolean>;
	isModified: Accessor<boolean>;
	isInvalid: Accessor<boolean>;
	isSubmitted: Accessor<boolean>;
};

export type FieldContextValue = [FieldContext];
